import React from "react";
import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";

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

export default NoteItem;
