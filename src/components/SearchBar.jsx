import React, { useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";
import { getTextClass } from "../utils/theme-helper";

const SearchBar = ({ keyword, keywordChange }) => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);

  const textClass = getTextClass(theme);
  return (
    <div className="max-w-screen-xl mx-auto">
      <input
        type="text"
        placeholder={locale === "en" ? "Search note..." : "Cari catatan..."}
        className={`${textClass} w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500`}
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
