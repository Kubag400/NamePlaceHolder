import React from "react";
import { IoCloseCircle } from "react-icons/io5";

function Filters({
  selectedCategories,
  setSelectedCategories,
  searchTerm,
  setSearchTerm,
  categories,
}) {
  // Toggle selection of a category
  const handleCategoryClick = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((cat) => cat !== id) : [...prev, id]
    );
  };

  // Filter categories based on the search term
  const filteredCategories = categories.filter((category) =>
    category.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Clear all selected categories
  const clearAllCategories = () => {
    setSelectedCategories([]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2">Filters</h1>
      <p className="text-gray-400 text-sm">Pick your places.</p>
      {/* Search Bar and Delete All Button */}
      <div className="flex items-center space-x-4 mt-6 mb-6">
        {/* Search Input */}
        <div className="relative w-3/4">
          <input
            type="text"
            placeholder="Search places..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-sm p-2 pl-4 w-full pr-10 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-gray-800 text-white placeholder-gray-400"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-indigo-400"
            >
              <IoCloseCircle className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Delete All Button */}
        <button
          onClick={clearAllCategories}
          className="w-1/4 font-semibold text-gray-400  text-sm py-2 px-4 rounded-full hover:bg-red-700 hover:text-white hover:border-red-700 transition duration-150 hover:scale-105"
        >
          Clear All
        </button>
      </div>
      {/* Category Buttons or No Match Message */}

      <p className="text-white mb-2 font-semibold">Places</p>
      <div className="flex flex-wrap justify-start space-x-2">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`flex items-center text-sm px-6 py-1 mb-2.5 rounded-full border backdrop-blur-md transition duration-150 ${
                selectedCategories.includes(category.id)
                  ? "text-indigo-400 border-indigo-700"
                  : "text-gray-400 border-gray-600 hover:bg-indigo-700 hover:text-white hover:border-indigo-900"
              }`}
            >
              <span className="ml-1">{category.label}</span>
            </button>
          ))
        ) : (
          <p className="text-gray-500">No matching category found 😞</p>
        )}
      </div>
      <p className="text-white mb-2 font-semibold">Ratings</p>
      {/* <p className="text-white mb-2 font-semibold">Range</p> */}
    </div>
  );
}

export default Filters;
