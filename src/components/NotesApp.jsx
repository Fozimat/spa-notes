import React, { useEffect, useState, useMemo, useContext } from "react";
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
import ThemeContext from "../contexts/ThemeContext.js";
import NotFoundPage from "./NotFoundPage.jsx";

const NotesApp = () => {
  const [locale, setLocale] = useState(() => getItemStorage("locale") || "en");
  const [theme, setTheme] = useState(() => getItemStorage("theme") || "light");
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      setItemStorage("theme", newTheme);
      return newTheme;
    });
  };

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

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  useEffect(() => {
    const fetchUserLogged = async () => {
      try {
        const { data } = await getUserLogged();
        setAuthedUser(data);
        setInitializing(false);
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
        <ThemeContext.Provider value={themeContextValue}>
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
        </ThemeContext.Provider>
      </>
    );
  }

  return (
    <>
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <Navigation logout={onLogout} />
          <main>
            <Routes>
              <Route path={PATHS.HOME} element={<HomePage />} />
              <Route path={PATHS.NOTE_DETAIL} element={<DetailPage />} />
              <Route path={PATHS.ADD_NOTE} element={<AddPage />} />
              <Route path={PATHS.ARSIP} element={<ArsipPage />} />
              <Route path={PATHS.ASTERISK} element={<NotFoundPage />} />
            </Routes>
          </main>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default NotesApp;
