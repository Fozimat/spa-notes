import React from "react";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <div className="fixed bottom-0 right-0 p-4">
      <Link to="/note/new">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default AddButton;
