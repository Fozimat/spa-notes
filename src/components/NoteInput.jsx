import React, { useContext } from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContext";
import { getContainerClass, getTextClass } from "../utils/theme-helper";

const NoteInput = ({ addNote }) => {
  const { locale } = useContext(LocaleContext);
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
          {locale === "en" ? "Add New Note" : "Tambah Catatan Baru"}
        </h2>
        <div className="mb-4">
          <label
            htmlFor="title"
            className={`block text-sm font-medium ${textClass}`}
          >
            {locale === "en" ? "Title" : "Judul"}
          </label>
          <input
            type="text"
            id="title"
            className={`mt-1 p-2 border w-full rounded-md border-gray-300 focus:outline-none focus:border-blue-500 ${textClass}`}
            placeholder={
              locale === "en" ? "Enter title..." : "Masukkan judul..."
            }
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="body"
            className={`block text-sm font-medium ${textClass}`}
          >
            {locale === "en" ? "Body" : "Isi"}
          </label>
          <textarea
            id="body"
            className={`mt-1 p-2 border w-full rounded-md border-gray-300 focus:outline-none focus:border-blue-500 ${textClass}`}
            placeholder={locale === "en" ? "Enter body..." : "Masukkan isi..."}
            value={body}
            onChange={handleBodyChange}
          />
        </div>
        <button
          type="submit"
          className={`bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 ${textClass}`}
        >
          {locale === "en" ? "Save" : "Simpan"}
        </button>
      </form>
    </div>
  );
};

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
