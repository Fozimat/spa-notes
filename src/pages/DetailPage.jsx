import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/network-data";
import NoteDetail from "../components/NoteDetail";
import NotFoundPage from "../components/NotFoundPage";
import DeleteButton from "../components/DeleteButton";
import ArsipButton from "../components/ArsipButton";
import CancelArsipButton from "../components/CancelArsipButton";
import useLoading from "../hooks/useLoading";

const DetailPage = () => {
  const [note, setNote] = useState({});
  const [loading, setLoading] = useLoading();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { error, data } = await getNote(id);
        if (!error) {
          setNote(data);
          setLoading(false);
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

  const onArsipHandler = async () => {
    try {
      const { error } = await archiveNote(id);
      if (!error) {
        navigate("/");
      }
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const onCancelArsipHandler = async () => {
    try {
      const { error } = await unarchiveNote(id);
      if (!error) {
        navigate("/");
      }
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16"></div>
      </div>
    );
  }

  if (!note.id) {
    return <NotFoundPage />;
  }

  return (
    <>
      <NoteDetail {...note} />
      <DeleteButton onDelete={onDeleteHandler} />
      {note.archived ? (
        <CancelArsipButton onArsip={onCancelArsipHandler} />
      ) : (
        <ArsipButton onArsip={onArsipHandler} />
      )}
    </>
  );
};

export default DetailPage;
