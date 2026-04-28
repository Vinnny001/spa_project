import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "customer"
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!form.email || !form.firstName || !form.password) {
      setError("Please fill all required fields");
      return;
    }

    setError("");
    console.log("Form Data:", form);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={form.surname}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={form.contact}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />

          {/* Radio Buttons */}
          <div style={styles.radioContainer}>
            <label>
              <input
                type="radio"
                name="role"
                value="customer"
                checked={form.role === "customer"}
                onChange={handleChange}
              />{" "}
              Customer
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="supplier"
                checked={form.role === "supplier"}
                onChange={handleChange}
              />{" "}
              Supplier
            </label>
          </div>

          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

/* 🔥 Inline Styles Object */
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdf2f8"
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "15px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },
  radioContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px"
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    backgroundColor: "#ec4899",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  error: {
    color: "red",
    textAlign: "center",
    fontSize: "14px"
  }
};