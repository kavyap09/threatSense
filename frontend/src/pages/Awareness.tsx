import { AlertTriangle, ShieldAlert, Smartphone, CreditCard, KeyRound, Mail, Link2, Eye, CheckCircle2 } from "lucide-react";

const techniques = [
  { icon: Mail, title: "Email Phishing", desc: "Fake emails from banks, government bodies, or employers asking for credentials or OTPs.", color: "text-destructive" },
  { icon: Smartphone, title: "SMS / UPI Scams", desc: "Messages claiming UPI rewards, KYC expiry, or Paytm/Google Pay account issues.", color: "text-warning" },
  { icon: CreditCard, title: "KYC Fraud", desc: "Fake KYC update links from SBI, ICICI, HDFC, or telecom providers to steal Aadhaar/PAN details.", color: "text-destructive" },
  { icon: KeyRound, title: "OTP Theft", desc: "Calls or messages tricking users into sharing one-time passwords for unauthorized transactions.", color: "text-warning" },
  { icon: Link2, title: "Fake Websites", desc: "Cloned banking and e-commerce sites with misspelled domains to capture login credentials.", color: "text-destructive" },
  { icon: Eye, title: "Social Engineering", desc: "Impersonation of IT support, HR, or managers to extract sensitive information from employees.", color: "text-warning" },
];

const tips = [
  "Never share OTP, PIN, or CVV with anyone — banks will never ask.",
  "Always verify the sender's email domain before clicking links.",
  "Look for HTTPS and valid certificates on websites.",
  "Don't click shortened URLs from unknown sources.",
  "Report suspicious messages to your IT security team.",
  "Enable two-factor authentication on all accounts.",
  "Verify KYC requests directly through official bank apps.",
  "Be cautious of urgency — scammers create panic to bypass thinking.",
];

const examples = [
  {
    type: "SMS Scam",
    text: "Dear Customer, Your SBI account will be blocked. Update KYC immediately: http://sbi-kyc-update.xyz/verify",
    danger: "Fake domain, urgency, KYC fraud",
  },
  {
    type: "Email Phishing",
    text: "Congratulations! You've won ₹50,000 cashback on Google Pay. Click here to claim your reward before it expires!",
    danger: "Too good to be true, reward scam",
  },
  {
    type: "OTP Scam",
    text: "This is HDFC Bank support. We detected unauthorized activity. Please share the OTP sent to your phone to secure your account.",
    danger: "OTP theft, impersonation",
  },
];

const Awareness = () => (
  <div className="min-h-screen pt-24 pb-16 px-4">
    <div className="container mx-auto max-w-5xl">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-warning/30 bg-warning/5 text-warning text-sm font-medium mb-6">
          <ShieldAlert className="w-4 h-4" />
          Cyber Awareness
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold">
          <span className="text-gradient">Phishing Awareness</span> & Education
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Learn how to identify and protect against phishing attacks targeting Indian enterprises and individuals.
        </p>
      </div>

      {/* What is Phishing */}
      <section className="gradient-card rounded-3xl border border-border p-8 mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <h2 className="text-2xl font-extrabold text-foreground mb-4">What is Phishing?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Phishing is a type of cyber attack where attackers disguise themselves as trusted entities to steal sensitive information like passwords, credit card numbers, OTPs, and personal data. In India, phishing attacks have surged by over 200% in recent years, particularly targeting digital payment users and enterprise employees.
        </p>
      </section>

      {/* Techniques */}
      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-6 animate-fade-in">Common Techniques in India</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techniques.map((t, i) => (
            <div
              key={t.title}
              className="gradient-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <t.icon className={`w-8 h-8 ${t.color} mb-4`} />
              <h3 className="font-bold text-foreground mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real Examples */}
      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-6 animate-fade-in">Real-World Examples</h2>
        <div className="space-y-4">
          {examples.map((ex, i) => (
            <div
              key={i}
              className="gradient-card rounded-2xl border border-destructive/20 p-6 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <span className="text-sm font-bold text-destructive">{ex.type}</span>
              </div>
              <p className="font-mono text-sm text-foreground bg-muted/50 rounded-xl p-4 mb-3 leading-relaxed">
                "{ex.text}"
              </p>
              <p className="text-xs text-warning font-medium">⚠️ Red flags: {ex.danger}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Warning Banner */}
      <div className="rounded-2xl border border-warning/30 bg-warning/5 p-6 mb-10 flex items-start gap-4 animate-fade-in">
        <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-warning">Important Warning</h3>
          <p className="text-sm text-muted-foreground mt-1">
            No bank, government agency, or legitimate company will ever ask for your OTP, PIN, or password via SMS, email, or phone call. Always verify through official channels.
          </p>
        </div>
      </div>

      {/* Safety Tips */}
      <section>
        <h2 className="text-2xl font-extrabold mb-6 animate-fade-in">Safety Tips</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="flex items-start gap-3 gradient-card rounded-2xl border border-border p-5 hover:border-primary/30 transition-all animate-fade-in"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{tip}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Awareness;
