import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote, getAllNotes, getNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import DeleteButton from "../components/DeleteButton";
import NotFoundPage from "../components/NotFoundPage";
import PropTypes from "prop-types";

const DetailPageWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailPage id={id} navigate={navigate} />;
};

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler() {
    const { id, navigate } = this.props;
    deleteNote(id);

    this.setState(() => {
      return {
        note: getAllNotes(),
      };
    });

    navigate("/");
  }

  render() {
    if (this.state.note == undefined) {
      return <NotFoundPage />;
    }

    return (
      <>
        <NoteDetail {...this.state.note} />
        <DeleteButton onDelete={this.onDeleteHandler} />
      </>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
