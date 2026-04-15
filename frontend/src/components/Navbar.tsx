import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Detect", path: "/detect" },
  { label: "Awareness", path: "/awareness" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center glow-primary transition-all group-hover:bg-primary/30">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold text-lg text-foreground">ThreatSense<span className="text-primary">.ai</span></span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === item.path
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* <Link
          to="/detect"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm glow-primary hover:brightness-110 transition-all"
        >
          Start Analysis
        </Link> */}

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border animate-fade-in">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  pathname === item.path
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* <Link
              to="/detect"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm glow-primary"
            >
              Start Analysis
            </Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
