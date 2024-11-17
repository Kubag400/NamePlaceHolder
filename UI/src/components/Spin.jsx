import React, { useState, useEffect } from "react";

const Spin = () => {
  const opponents = [
    "Chujem",
    "Cwelem",
    "Zjebany",
    "Najebany",
    "Cipą",
    "Pizdą",
    "Kurwą",
    "Skurwysynem",
    "Wyjebanym",
    "Gejem",
    "Nigg..",
    "Ujebany",
    "Pierdolnięty",
  ];

  const [currentOpponent, setCurrentPosition] = useState(opponents[0]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinSpeed, setSpinSpeed] = useState(100);

  useEffect(() => {
    let spinInterval;
    if (isSpinning) {
      spinInterval = setInterval(() => {
        setCurrentPosition(
          opponents[Math.floor(Math.random() * opponents.length)]
        );
      }, spinSpeed);
    }

    return () => clearInterval(spinInterval);
  }, [isSpinning, spinSpeed, opponents]);

  const startSpin = () => {
    setIsSpinning(true);
    setSpinSpeed(100);

    const fastSpinDuration = 2000;
    const slowDownDuration = 4000;
    let slowDownInterval;

    setTimeout(() => {
      slowDownInterval = setInterval(() => {
        setSpinSpeed((prevSpeed) => {
          const newSpeed = prevSpeed + 50;
          if (newSpeed >= 500) {
            clearInterval(slowDownInterval);
            setIsSpinning(false);
          }
          return newSpeed;
        });
      }, spinSpeed);
    }, fastSpinDuration);
  };

  return (
    <div className="flex flex-col items-center mt-12 space-y-6">
      <div className="text-3xl font-semibold text-gray-800">Jesteś?</div>
      <div className="text-5xl font-bold text-blue-600 animate-pulse">
        {currentOpponent}
      </div>
      <button
        onClick={startSpin}
        disabled={isSpinning}
        className={`flex items-center px-6 py-2 text-white rounded ${
          isSpinning ? "bg-gray-500 cursor-not-allowed" : "bg-blue-700"
        }`}
      >
        {isSpinning && (
          <svg
            className="animate-spin h-5 w-5 mr-3 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              className="opacity-25"
            />
            <path
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              className="opacity-75"
            />
          </svg>
        )}
        {isSpinning ? "Finding..." : "Find"}
      </button>
    </div>
  );
};

export default Spin;
