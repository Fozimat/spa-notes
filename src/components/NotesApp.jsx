import React from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPageWrapper from "../pages/DetailPage";
import AddPage from "../pages/AddPage";

const NotesApp = () => {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/note/:id" element={<DetailPageWrapper />} />
          <Route path="/note/new" element={<AddPage />} />
        </Routes>
      </main>
    </>
  );
};

export default NotesApp;
