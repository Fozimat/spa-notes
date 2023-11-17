import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

const NoteInput = ({ addNote }) => {
  const [title, handleTitleChange] = useInput("");
  const [body, handleBodyChange] = useInput("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = { title, body };
    addNote(data);
  };

  return (
    <form
      className="max-w-screen-xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
      onSubmit={onSubmitHandler}
    >
      <h2 className="text-xl font-semibold mb-4">Tambah Catatan Baru</h2>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-600"
        >
          Judul:
        </label>
        <input
          type="text"
          id="title"
          className="mt-1 p-2 border w-full rounded-md  border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Masukkan judul..."
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="body"
          className="block text-sm font-medium text-gray-600"
        >
          Isi:
        </label>
        <textarea
          id="body"
          className="mt-1 p-2 border w-full rounded-md  border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Masukkan isi..."
          value={body}
          onChange={handleBodyChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Simpan
      </button>
    </form>
  );
};

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
