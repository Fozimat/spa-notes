import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AddPage from "../pages/AddPage";
import DevelopmentPage from "./DevelopmentPage.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import { PATHS } from "../utils/constant.js";
import RegisterPage from "../pages/RegisterPage.jsx";
import { getUserLogged, putAccessToken } from "../utils/network-data.js";
import DetailPage from "../pages/DetailPage";

const NotesApp = () => {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setItializing] = useState(true);

  useEffect(() => {
    const fetchUserLogged = async () => {
      try {
        const { data } = await getUserLogged();
        setAuthedUser(data);
        setItializing(false);
      } catch (e) {
        console.error("error: ", e);
      }
    };
    fetchUserLogged();
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <>
        <main>
          <Routes>
            <Route
              path={PATHS.ASTERISK}
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path={PATHS.REGISTER} element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Navigation logout={onLogout} />
      <main>
        <Routes>
          <Route path={PATHS.HOME} element={<HomePage />} />
          <Route path={PATHS.NOTE_DETAIL} element={<DetailPage />} />
          <Route path={PATHS.ADD_NOTE} element={<AddPage />} />
          <Route path={PATHS.ARSIP} element={<DevelopmentPage />} />
          {/* <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} /> */}
        </Routes>
      </main>
    </>
  );
};

export default NotesApp;
