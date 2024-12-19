import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { FaDice } from "react-icons/fa";
import Filters from "./Filters";
import Location from "./Location";
import Spin from "./Spin";
import { MapContainer, TileLayer } from "react-leaflet"; // Importing Map components
import "leaflet/dist/leaflet.css"; // Importing Leaflet CSS

function Main() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Main");

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

  const handleFilterRemove = (id) => {
    setSelectedCategories((prev) => prev.filter((cat) => cat !== id));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-8xl">
        <div className="absolute inset-0 z-0 p-8">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <MapContainer
              center={[51.505, -0.09]} // Default coordinates
              zoom={13}
              scrollWheelZoom={false}
              className="w-full h-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </MapContainer>
          </div>
        </div>

        {/* Left Card: Main Content */}
        <div className="glass-effect bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 w-full rounded-lg shadow-lg p-8 ml-20 col-span-1 lg:col-span-1">
          <div className="w-full rounded-lg shadow-md bg-gray-800/70 border border-gray-700 p-8 space-y-">
            <header className="text-center mb-6">
              <h1 className="text-2xl font-extrabold text-white bg-clip-text">
                🚀 GoTogether
              </h1>
              <p className="text-gray-400 text-sm mt-2">
                Connect, explore, and share your journey!
              </p>
            </header>
            {/* Navigation */}
            <nav className="flex justify-center space-x-6 text-white mb-6">
              <button
                className={`flex items-center space-x-2 px-4 py-2 ${
                  activeTab === "Main"
                    ? "bg-indigo-800 text-white rounded-md shadow-lg"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setActiveTab("Main")}
              >
                <span>🏠</span> <span>Main</span>
              </button>
              <button
                className={`flex items-center space-x-2 px-4 py-2 ${
                  activeTab === "Filters"
                    ? "bg-indigo-800 text-white rounded-md shadow-lg"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setActiveTab("Filters")}
              >
                <span>🔍</span> <span>Filters</span>
              </button>
              <button
                className={`flex items-center space-x-2 px-4 py-2 ${
                  activeTab === "Settings"
                    ? "bg-indigo-800 text-white rounded-md shadow-lg"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setActiveTab("Settings")}
              >
                <span>⚙️</span> <span>Settings</span>
              </button>
              <button
                className={`flex items-center space-x-2 px-4 py-2 ${
                  activeTab === "History"
                    ? "bg-indigo-800 text-white rounded-md shadow-lg"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setActiveTab("History")}
              >
                <span>⌚</span> <span>History</span>
              </button>
            </nav>
            {/* Main */}
            <main className="text-white">
              {activeTab === "Main" && (
                <div>
                  {/* Drawing Machine */}
                  {/* <h2 className="text-2xl font-bold text-indigo-500 bg-clip-text text-center">
                    GoTogether
                  </h2> */}
                  <div className="text-center">
                    {/* Heading with Gradient Text Effect */}
                    <Spin />
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    {selectedCategories.length === 0 && (
                      <button
                        onClick={() => setActiveTab("Filters")}
                        className="rounded-lg px-3.5 py-2.5 mt-2 mb-6 text-center text-white text-sm font-bold focus:outline-none focus:ring-4 bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-800 transition-transform transform hover:scale-105"
                      >
                        + Add Category
                      </button>
                    )}
                    {selectedCategories.map((id) => {
                      const category = categories.find((cat) => cat.id === id);
                      return (
                        category && (
                          <button
                            key={category.id}
                            onClick={() => handleFilterRemove(category.id)}
                            className="flex items-center space-x-2 px-3 py-1 bg-indigo-600 text-white rounded-full shadow-md hover:bg-red-800"
                          >
                            <span>{category.icon}</span>
                            <span>{category.label}</span>
                            <IoCloseCircle />
                          </button>
                        )
                      );
                    })}
                  </div>
                  {/* Last rolls */}

                  <div className="relative flex flex-col md:flex-row items-center bg-white border-2 border-gray-300 rounded-lg shadow-lg transform transition dark:border-gray-700 dark:bg-gray-800 w-full max-w-md md:max-w-lg">
                    {/* Image Section */}
                    <img
                      className="object-cover w-full rounded-t-lg md:w-full md:h-full md:rounded-none md:rounded-l-lg"
                      src="https://picsum.photos/125"
                      alt="Noteworthy technology acquisitions 2021"
                      style={{ width: "auto", height: "125px" }}
                    />
                    {/* Content Section */}
                    <div className="flex flex-col justify-between p-4 leading-normal w-full">
                      <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy Technology
                        <br />
                        <span className="ml-2 mb-2 text-sm font-extralight text-gray-500 dark:text-gray-400 tracking-wide">
                          <span className="font-semibold">+15 km </span>
                          from actual location
                        </span>
                      </h5>
                      <div className="flex w-full gap-2 mt-2">
                        {/* Button Container */}
                        <button
                          type="button"
                          className="flex-1 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-500 font-medium rounded-full text-xs px-4 py-2 text-center"
                        >
                          Navigate
                        </button>
                        <button
                          type="button"
                          className="flex-1 text-white border border-gray-600 hover:text-white bg-gray-800 hover:bg-gray-700 transition duration-150 focus:ring-2 focus:ring-gray-500 font-medium rounded-full text-xs px-4 py-2 text-center"
                        >
                          Description
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Filters" && (
                <Filters
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  categories={categories}
                />
              )}

              {activeTab === "Settings" && <Location />}
            </main>
          </div>
        </div>

        {/* Right Card: Larger Map */}
        {/* <div className="glass-effect w-full rounded-lg shadow-lg p-8 col-span-1 lg:col-span-4">
          <div className="rounded-lg overflow-hidden">
            <MapContainer
              center={[51.505, -0.09]} // Default coordinates
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </MapContainer>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Main;
