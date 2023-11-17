import React, { useEffect, useState } from "react";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getArchivedNotes } from "../utils/network-data";

const ArsipPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data } = await getArchivedNotes();
        setNotes(data);
      } catch (e) {
        console.error("Error: ", e);
      }
    };
    fetchNotes();
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section>
      <div className="flex-grow flex-shrink overflow-y-auto p-4">
        <h4 className="text-3xl font-bold max-w-screen-xl mx-auto py-2">
          Catatan Arsip
        </h4>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        <NoteList notes={filteredNotes} />
        <AddButton />
      </div>
    </section>
  );
};

ArsipPage.propTypes = {
  notes: PropTypes.string,
  keyword: PropTypes.func,
};

export default ArsipPage;
