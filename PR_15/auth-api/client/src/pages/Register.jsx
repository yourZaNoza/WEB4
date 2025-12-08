import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import AuthForm from "../components/AuthForm";

const Register = () => {
  const [error, setError] = useState("");
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    if (!agreed) {
      setError("Вы должны согласиться с политикой обработки данных");
      return;
    }

    try {
      const response = await api.post("/auth/register", {
        email: data.email,
        confirmEmail: data.confirmEmail,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/posts");
    } catch (err) {
      if (err.response?.data?.errors) {
        // Показать первую ошибку валидации
        const firstError = err.response.data.errors[0].msg;
        setError(firstError);
      } else {
        setError(err.response?.data?.message || "Ошибка регистрации");
      }
    }
  };

  const fields = [
    {
      name: "email",
      label: "Почта",
      placeholder: "oooo@gmail.com",
      required: true,
    },
    {
      name: "confirmEmail",
      label: "Повторите почту",
      placeholder: "oooo@gmail.com",
      required: true,
    },
    { name: "firstName", label: "Имя", placeholder: "Вася", required: true },
    { name: "lastName", label: "Фамилия", placeholder: "Вася", required: true },
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
        title="Регистрация"
        fields={fields}
        submitText="Зарегистрироваться"
        linkText="Уже есть аккаунт? Войти"
        linkPath="/login"
        onLinkClick={() => navigate("/login")}
        onSubmit={handleRegister}
      />
      <div style={styles.agreement}>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          style={styles.checkbox}
        />
        <span style={styles.agreementText}>
          Вы согласны с политикой обработки персональных данных
        </span>
      </div>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
    </div>
  );
};

const styles = {
  agreement: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1rem",
  },
  checkbox: {
    marginRight: "0.5rem",
  },
  agreementText: {
    fontSize: "0.9rem",
    color: "#333",
  },
};

export default Register;
