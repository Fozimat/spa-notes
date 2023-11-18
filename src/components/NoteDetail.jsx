import React, { useContext } from "react";
import { showFormattedDate } from "../utils/index";
import PropTypes from "prop-types";
import ThemeContext from "../contexts/ThemeContext";
import { getContainerClass, getTextClass } from "../utils/theme-helper";

const NoteDetail = ({ title, body, createdAt }) => {
  const { theme } = useContext(ThemeContext);
  const containerClass = getContainerClass(theme);
  const textClass = getTextClass(theme);

  return (
    <div className={`max-w-screen-xl mx-auto py-10 ${containerClass}`}>
      <div className="p-4 rounded-md shadow-md w-full">
        <h2 className={`text-xl font-semibold mb-2 ${textClass}`}>{title}</h2>
        <p className={`text-sm mb-2 ${textClass}`}>
          {showFormattedDate(createdAt)}
        </p>
        <p className={textClass}>{body}</p>
      </div>
    </div>
  );
};

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
