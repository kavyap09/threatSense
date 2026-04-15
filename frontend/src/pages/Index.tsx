import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Brain, Globe, Zap, Lock, BarChart3 } from "lucide-react";
import ShieldIcon from "@/components/ShieldIcon";

const features = [
  { icon: Brain, title: "AI Text Analysis", desc: "ML-powered NLP scans messages for phishing patterns and social engineering tactics." },
  { icon: Globe, title: "URL Reputation", desc: "Real-time checks against threat intelligence APIs for malicious domains." },
  { icon: BarChart3, title: "Risk Scoring", desc: "0–100% confidence scoring with detailed breakdown of risk factors." },
  { icon: Lock, title: "Indian Context", desc: "Trained on KYC, UPI, OTP, and India-specific phishing patterns." },
  { icon: Zap, title: "Instant Results", desc: "Get analysis results in under 2 seconds with actionable recommendations." },
  { icon: ShieldCheck, title: "Enterprise Ready", desc: "Built for Indian enterprises with compliance and audit trail support." },
];

const stats = [
  { value: "99.2%", label: "Detection Rate" },
  { value: "<2s", label: "Analysis Speed" },
  { value: "50K+", label: "Threats Blocked" },
  { value: "200+", label: "Enterprises" },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="gradient-hero relative overflow-hidden pt-32 pb-24 px-4">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Sense Before Strike
            </div>
          <h1 className="text-5xl sm:text-5xl lg:text-4xl font-extrabold leading-tight">
          <span className="text-gradient">AI-Powered</span>
            <br />
            Phishing Detection System
             </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Protecting Indian enterprises from cyber threats using intelligent analysis. Detect phishing emails, SMS, and URLs in real-time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
              to="/detect"
               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm glow-primary hover:brightness-110 transition-all group"
             >
               Start Analysis
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>

             <Link
               to="/awareness"
               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-secondary text-foreground font-medium text-sm hover:bg-muted transition-all"
             >
               Learn More
             </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <ShieldIcon />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="gradient-card rounded-2xl p-6 border border-border text-center animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl font-extrabold text-gradient">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Why <span className="text-gradient">ThreatSense.ai</span>?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Enterprise-grade phishing detection built specifically for the Indian threat landscape.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="gradient-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl text-center gradient-card rounded-3xl p-12 border border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="relative">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Secure Your Enterprise?</h2>
          <p className="text-muted-foreground mb-8">Start detecting phishing threats instantly with our AI-powered platform.</p>
          <Link
            to="/detect"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-bold glow-primary hover:brightness-110 transition-all"
          >
            Launch Detection <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
