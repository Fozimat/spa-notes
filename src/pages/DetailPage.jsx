import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
import NoteDetail from "../components/NoteDetail";
import NotFoundPage from "../components/NotFoundPage";

const DetailPage = () => {
  const [note, setNote] = useState({});
  const [initializing, setItializing] = useState(true);

  const { id } = useParams();

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

  if (initializing) {
    return null;
  }

  if (!note.id) {
    return <NotFoundPage />;
  }

  return (
    <>
      <NoteDetail {...note} />
    </>
  );
};

export default DetailPage;
