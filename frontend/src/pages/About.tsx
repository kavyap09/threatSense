import { Brain, Globe, BarChart3, Shield, Code2, Database, Users, Cpu } from "lucide-react";

const features = [
  { icon: Brain, title: "NLP Text Analysis", desc: "Machine learning models trained on Indian phishing datasets to detect social engineering patterns." },
  { icon: Globe, title: "URL Reputation APIs", desc: "Integration with VirusTotal, Google Safe Browsing, and custom threat intelligence feeds." },
  { icon: BarChart3, title: "Risk Scoring Engine", desc: "Weighted multi-factor scoring combining keyword analysis, URL checks, and behavioral patterns." },
  { icon: Database, title: "Threat Database", desc: "Continuously updated database of known phishing domains, IPs, and attack patterns." },
];

const techStack = [
  { icon: Code2, label: "React + TypeScript", desc: "Modern frontend" },
  { icon: Cpu, label: "Python ML Backend", desc: "scikit-learn / TensorFlow" },
  { icon: Globe, label: "REST APIs", desc: "Threat intelligence" },
  { icon: Database, label: "PostgreSQL", desc: "Data persistence" },
];

const About = () => (
  <div className="min-h-screen pt-24 pb-16 px-4">
    <div className="container mx-auto max-w-5xl">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
          <Shield className="w-4 h-4" />
          About the System
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold">
          About <span className="text-gradient">ThreatSense.ai</span>
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          An AI-powered phishing detection system built to protect Indian enterprises from evolving cyber threats.
        </p>
      </div>

      {/* System Overview */}
      <div className="gradient-card rounded-3xl border border-border p-8 mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <h2 className="text-2xl font-extrabold text-foreground mb-4">System Overview</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          ThreatSense.ai combines advanced Natural Language Processing with real-time URL reputation analysis to detect phishing messages targeting Indian users and enterprises. The system is specifically trained on India-centric attack vectors including KYC fraud, UPI scams, OTP theft, and banking phishing.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our multi-layered approach analyzes message content, embedded URLs, sender patterns, and contextual cues to provide a comprehensive risk assessment with actionable insights.
        </p>
      </div>

      {/* Core Features */}
      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-6">Core Features</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="gradient-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-6">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((t, i) => (
            <div
              key={t.label}
              className="gradient-card rounded-2xl border border-border p-5 text-center animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <t.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-bold text-sm text-foreground">{t.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="gradient-card rounded-3xl border border-border p-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Users className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-foreground">Project Team</h2>
            <p className="text-sm text-muted-foreground">Gaddi Sai Charan Reddy | Kavya Pendyala</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
         This project is developed to address the growing threat of phishing attacks in India’s rapidly digitizing environment. It applies concepts from machine learning, cybersecurity, and software development to create a practical, real-world solution.  </p>
        <div className="flex flex-wrap gap-3">
          {["Machine Learning", "Cybersecurity", "NLP", "Full-Stack Development", "Threat Intelligence"].map((tag) => (
            <span key={tag} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default About;
