import React from "react";

const getRiskColor = (status) => {
  switch (status) {
    case "Safe":
      return "bg-green-500";
    case "Moderate":
      return "bg-yellow-400";
    case "High":
      return "bg-orange-500";
    case "Critical":
      return "bg-red-600";
    default:
      return "bg-gray-400";
  }
};

const HIPAAThermometer = ({ score, status }) => {
  return (
    <div className="mt-4">
      <p className="font-semibold text-gray-700 mb-2">
        HIPAA Risk: <span className="font-bold">{status}</span> ({score}%)
      </p>
      <div className="w-full h-3 bg-gray-200 rounded-lg overflow-hidden">
        <div
          className={`h-3 ${getRiskColor(status)} transition-all duration-500`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
};

export default HIPAAThermometer;
