import React from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";
import RegisterInput from "../components/RegisterInput";

const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      alert("berhasil Daftar");
      navigate("/login");
      return;
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <RegisterInput register={onRegisterHandler} />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
