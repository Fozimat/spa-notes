import React from "react";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import { getAllNotes } from "../utils/local-data";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";

const HomePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword });
  };

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section>
        <div className="flex-grow flex-shrink overflow-y-auto p-4">
          <h4 className="text-3xl font-bold max-w-screen-xl mx-auto py-2">
            Catatan Aktif
          </h4>
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
          <NoteList notes={notes} />
          <AddButton />
        </div>
      </section>
    );
  }
}

export default HomePageWrapper;
