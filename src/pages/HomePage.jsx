import React, { useEffect, useState } from "react";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getActiveNotes } from "../utils/network-data";
import useLoading from "../hooks/useLoading";

const HomePage = () => {
  const [loading, setLoading] = useLoading();
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data } = await getActiveNotes();
        setNotes(data);
        setLoading(false);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16"></div>
      </div>
    );
  }

  return (
    <section>
      <div className="flex-grow flex-shrink overflow-y-auto p-4">
        <h4 className="text-3xl font-bold max-w-screen-xl mx-auto py-2">
          Catatan Aktif
        </h4>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        <NoteList notes={filteredNotes} />
        <AddButton />
      </div>
    </section>
  );
};

HomePage.propTypes = {
  notes: PropTypes.string,
  keyword: PropTypes.func,
};

export default HomePage;
