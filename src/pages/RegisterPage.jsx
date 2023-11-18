import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";
import RegisterInput from "../components/RegisterInput";
import ThemeContext from "../contexts/ThemeContext";
import { getContainerClass } from "../utils/theme-helper";

const RegisterPage = () => {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const containerClass = getContainerClass(theme);

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      alert("berhasil Daftar");
      navigate("/login");
      return;
    }
  };

  return (
    <section className={containerClass}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <RegisterInput register={onRegisterHandler} />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
