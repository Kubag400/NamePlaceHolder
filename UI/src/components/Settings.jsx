import { useState } from "react";

function Settings() {
  const [rangeValue, setRangeValue] = useState(50);

  return (
    <div>
      {/* Location */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Location</h1>
        <p className="text-gray-400 text-sm">Your actual location.</p>
        <div className="relative w-full text-sm">
          <input
            type="text"
            value="Kęty"
            className="input-field text-xs p-2 mt-4 w-full pr-10 border border-gray-400 rounded"
          />
        </div>
      </div>
      {/* Range Slider */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Range</h1>
        <p className="text-gray-400 text-sm"> How far you want to go?</p>
        {/* Range slider with dynamic background */}
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
          className="w-full h-2 mt-6 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #6366F1 ${rangeValue}%, #A78BFA ${rangeValue}%, #F472B6 100%)`,
          }}
        />
        {/* Slider value display */}
        <div className="flex justify-between text-white mt-2">
          <span className="font-bold text-xs">0 km</span>
          <span className="text-md font-bold">{rangeValue} km</span>
          <span className="font-bold text-xs">100 km</span>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">Rating</h1>
      <p className="text-gray-400 text-sm">Others opinion about place.</p>
    </div>
  );
}
export default Settings;
