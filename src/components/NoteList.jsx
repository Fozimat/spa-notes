import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

const NoteList = ({ notes }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="max-w-screen-xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {notes.length === 0 ? (
        <p className="text-lg">
          {locale === "en" ? "Note is empty" : "Tidak ada catatan"}
        </p>
      ) : (
        notes.map((note) => <NoteItem key={note.id} {...note} />)
      )}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
