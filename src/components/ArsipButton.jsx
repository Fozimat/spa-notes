import React from "react";
import PropTypes from "prop-types";

const ArsipButton = ({ onArsip }) => {
  return (
    <div className="fixed bottom-0 right-16 p-4">
      <button
        onClick={() => onArsip()}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 8v13H3V8M1 3h22v5H1V3zM12 13l3 3m-3-3l-3 3"
          ></path>
        </svg>
      </button>
    </div>
  );
};

ArsipButton.propTypes = {
  onArsip: PropTypes.func.isRequired,
};

export default ArsipButton;
