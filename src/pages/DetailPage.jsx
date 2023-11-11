import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";

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
  }

  render() {
    if (this.state.note == undefined) {
      return <p>404, Pages Not Found</p>;
    }

    return <NoteDetail {...this.state.note} />;
  }
}

export default DetailPageWrapper;
