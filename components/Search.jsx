// components/SearchBar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { searchQueryState } from "@/state/atom";
import { useRecoilState } from "recoil";
const SearchBar = () => {
  const [isSearchVisible, setSearchVisible] = useState(true);

  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);

    // Call handleInputChange when the search button is clicked
    if (!isSearchVisible) {
      handleInputChange({ target: { value: "" } }); // Clear the search query
    }
  };
  const handleKeyPress = (event) => {
    // Check if the Enter key (key code 13) was pressed
    if (event.key === "Enter") {
      // Store the data in state or take the desired action
      setSearchQuery(searchQuery);
      console.log(searchQuery);
    }
  };
  console.log(searchQuery);
  return (
    <div className="relative">
      <button className="absolute top-0 left-0" onClick={toggleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className={`${
          isSearchVisible
            ? "w-40" // Set the width when visible, adjust as needed
            : "w-0" // Set the width when not visible, adjust as needed
        } duration-700 ease-in-out transition-width bg-transparent border-b-sky-400 outline-none border-b-2 text-white text-opacity-70 pl-9`}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
