import React, { useState, useEffect, useRef } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { HiOutlinePlusSm } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { LuClock4 } from "react-icons/lu";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import Spin from "./Spin.jsx";
import Filters from "./Filters";
import History from "./History";
import Trophies from "./Trophies";
import Settings from "./Settings";

function Main() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isTrophiesOpen, setIsTrophiesOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const menuRef = useRef(null);
  const historyRef = useRef(null);
  const trophiesRef = useRef(null);
  const settingsRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const toggleHistory = () => {
    setIsHistoryOpen(!isHistoryOpen);
  };

  const toggleTrophies = () => {
    setIsTrophiesOpen(!isTrophiesOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsCategoriesOpen(false);
      }
      if (
        historyRef.current &&
        !historyRef.current.contains(event.target) &&
        isHistoryOpen
      ) {
        setIsHistoryOpen(false);
      }
      if (
        trophiesRef.current &&
        !trophiesRef.current.contains(event.target) &&
        isTrophiesOpen
      ) {
        setIsTrophiesOpen(false);
      }
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target) &&
        isSettingsOpen
      ) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    isMenuOpen,
    isCategoriesOpen,
    isHistoryOpen,
    isTrophiesOpen,
    isSettingsOpen,
  ]);

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-between bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      {/* Card Wrapper */}
      <div className="flex w-11/12 mt-12 p-8 h-[800px] rounded-lg shadow-md glass-effect border border-gray-700">
        {/* Left Menu Section */}
        <div className="w-1/4 bg-gray-900 p-6 flex flex-col justify-between rounded-lg">
          <header className="text-center mb-6">
            <h1 className="text-2xl font-extrabold text-white bg-clip-text">
              🚀 GoTogether
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Connect, explore, and share your journey!
            </p>
          </header>
          <Spin />
          <h2 className="text-white text-xl font-bold mb-1">
            Categories
            {selectedCategories.length === 0 ? (
              <p className="flex items-center text-sm text-indigo-500 mt-4 mb-4">
                <BsExclamationCircle className="mr-2 w-5 h-5 text-indigo-500" />{" "}
                If nothing is selected, you roll from every category.
              </p>
            ) : (
              ""
            )}
          </h2>
          <div
            className={`w-full p-2 mb-2 rounded-lg shadow-sm flex justify-center items-center flex-wrap ${
              selectedCategories.length === 0 ? "border border-gray-700" : ""
            }`}
          >
            {selectedCategories.length === 0 ? (
              <button
                onClick={toggleMenu}
                className="mt-4 mb-4 w-10 h-10 flex items-center justify-center rounded-full text-indigo-500 ring-2 ring-indigo-700 hover:ring-indigo-600 hover:text-white hover:bg-indigo-700 focus:outline-none transition-transform transform hover:scale-105"
                aria-label="Add"
              >
                <HiOutlinePlusSm className="w-6 h-6" />
              </button>
            ) : (
              <div className="flex flex-wrap gap-2 justify-center">
                {selectedCategories.length > 0 &&
                  (selectedCategories.length <= 5 ? (
                    selectedCategories.map((id) => {
                      const category = categories.find((cat) => cat.id === id);
                      return (
                        category && (
                          <button
                            key={category.id}
                            onClick={() => handleFilterRemove(category.id)}
                            className="relative flex items-center justify-center w-12 h-12 text-xs backdrop-blur-md transition duration-150 text-gray-400 border border-indigo-600 hover:border-red-900 rounded-full"
                          >
                            <span className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-150">
                              {category.label}
                            </span>
                          </button>
                        )
                      );
                    })
                  ) : (
                    <>
                      <div className="relative group">
                        <button
                          onClick={toggleCategories}
                          className="flex items-center justify-center w-12 h-12 font-semibold bg-indigo-700 text-white rounded-full shadow-md hover:bg-indigo-800 transition-transform transform hover:scale-105"
                        >
                          {selectedCategories.length}
                        </button>
                        {/* Centered Tooltip */}
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 py-4 text-sm text-white bg-gray-900 w-[300px] border border-gray-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-50">
                          <p className="mb-6 font-bold text-xl">
                            Selected categories
                          </p>
                          {selectedCategories.map((id) => {
                            const category = categories.find(
                              (cat) => cat.id === id
                            );
                            return (
                              category && (
                                <button
                                  key={category.id}
                                  className="flex justify-center items-center space-x-1 px-4 w-full py-1 mt-1 mb-2 bg-indigo-700 text-white rounded-full shadow-md"
                                >
                                  <span>{category.label}</span>
                                </button>
                              )
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ))}
                <button
                  onClick={toggleMenu}
                  className="flex items-center justify-center w-12 h-12 text-gray-400 border border-gray-600 hover:bg-indigo-600 hover:text-white rounded-full shadow-md"
                >
                  <HiOutlinePlusSm className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
          <h2 className="text-white text-xl font-semibold mb-1">Menu</h2>
          {/* Menu */}
          <ul className="text-gray-400 space-y-4 mt-2 mb-4">
            {[
              {
                label: "History",
                onClick: toggleHistory,
                icon: <LuClock4 className="w-6 h-6" />,
              },
              {
                label: "Trophies",
                onClick: toggleTrophies,
                icon: <MdOutlineEmojiEvents className="w-7 h-7" />,
              },
              {
                label: "Settings",
                onClick: toggleSettings,
                icon: <HiOutlineCog6Tooth className="w-7 h-7" />,
              },
            ].map((item, idx) => (
              <li
                key={idx}
                onClick={item.onClick}
                className="w-full py-1.5 px-5 flex items-center gap-4 cursor-pointer text-sm rounded-full border border-gray-600 hover:bg-indigo-800 hover:text-white"
              >
                <div className="w-10 h-10 flex items-center justify-center text-indigo-500 rounded-full">
                  {item.icon}
                </div>
                <span className="flex-grow">{item.label}</span>
                <IoIosArrowForward className="w-4 h-4 text-gray-500" />
              </li>
            ))}
          </ul>
          {/* Profile */}
          <div className="flex items-center justify-between gap-4 mt-2">
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
            <button className="flex items-center gap-2 px-4 py-2 border border-indigo-700 text-indigo-500 hover:bg-indigo-700 hover:text-white rounded-lg shadow transition-transform transform hover:scale-105">
              <FiLogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Map */}

        <div className="w-3/4 bg-gray-700 relative ml-6 rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.96305791532195!3d-37.81627974202151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce720!2zTWFyYmxlLCBBdXN0cmFsaWE!5e0!3m2!1sen!2sus!4v1637834166857!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              title="Embedded Google Map"
            />
          </div>
        </div>

        {/* Modals */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-0 right-0 border-2 border-indigo-700 h-[800px] w-[450px] bg-gray-900 p-4 rounded-l-lg shadow-xl flex flex-col"
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 border border-gray-600 hover:bg-indigo-600 hover:text-white rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              >
                <IoMdClose className="h-5 w-5" />
              </button>
            </div>
            <Filters
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              categories={categories}
            />
          </div>
        )}

        {isCategoriesOpen && (
          <div
            ref={menuRef}
            className="absolute top-0 p-4 right-0 border-2 border-indigo-700 h-[800px] w-[450px] bg-gray-900 rounded-l-lg shadow-xl flex flex-col"
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsCategoriesOpen(false)}
                className="text-gray-400 border border-gray-600 hover:bg-indigo-600 hover:text-white rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              >
                <IoMdClose className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="mb-1 w-full">
                <h1 className="text-2xl font-bold text-white mb-2">
                  Categories
                </h1>
                <p className="text-gray-400 text-sm mb-4">
                  Your selected categories.
                </p>
              </div>
              {selectedCategories.map((id) => {
                const category = categories.find((cat) => cat.id === id);
                return (
                  category && (
                    <button
                      key={category.id}
                      className="flex justify-center items-center space-x-1 px-4 w-full md:w-3/4 py-1 mb-2.5 bg-indigo-700 text-white rounded-full shadow-md text-sm"
                    >
                      <span>{category.label}</span>
                    </button>
                  )
                );
              })}
            </div>
          </div>
        )}

        {isHistoryOpen && (
          <div
            ref={historyRef}
            className="absolute top-0 right-0 border-2 border-indigo-700 h-[800px] w-[450px] bg-gray-900 p-4 rounded-l-lg shadow-xl flex flex-col"
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsHistoryOpen(false)}
                className="text-gray-400 border border-gray-600 hover:bg-indigo-600 hover:text-white rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              >
                <IoMdClose className="h-5 w-5" />
              </button>
            </div>
            <History />
          </div>
        )}

        {isTrophiesOpen && (
          <div
            ref={trophiesRef}
            className="absolute top-0 right-0 border-2 border-indigo-700 h-[800px] w-[450px] bg-gray-900 p-4 rounded-l-lg shadow-xl flex flex-col"
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsTrophiesOpen(false)}
                className="text-gray-400 border border-gray-600 hover:bg-indigo-600 hover:text-white rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              >
                <IoMdClose className="h-5 w-5" />
              </button>
            </div>
            <Trophies />
          </div>
        )}

        {isSettingsOpen && (
          <div
            ref={settingsRef}
            className="absolute top-0 right-0 border-2 border-indigo-700 h-[800px] w-[450px] bg-gray-900 p-4 rounded-l-lg shadow-xl flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="text-gray-400 border border-gray-600 hover:bg-indigo-600 hover:text-white rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              >
                <IoMdClose className="h-5 w-5" />
              </button>
            </div>
            <Settings />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full py-6 text-gray-400 text-center text-xs">
        &copy; {new Date().getFullYear()} GoTogether. All rights reserved.
      </footer>
    </div>
  );
}

export default Main;
