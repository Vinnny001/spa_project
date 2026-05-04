import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/authService";
import "../../assets/styles/Signup.css";

export default function Signup() {
  const navigate = useNavigate();

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
    setError("");
    setSuccess("");

    // validation
    if (!form.firstName || !form.email || !form.password) {
      setError("Please fill all required fields");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // user object
    const userData = {
      firstName: form.firstName,
      surname: form.surname,
      contact: form.contact,
      email: form.email,
      password: form.password,
      role: form.role
    };

    // save user
    AuthService.register(userData);

    setSuccess("Account created successfully 🎉");

    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="container">
      <div className="card">

        <h2>Create Account 💆‍♀️</h2>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <form onSubmit={handleSubmit} className="form">

          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />

          <input
            name="surname"
            placeholder="Surname"
            onChange={handleChange}
          />

          <input
            name="contact"
            placeholder="Contact"
            onChange={handleChange}
          />

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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          {/* ROLE SELECTION */}
          <div className="radio">

            <label>
              <input
                type="radio"
                name="role"
                value="customer"
                checked={form.role === "customer"}
                onChange={handleChange}
              />
              Customer
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="supplier"
                checked={form.role === "supplier"}
                onChange={handleChange}
              />
              Supplier
            </label>

          </div>

          <button type="submit">Sign Up</button>

        </form>

      </div>
    </div>
  );
}