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
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.email || !form.password) {
      setError("Please fill all required fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    const userData = {
      firstName: form.firstName,
      surname: form.surname,
      contact: form.contact,
      email: form.email,
      password: form.password,
      role: form.role
    };

    // store registered user
    localStorage.setItem("user", JSON.stringify(userData));

    setSuccess("Account created successfully 🎉");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Create Account 💆‍♀️</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="firstName" placeholder="First Name *" onChange={handleChange} style={styles.input} />
          <input name="surname" placeholder="Surname" onChange={handleChange} style={styles.input} />
          <input name="contact" placeholder="Contact" onChange={handleChange} style={styles.input} />
          <input name="email" placeholder="Email *" onChange={handleChange} style={styles.input} />
          <input name="password" type="password" placeholder="Password *" onChange={handleChange} style={styles.input} />
          <input name="confirmPassword" type="password" placeholder="Confirm Password *" onChange={handleChange} style={styles.input} />

          <div style={styles.radio}>
            <label>
              <input type="radio" name="role" value="customer" onChange={handleChange} defaultChecked />
              Customer
            </label>

            <label>
              <input type="radio" name="role" value="supplier" onChange={handleChange} />
              Supplier
            </label>
          </div>

          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #ffd6e8, #fff)"
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "380px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  radio: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px"
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    background: "#ec4899",
    color: "white",
    border: "none",
    borderRadius: "8px"
  }
};