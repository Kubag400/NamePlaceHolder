import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { HiOutlinePlusSm } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { LuClock4 } from "react-icons/lu";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

import Filters from "./Filters";

function Main() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      {/* Card Wrapper */}
      <div className="flex w-5/6 p-8 h-[800px] rounded-lg shadow-md glass-effect border border-gray-700">
        {/* Left Menu Section */}
        <div className="w-1/4 bg-gray-900 p-6 flex flex-col justify-between rounded-lg">
          <div>
            <header className="text-center mb-6">
              <h1 className="text-2xl font-extrabold text-white bg-clip-text">
                🚀 GoTogether
              </h1>
              <p className="text-gray-400 text-sm mt-2">
                Connect, explore, and share your journey!
              </p>
            </header>
            <div className="w-full py-2.5 mt-12 mb-4 px-5 text-sm font-semibold text-white focus:outline-none rounded-full border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 border-gray-600 hover:text-white flex items-center justify-between">
              <span>Alternative</span>
            </div>
            <div className="flex space-x-4 mt-6 mb-4">
              <button className="w-1/2 px-5 py-2 text-sm font-semibold text-white bg-indigo-700 rounded-full hover:bg-indigo-800 focus:outline-none transition-transform transform hover:scale-105">
                Roll
              </button>
              <button className="w-1/2 px-5 py-2 text-sm font-semibold text-gray-400 border border-gray-600 rounded-full hover:bg-gray-700 hover:text-white focus:outline-none transition-transform transform hover:scale-105">
                Show last
              </button>
            </div>

            <h2 className="text-white text-lg font-semibold mb-4">
              Categories
            </h2>
            <div
              className={`w-full p-2 mb-2 rounded-lg shadow-sm flex justify-center items-center flex-wrap ${
                selectedCategories.length === 0 ? "border border-gray-700" : ""
              }`}
            >
              {selectedCategories.length === 0 ? (
                <button
                  onClick={toggleMenu}
                  className="mt-4 mb-4 w-8 h-8 flex items-center justify-center rounded-full text-indigo-500 ring-2 ring-indigo-700 hover:ring-indigo-600 hover:text-white hover:bg-indigo-700 focus:outline-none transition-transform transform hover:scale-105"
                  aria-label="Add"
                >
                  <HiOutlinePlusSm className="w-6 h-6" />
                </button>
              ) : (
                <div className="flex flex-wrap gap-2 justify-center">
                  {selectedCategories.map((id) => {
                    const category = categories.find((cat) => cat.id === id);
                    return (
                      category && (
                        <button
                          key={category.id}
                          onClick={() => handleFilterRemove(category.id)}
                          className="flex items-center space-x-2 px-2 py-1 mt-1 mb-1 bg-indigo-600 text-white rounded-full shadow-md hover:bg-red-500"
                        >
                          <span>{category.icon}</span>
                          <span>{category.label}</span>
                          <IoCloseCircle />
                        </button>
                      )
                    );
                  })}
                </div>
              )}
            </div>

            <h2 className="text-white text-lg font-semibold mb-4">Menu</h2>
            <ul className="text-gray-400 space-y-4 mb-4">
              {[
                {
                  label: "History",
                  icon: <LuClock4 className="w-6 h-6" />,
                },
                {
                  label: "Trophies",
                  icon: <MdOutlineEmojiEvents className="w-7 h-7" />,
                },
                {
                  label: "Settings",
                  icon: <HiOutlineCog6Tooth className="w-7 h-7" />,
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="w-full py-2.5 px-5 flex items-center gap-4 cursor-pointer text-sm rounded-full border border-gray-600 hover:bg-indigo-800 hover:text-white transition-transform transform hover:scale-105"
                  onClick={item.action || null}
                >
                  <div className="w-10 h-10 flex items-center justify-center text-indigo-500 rounded-full">
                    {item.icon}
                  </div>
                  <span className="flex-grow">{item.label}</span>
                  <IoIosArrowForward className="w-4 h-4 text-gray-500" />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between gap-4">
            {/* Profile Info */}
            <div className="flex items-center gap-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt="Profile"
              />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Beginner
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <button className="flex items-center gap-2 px-4 py-2 border border-indigo-700 text-indigo-500 hover:bg-indigo-700 hover:text-white rounded-lg shadow transition-transform transform hover:scale-105">
              <FiLogOut className="w-5 h-5" /> {/* React Icon for logout */}
            </button>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-3/4 bg-gray-700 relative ml-6 rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            {/* Replace with an actual map integration */}
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.96305791532195!3d-37.81627974202151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce720!2zTWFyYmxlLCBBdXN0cmFsaWE!5e0!3m2!1sen!2sus!4v1633863195836!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Right-Side Smaller Menu */}
          {isMenuOpen && (
            <div className="absolute top-0 right-0 h-[800px] w-80 bg-gray-900 p-4 rounded-l-lg shadow-xl flex flex-col space-y-4 justify-center">
              <Filters
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                categories={categories}
              />
              <button
                className="mt-6 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
                onClick={toggleMenu}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
