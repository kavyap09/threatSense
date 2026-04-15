const ShieldIcon = () => (
  <div className="relative w-64 h-64 mx-auto animate-float">
    <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-2xl">
      <defs>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(160 84% 39%)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(160 60% 25%)" stopOpacity="0.9" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Shield body */}
      <path
        d="M100 10 L180 50 L180 120 C180 170 140 200 100 215 C60 200 20 170 20 120 L20 50 Z"
        fill="url(#shieldGrad)"
        stroke="hsl(160 84% 50%)"
        strokeWidth="2"
        filter="url(#glow)"
      />
      {/* Inner shield */}
      <path
        d="M100 30 L160 60 L160 115 C160 155 130 180 100 193 C70 180 40 155 40 115 L40 60 Z"
        fill="hsl(160 20% 6%)"
        stroke="hsl(160 84% 39%)"
        strokeWidth="1"
        opacity="0.8"
      />
      {/* Lock icon */}
      <rect x="80" y="100" width="40" height="35" rx="6" fill="hsl(160 84% 39%)" opacity="0.9" />
      <path
        d="M85 100 L85 85 C85 72 92 65 100 65 C108 65 115 72 115 85 L115 100"
        fill="none"
        stroke="hsl(160 84% 50%)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="100" cy="115" r="4" fill="hsl(160 20% 6%)" />
      <rect x="98" y="115" width="4" height="10" rx="2" fill="hsl(160 20% 6%)" />
      {/* AI text */}
      <text x="100" y="160" textAnchor="middle" fill="hsl(160 84% 50%)" fontSize="14" fontWeight="bold" fontFamily="monospace">
        A.I.
      </text>
    </svg>
    {/* Orbiting dots */}
    <div className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite]">
      <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full glow-primary" />
      <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-accent rounded-full glow-accent" />
    </div>
  </div>
);

export default ShieldIcon;
