import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/authService";

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
    setError("");

    if (!form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }

    const result = AuthService.login(form.email, form.password);

    if (result.success) {
      navigate("/client/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h2 style={styles.title}>Welcome Back 💆‍♀️</h2>

        <p style={styles.subtitle}>
          Login to access your Beauty Wonderland Spa account
        </p>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button type="submit">Login</button>

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
    background: "linear-gradient(135deg, #ffd6e8, #fff)"
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "18px",
    width: "340px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  },

  title: {
    color: "#d63384"
  },

  subtitle: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "20px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd"
  },

  button: {
    padding: "12px",
    background: "linear-gradient(90deg, #ff66b2, #ff99cc)",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  },

  error: {
    color: "red",
    fontSize: "13px"
  }
};