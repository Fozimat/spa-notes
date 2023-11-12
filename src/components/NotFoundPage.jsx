import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-8 font-semibold">
      <p className="text-4xl text-red-700">404 - Page Not Found</p>
      <p className="text-lg ">Maaf, halaman yang Anda cari tidak ditemukan.</p>
    </div>
  );
};

export default NotFoundPage;
