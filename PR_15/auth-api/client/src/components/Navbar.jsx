import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    onLogout();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>CALIFORNIA</div>
      <button onClick={handleLogout} style={styles.logoutBtn}>
        Выход
      </button>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#4a3b7e",
  },
  logoutBtn: {
    backgroundColor: "#4a3b7e",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
};

export default Navbar;
