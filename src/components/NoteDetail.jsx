import React from "react";
import { showFormattedDate } from "../utils/index";

const NoteDetail = ({ title, body, createdAt }) => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4 py-4">
      <div className="bg-white p-4 rounded-md shadow-md w-full">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-500 text-sm mb-2">
          {showFormattedDate(createdAt)}
        </p>
        <p className="text-gray-800">{body}</p>
      </div>
    </div>
  );
};

export default NoteDetail;
