interface RiskGaugeProps {
  score: number; // 0–100
}

const RiskGauge = ({ score }: RiskGaugeProps) => {
  const rotation = (score / 100) * 180 - 90; // -90 to 90
  const color =
    score >= 70 ? "hsl(0 84% 60%)" : score >= 40 ? "hsl(43 96% 56%)" : "hsl(160 84% 39%)";

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-48 h-24 overflow-hidden">
        {/* Background arc */}
        <div className="absolute inset-0 rounded-t-full border-[12px] border-b-0 border-muted" />
        {/* Colored arc overlay */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
          <defs>
            <linearGradient id="gaugeGrad">
              <stop offset="0%" stopColor="hsl(160 84% 39%)" />
              <stop offset="50%" stopColor="hsl(43 96% 56%)" />
              <stop offset="100%" stopColor="hsl(0 84% 60%)" />
            </linearGradient>
          </defs>
          <path
            d="M 12 100 A 88 88 0 0 1 188 100"
            fill="none"
            stroke="url(#gaugeGrad)"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>
        {/* Needle */}
        <div
          className="absolute bottom-0 left-1/2 origin-bottom transition-transform duration-1000 ease-out"
          style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
        >
          <div className="w-1 h-20 rounded-full" style={{ background: color }} />
          <div
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
            style={{ background: color, boxShadow: `0 0 12px ${color}` }}
          />
        </div>
      </div>
      <div className="text-center">
        <span className="text-3xl font-bold font-mono" style={{ color }}>
          {score}%
        </span>
        <p className="text-xs text-muted-foreground mt-1">
          {score >= 70 ? "High Risk" : score >= 40 ? "Medium Risk" : "Low Risk"}
        </p>
      </div>
    </div>
  );
};

export default RiskGauge;
