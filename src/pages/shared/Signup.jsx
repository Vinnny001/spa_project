import { useState } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const headers = {
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning": "true"
};

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    contact: "",
    gender: "",
    address: "",
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

  const handleToggle = (role) => {
    setForm({ ...form, role });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔒 Role-based validation
    if (form.role === "customer") {
      if (!form.firstName || !form.email || !form.password) {
        setError("Please fill all required customer fields");
        return;
      }
    }

    if (form.role === "supplier") {
      if (!form.firstName || !form.surname || !form.email || !form.password) {
        setError("Please fill all required supplier fields");
        return;
      }
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    // ⚠️ Backend only accepts Male/Female/Other
    const safeGender =
      form.gender === "Prefer not to say"
        ? "Other"
        : form.gender;

    try {
      const res = await fetch(`${API}/v1/auth/register`, {
        method: "POST",
        headers,
        body: JSON.stringify(
          form.role === "customer"
            ? {
                firstName: form.firstName,
                surname: form.surname,
                contact: form.contact,
                gender: safeGender,
                email: form.email,
                password: form.password,
                role: "customer"
              }
            : {
                firstName: form.firstName, // supplier_name
                surname: form.surname,     // contact_person
                contact: form.contact,
                email: form.email,
                address: form.address,
                password: form.password,
                role: "supplier"
              }
        )
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      setSuccess("Account created successfully 🎉");

    } catch (err) {
      setError("Server error. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Create Account 💆‍♀️</h2>

        {/* 🔘 Toggle */}
        <div style={styles.toggle}>
          <button
            type="button"
            onClick={() => handleToggle("customer")}
            style={form.role === "customer" ? styles.activeToggle : styles.inactiveToggle}
          >
            Customer
          </button>

          <button
            type="button"
            onClick={() => handleToggle("supplier")}
            style={form.role === "supplier" ? styles.activeToggle : styles.inactiveToggle}
          >
            Supplier
          </button>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>

          {/* 👤 CUSTOMER FORM */}
          {form.role === "customer" && (
            <>
              <input name="firstName" placeholder="First Name *" onChange={handleChange} style={styles.input} />
              <input name="surname" placeholder="Surname" onChange={handleChange} style={styles.input} />
              <input name="contact" placeholder="Contact" onChange={handleChange} style={styles.input} />

              <select name="gender" onChange={handleChange} style={styles.input}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </>
          )}

          {/* 🏢 SUPPLIER FORM */}
          {form.role === "supplier" && (
            <>
              <input name="firstName" placeholder="Supplier Name *" onChange={handleChange} style={styles.input} />
              <input name="surname" placeholder="Contact Person *" onChange={handleChange} style={styles.input} />
              <input name="contact" placeholder="Phone" onChange={handleChange} style={styles.input} />
              <input name="address" placeholder="Address" onChange={handleChange} style={styles.input} />
            </>
          )}

          {/* 🔑 SHARED */}
          <input name="email" placeholder="Email *" onChange={handleChange} style={styles.input} />
          <input name="password" type="password" placeholder="Password *" onChange={handleChange} style={styles.input} />
          <input name="confirmPassword" type="password" placeholder="Confirm Password *" onChange={handleChange} style={styles.input} />

          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={{ textAlign: "center", marginTop: "15px" }}>
  Already have an account?{" "}
  <Link to="/login" style={{ color: "#ec4899", fontWeight: "bold" }}>
    Login
  </Link>
</p>
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
  toggle: {
    display: "flex",
    marginBottom: "15px",
    borderRadius: "8px",
    overflow: "hidden"
  },
  activeToggle: {
    flex: 1,
    padding: "10px",
    background: "#ec4899",
    color: "white",
    border: "none",
    cursor: "pointer"
  },
  inactiveToggle: {
    flex: 1,
    padding: "10px",
    background: "#eee",
    border: "none",
    cursor: "pointer"
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
  button: {
    marginTop: "10px",
    padding: "12px",
    background: "#ec4899",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};