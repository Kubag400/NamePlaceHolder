import React, { useState, useEffect } from "react";

const Spin = () => {
  const categories = [
    { id: "love", label: "Love", icon: "💔" },
    { id: "favorite", label: "Favorite", icon: "🎨" },
    { id: "apple", label: "Apple", icon: "👔" },
    { id: "google", label: "Google", icon: "💎" },
    { id: "bros", label: "Bros", icon: "🍺" },
    { id: "job", label: "Job", icon: "🏌️" },
    { id: "travel", label: "Travel", icon: "✈️" },
    { id: "fitness", label: "Fitness", icon: "🏋️" },
    { id: "music", label: "Music", icon: "🎵" },
    { id: "tech", label: "Tech", icon: "💻" },
    { id: "food", label: "Food", icon: "🍔" },
    { id: "nature", label: "Nature", icon: "🌿" },
    { id: "art", label: "Art", icon: "🖼️" },
    { id: "gaming", label: "Gaming", icon: "🎮" },
    { id: "fashion", label: "Fashion", icon: "👗" },
    { id: "sports", label: "Sports", icon: "⚽" },
    { id: "books", label: "Books", icon: "📚" },
    { id: "pets", label: "Pets", icon: "🐶" },
    { id: "health", label: "Health", icon: "🩺" },
    { id: "movies", label: "Movies", icon: "🎥" },
  ];

  const [currentCategory, setCurrentCategory] = useState(
    "Roll your next journey!"
  );
  const [lastCategory, setLastCategory] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinSpeed, setSpinSpeed] = useState(100);

  useEffect(() => {
    let spinInterval;
    if (isSpinning) {
      spinInterval = setInterval(() => {
        const randomCategory =
          categories[Math.floor(Math.random() * categories.length)];
        setCurrentCategory(randomCategory.label);
      }, spinSpeed);
    }

    return () => clearInterval(spinInterval);
  }, [isSpinning, spinSpeed, categories]);

  const startSpin = () => {
    setIsSpinning(true);
    setSpinSpeed(100);
    setLastCategory(currentCategory);

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
    <div className="w-full max-w-md mx-auto space-y-6 mb-4">
      {/* Selected Category Display */}
      <div className="w-full py-2.5 mb-4 px-5 text-lg font-semibold text-white focus:outline-none rounded-full border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 border-gray-600 hover:text-white flex items-center justify-center">
        <span className="animate-pulse">{currentCategory}</span>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={startSpin}
          disabled={isSpinning}
          className={`w-1/2 px-5 py-2 text-sm font-semibold text-white bg-indigo-700 rounded-full hover:bg-indigo-800 focus:outline-none transition-transform transform hover:scale-105 ${
            isSpinning ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          <div className="inline-flex items-center">
            {/* Conditional Rendering for Spinning Animation */}
            {isSpinning && (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
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
            {/* Button Text */}
            {isSpinning ? "Rolling..." : "Roll"}
          </div>
        </button>

        {/* Show Last Button */}
        <button
          onClick={() => alert(`Last category: ${lastCategory || "None yet!"}`)}
          className="w-1/2 px-5 py-2 text-sm font-semibold text-gray-400 border bg-gray-800 border-gray-600 rounded-full hover:bg-gray-700 hover:text-white focus:outline-none transition-transform transform hover:scale-105"
        >
          Show Last
        </button>
      </div>
    </div>
  );
};

export default Spin;
