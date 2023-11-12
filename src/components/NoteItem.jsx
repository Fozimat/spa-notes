import React from "react";
import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NoteItem = ({ id, title, body, createdAt }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2">
        <Link to={`/note/${id}`}>{title}</Link>
      </h2>
      <p className="text-gray-500 text-sm mb-2">
        {showFormattedDate(createdAt)}
      </p>
      <p className="text-gray-800">{body}</p>
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
