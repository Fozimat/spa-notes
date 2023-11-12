import React from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPageWrapper from "../pages/DetailPage";
import AddPage from "../pages/AddPage";
import DevelopmentPage from "./DevelopmentPage.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import { PATHS } from "../utils/constant.js";

const NotesApp = () => {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path={PATHS.HOME} element={<HomePage />} />
          <Route path={PATHS.NOTE_DETAIL} element={<DetailPageWrapper />} />
          <Route path={PATHS.ADD_NOTE} element={<AddPage />} />
          <Route path={PATHS.ARSIP} element={<DevelopmentPage />} />
          <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};

export default NotesApp;
