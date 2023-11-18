import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContext";
import { getContainerClass, getTextClass } from "../utils/theme-helper";

const NotFoundPage = () => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  const containerClass = getContainerClass(theme);
  const textClass = getTextClass(theme);

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center p-8 font-semibold ${containerClass}`}
    >
      <p className={`text-4xl  ${textClass}`}>
        404 - {locale === "en" ? "Page Not Found" : "Halaman tidak ditemukan"}
      </p>
      <p className={`text-lg ${textClass}`}>
        {locale === "en"
          ? "Sorry, the page you were looking for was not found"
          : "Maaf, halaman yang Anda cari tidak ditemukan."}
      </p>
    </div>
  );
};

export default NotFoundPage;
