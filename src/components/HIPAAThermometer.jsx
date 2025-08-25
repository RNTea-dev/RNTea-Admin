// components/HIPAAThermometer.jsx
import React from "react";

const normalize = (s = "Safe") => {
  const t = String(s).toLowerCase();
  if (t === "warning") return "Caution";
  if (t === "flagged") return "Block";
  if (t === "block") return "Block";
  if (t === "caution") return "Caution";
  if (t === "safe") return "Safe";
  return "Safe";
};

const textColor = {
  Safe: "text-green-700",
  Caution: "text-amber-700",
  Block: "text-red-700",
  Error: "text-gray-700",
};

const gradient = {
  Safe: "from-green-400 to-green-600",
  Caution: "from-amber-400 to-amber-600",
  Block: "from-red-500 to-red-700",
  Error: "from-gray-300 to-gray-500",
};

export default function HIPAAThermometer({ score = 0, status = "Safe" }) {
  const s = normalize(status);
  const pct = Math.max(0, Math.min(100, Number(score) || 0));
  const barGrad = gradient[s] || gradient.Caution;
  const labelColor = textColor[s] || textColor.Caution;

  return (
    <div className="w-full my-3">
      <div className={`text-sm font-semibold ${labelColor} mb-2`} aria-live="polite">
        HIPAA Risk: {s} ({pct}%)
      </div>

      <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${barGrad} transition-all duration-300`}
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
