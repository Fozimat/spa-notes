import React, { useEffect, useState, useMemo } from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AddPage from "../pages/AddPage";
import { PATHS } from "../utils/constant.js";
import RegisterPage from "../pages/RegisterPage.jsx";
import {
  getUserLogged,
  putAccessToken,
  setItemStorage,
  getItemStorage,
} from "../utils/network-data.js";
import DetailPage from "../pages/DetailPage";
import ArsipPage from "../pages/ArsipPage.jsx";
import LocaleContext from "../contexts/LocaleContext.js";

const NotesApp = () => {
  const [locale, setLocale] = useState(() => getItemStorage("locale") || "en");
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setItializing] = useState(true);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "en" ? "id" : "en";
      setItemStorage("locale", newLocale);
      return newLocale;
    });
  };

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

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
        <LocaleContext.Provider value={localeContextValue}>
          <main>
            <Routes>
              <Route
                path={PATHS.ASTERISK}
                element={<LoginPage loginSuccess={onLoginSuccess} />}
              />
              <Route path={PATHS.REGISTER} element={<RegisterPage />} />
            </Routes>
          </main>
        </LocaleContext.Provider>
      </>
    );
  }

  return (
    <>
      <LocaleContext.Provider value={localeContextValue}>
        <Navigation logout={onLogout} />
        <main>
          <Routes>
            <Route path={PATHS.HOME} element={<HomePage />} />
            <Route path={PATHS.NOTE_DETAIL} element={<DetailPage />} />
            <Route path={PATHS.ADD_NOTE} element={<AddPage />} />
            <Route path={PATHS.ARSIP} element={<ArsipPage />} />
          </Routes>
        </main>
      </LocaleContext.Provider>
    </>
  );
};

export default NotesApp;
