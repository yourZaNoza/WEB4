import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await api.post("/auth/login", data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/posts");
    } catch (err) {
      setError(err.response?.data?.message || "Ошибка входа");
    }
  };

  const fields = [
    {
      name: "email",
      label: "Логин",
      placeholder: "oooo@gmail.com",
      required: true,
    },
    {
      name: "password",
      label: "Пароль",
      placeholder: "************",
      type: "password",
      required: true,
    },
  ];

  return (
    <div>
      <AuthForm
        title="Авторизация"
        fields={fields}
        submitText="Войти"
        linkText="Зарегистрироваться"
        linkPath="/register"
        onLinkClick={() => navigate("/register")}
        onSubmit={handleLogin}
      />
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
    </div>
  );
};

export default Login;
