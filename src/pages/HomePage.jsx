import React from "react";
import NoteList from "../components/NoteList";
import { getAllNotes } from "../utils/local-data";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
    };
  }

  render() {
    return (
      <section>
        <div className="flex-grow flex-shrink overflow-y-auto p-4">
          <h4 className="text-3xl font-bold max-w-screen-xl mx-auto py-2">
            Catatan Aktif
          </h4>
          <NoteList notes={this.state.notes} />
        </div>
      </section>
    );
  }
}

export default HomePage;
