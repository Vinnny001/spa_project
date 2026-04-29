import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }

    setError("");

    // ✅ MOCK LOGIN (no backend yet)
    const tempUser = {
      email: form.email,
      name: "Client"
    };

    localStorage.setItem("user", JSON.stringify(tempUser));

    navigate("/client/dashboard");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 💆‍♀️</h2>
        <p style={styles.subtitle}>Login to Beauty Wonderland Spa</p>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>

          <input
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #ffd6e8, #fff)",
    fontFamily: "Arial"
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "18px",
    width: "340px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center"
  },

  title: {
    marginBottom: "5px",
    color: "#d63384"
  },

  subtitle: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#777"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    outline: "none",
    fontSize: "14px"
  },

  button: {
    padding: "12px",
    background: "linear-gradient(90deg, #ff66b2, #ff99cc)",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  },

  error: {
    color: "red",
    fontSize: "13px"
  }
};