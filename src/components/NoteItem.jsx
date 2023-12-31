import React, { useContext } from "react";
import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ThemeContext from "../contexts/ThemeContext";
import { getContainerClass, getTextClass } from "../utils/theme-helper";

const NoteItem = ({ id, title, body, createdAt }) => {
  const { theme } = useContext(ThemeContext);
  const containerClass = getContainerClass(theme);
  const textClass = getTextClass(theme);

  return (
    <div className={`p-4 rounded-md shadow-md ${containerClass}`}>
      <h2 className="text-xl font-semibold mb-2">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h2>
      <p className="text-gray-500 text-sm mb-2">
        {showFormattedDate(createdAt)}
      </p>
      <p className={textClass}>{body}</p>
    </div>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
