import React from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPageWrapper from "../pages/DetailPage";
import AddPage from "../pages/AddPage";
import DevelopmentPage from "./DevelopmentPage.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

const NotesApp = () => {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/note/:id" element={<DetailPageWrapper />} />
          <Route path="/note/new" element={<AddPage />} />
          <Route path="/arsip" element={<DevelopmentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};

export default NotesApp;
