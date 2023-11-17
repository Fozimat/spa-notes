import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNote, deleteNote } from "../utils/network-data";
import NoteDetail from "../components/NoteDetail";
import NotFoundPage from "../components/NotFoundPage";
import DeleteButton from "../components/DeleteButton";

const DetailPage = () => {
  const [note, setNote] = useState({});
  const [initializing, setItializing] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { error, data } = await getNote(id);
        if (!error) {
          setNote(data);
          setItializing(false);
        }
      } catch (e) {
        console.error("Error :", e);
      }
    };
    fetchData();
  }, [id]);

  const onDeleteHandler = async () => {
    try {
      const { error } = await deleteNote(id);
      if (!error) {
        navigate("/");
      }
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  if (initializing) {
    return null;
  }

  if (!note.id) {
    return <NotFoundPage />;
  }

  return (
    <>
      <NoteDetail {...note} />
      <DeleteButton onDelete={onDeleteHandler} />
    </>
  );
};

export default DetailPage;
