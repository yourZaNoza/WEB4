import React, { useState } from "react";

const AuthForm = ({
  title,
  onSubmit,
  fields,
  submitText,
  linkText,
  linkPath,
  onLinkClick,
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        validationErrors[field.name] = `${field.label} обязательное поле`;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(formData);
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.title}>{title}</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} style={styles.field}>
            <label style={styles.label}>{field.label}</label>
            <input
              type={field.type || "text"}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              placeholder={field.placeholder}
              style={{
                ...styles.input,
                borderColor: errors[field.name] ? "red" : "#ddd",
              }}
            />
            {errors[field.name] && (
              <span style={styles.error}>{errors[field.name]}</span>
            )}
          </div>
        ))}
        {linkText && (
          <div style={styles.link}>
            <span>{linkText} </span>
            <button type="button" onClick={onLinkClick} style={styles.linkBtn}>
              {linkPath}
            </button>
          </div>
        )}
        <button type="submit" style={styles.submitBtn}>
          {submitText}
        </button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    backgroundColor: "#dcd6f7",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    margin: "2rem auto",
  },
  title: {
    textAlign: "center",
    color: "#4a3b7e",
    marginBottom: "1.5rem",
  },
  field: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "20px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    outline: "none",
  },
  error: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: "0.25rem",
  },
  link: {
    textAlign: "center",
    marginTop: "1rem",
    fontSize: "0.9rem",
  },
  linkBtn: {
    background: "none",
    border: "none",
    color: "#4a3b7e",
    textDecoration: "underline",
    cursor: "pointer",
    padding: 0,
    fontSize: "0.9rem",
  },
  submitBtn: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#4a3b7e",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "1rem",
  },
};

export default AuthForm;
