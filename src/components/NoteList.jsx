import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes }) => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {notes.length === 0 ? (
        <p>Tidak ada catatan</p>
      ) : (
        notes.map((note) => <NoteItem key={note.id} {...note} />)
      )}
    </div>
  );
};

export default NoteList;
