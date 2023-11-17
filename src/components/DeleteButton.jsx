import React from "react";
import PropTypes from "prop-types";

const DeleteButton = ({ onDelete }) => {
  return (
    <>
      <div className="fixed bottom-0 right-0 p-4">
        <button
          onClick={() => onDelete()}
          className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full flex items-center justify-center"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
