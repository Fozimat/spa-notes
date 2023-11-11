import React from "react";
import Navigation from "./Navigation";
import AddButton from "./AddButton";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPageWrapper from "../pages/DetailPage";

const NotesApp = () => {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/note/:id" element={<DetailPageWrapper />} />
        </Routes>
      </main>
      <AddButton />
    </>
  );
};

export default NotesApp;
