import React, { useContext } from "react";
import PropTypes from "prop-types";
import { login } from "../utils/network-data";
import LoginInput from "../components/LoginInput";
import ThemeContext from "../contexts/ThemeContext";
import { getContainerClass } from "../utils/theme-helper";

const LoginPage = ({ loginSuccess }) => {
  const { theme } = useContext(ThemeContext);
  const containerClass = getContainerClass(theme);

  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <section className={containerClass}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <LoginInput login={onLogin} />
        </div>
      </div>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
