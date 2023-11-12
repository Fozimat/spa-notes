import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/local-data";

const AddPage = () => {
  const navigate = useNavigate();

  const onAddNoteHandler = (note) => {
    addNote(note);
    navigate("/");
  };

  return <NoteInput addNote={onAddNoteHandler} />;
};

export default AddPage;
