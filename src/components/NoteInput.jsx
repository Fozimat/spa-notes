import React, { useContext } from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import ThemeContext from "../contexts/ThemeContext";
import { getContainerClass, getTextClass } from "../utils/theme-helper";

const NoteInput = ({ addNote }) => {
  const { theme } = useContext(ThemeContext);
  const containerClass = getContainerClass(theme);
  const textClass = getTextClass(theme);

  const [title, handleTitleChange] = useInput("");
  const [body, handleBodyChange] = useInput("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = { title, body };
    addNote(data);
  };

  return (
    <div className={`h-screen py-10 ${containerClass}`}>
      <form
        className={`max-w-screen-xl mx-auto p-6 rounded-md shadow-md ${containerClass}`}
        onSubmit={onSubmitHandler}
      >
        <h2 className={`text-xl font-semibold mb-4 ${textClass}`}>
          Tambah Catatan Baru
        </h2>
        <div className="mb-4">
          <label
            htmlFor="title"
            className={`block text-sm font-medium ${textClass}`}
          >
            Judul:
          </label>
          <input
            type="text"
            id="title"
            className={`mt-1 p-2 border w-full rounded-md border-gray-300 focus:outline-none focus:border-blue-500 ${textClass}`}
            placeholder="Masukkan judul..."
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="body"
            className={`block text-sm font-medium ${textClass}`}
          >
            Isi:
          </label>
          <textarea
            id="body"
            className={`mt-1 p-2 border w-full rounded-md border-gray-300 focus:outline-none focus:border-blue-500 ${textClass}`}
            placeholder="Masukkan isi..."
            value={body}
            onChange={handleBodyChange}
          />
        </div>
        <button
          type="submit"
          className={`bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 ${textClass}`}
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
