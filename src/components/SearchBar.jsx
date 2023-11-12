import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <input
        type="text"
        placeholder="Cari catatan..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={keyword}
        onChange={(e) => keywordChange(e.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
