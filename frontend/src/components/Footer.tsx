import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 py-10 mt-20">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Shield className="w-5 h-5 text-primary" />
        <span className="font-bold text-foreground">ThreatSense<span className="text-primary">.ai</span></span>
      </div>
<p className="text-sm font-medium  text-muted-foreground/80">
  © 2026 AI-Based Phishing Detection for Indian Enterprises. All rights reserved.
</p>
    </div>
  </footer>
);

export default Footer;
