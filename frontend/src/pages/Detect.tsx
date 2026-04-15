import { useState } from "react";
import {
  Search,
  Loader2,
  RotateCcw,
} from "lucide-react";
import RiskGauge from "@/components/RiskGauge";

interface AnalysisResult {
  isPhishing: boolean;
  prediction: "Phishing" | "Suspicious" | "Safe";  
  score: number;
  reasons: { text: string; severity: "high" | "medium" | "low" }[];
  suspiciousWords: string[];
}
const Detect = () => {
  const [emailText, setEmailText] = useState("");
  const [url, setUrl] = useState("");
  const [mode, setMode] = useState<"text" | "url">("text");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  // 🔥 BACKEND CONNECTION
 const handleAnalyze = async () => {
  if (mode === "text" && !emailText.trim()) return;
  if (mode === "url" && !url.trim()) return;

  setLoading(true);
  setResult(null);

  try {
    const inputData = mode === "text" ? emailText : url;
const endpoint =
  mode === "text"
    ? "http://127.0.0.1:8000/predict"
    : "http://127.0.0.1:8000/detect-url";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: inputData }),
    });

    // ✅ Check response
    if (!response.ok) {
      throw new Error("Failed to fetch from backend");
    }

    const data = await response.json();
    console.log("Backend response:", data); // 🔍 debug

    // ✅ Format result properly
    const formattedResult: AnalysisResult = {
  isPhishing: data.prediction !== "Safe",   // 🔥 Suspicious also treated as risky
  prediction: data.prediction,              // 🔥 REQUIRED for UI
  score: Math.round((data.confidence || 0) * 100),

  reasons: [
    {
      text: `Prediction: ${data.prediction}`,
      severity:
        data.prediction === "Phishing"
          ? "high"
          : data.prediction === "Suspicious"
          ? "medium"
          : "low",
    },
    {
      text: `Risk Level: ${data.risk_level}`,
      severity:
        data.risk_level === "High"
          ? "high"
          : data.risk_level === "Medium"
          ? "medium"
          : "low",
    },
    {
      text: `Attack Type: ${data.attack_type}`,
      severity: "medium",
    },
    data.contains_url
      ? { text: "Contains suspicious URL", severity: "high" }
      : { text: "No suspicious URL detected", severity: "low" },
  ],

  suspiciousWords: [],
};

    console.log("Formatted result:", formattedResult); // 🔍 debug

    setResult(formattedResult);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // ✅ Always stop loading
    setLoading(false);
  }
};

  const handleClear = () => {
    setEmailText("");
    setUrl("");
    setResult(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gradient">
            Phishing Detection Module
          </h1>
          <p className="text-muted-foreground mt-2">
            Analyze messages or URLs for phishing threats.
          </p>
        </div>

        {/* Analysis BOX */}
        <div className="gradient-card rounded-3xl border border-border p-6 space-y-5">

          {/* Toggle */}
          <div className="flex items-center justify-between">
            <h3 className="font-bold tracking-wide">
              {mode === "text" ? "Email / Message Content" : "URL to check"}
            </h3>

            <div className="flex bg-muted/50 rounded-xl p-1 border border-border w-fit">
              <button
                onClick={() => setMode("text")}
                className={`px-4 py-1.5 text-sm rounded-lg font-medium transition-all duration-300 ${
                  mode === "text"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                📩 Text
              </button>

              <button
                onClick={() => setMode("url")}
                className={`px-4 py-1.5 text-sm rounded-lg font-medium transition-all duration-300 ${
                  mode === "url"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                🔗 URL
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="bg-muted/40 border border-border rounded-2xl p-4">
            {mode === "text" ? (
              <textarea
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
                rows={6}
                placeholder="Enter email or message..."
                className="w-full bg-transparent outline-none text-sm font-mono resize-none"
              />
            ) : (
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL..."
                className="w-full bg-transparent outline-none text-sm font-mono"
              />
            )}
          </div>

          {/* Button */}
          <button
            onClick={handleAnalyze}
            disabled={loading || (mode === "text" ? !emailText : !url)}
            className="w-full flex justify-center items-center gap-2 px-6 py-3 rounded-xl 
                       bg-primary text-primary-foreground font-semibold"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                Analyze
              </>
            )}
          </button>
        </div>

        {/* RESULT */}

{result && (
  <div className="mt-10 space-y-6">

    {/* 🔥 Result Card */}
    <div
      className={`rounded-2xl p-6 ${
        result.prediction === "Phishing"
          ? "bg-red-500/10"
          : result.prediction === "Suspicious"
          ? "bg-yellow-500/10"
          : "bg-green-500/10"
      }`}
    >
      <h3 className="text-xl font-bold">
        {result.prediction === "Phishing" && "🔴 Phishing Detected"}
        {result.prediction === "Suspicious" && "🟡 Suspicious"}
        {result.prediction === "Safe" && "🟢 Safe"}
      </h3>

      <p className="text-sm mt-1">
        Risk Score: {result.score}%
      </p>
    </div>

    {/* 🔥 Risk Gauge */}
    <RiskGauge score={result.score} />

    {/* 🔥 Reasons */}
    <div className="space-y-2">
      {result.reasons.map((r, i) => (
        <div key={i} className="text-sm">
          • {r.text}
        </div>
      ))}
    </div>

    {/* 🔥 Reset Button */}
    <button
      onClick={handleClear}
      className="px-4 py-2 border rounded-lg text-sm hover:bg-muted transition"
    >
      <RotateCcw className="w-4 h-4 inline mr-1" />
      Reset
    </button>

  </div>
)}

      </div>
    </div>
  );
};

export default Detect;

