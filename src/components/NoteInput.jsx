import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form
        className="max-w-screen-xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
        onSubmit={this.onSubmitEventHandler}
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
            className="mt-1 p-2 border w-full rounded-md"
            placeholder="Masukkan judul..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
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
            className="mt-1 p-2 border w-full rounded-md"
            placeholder="Masukkan isi..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
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
  }
}

export default NoteInput;
