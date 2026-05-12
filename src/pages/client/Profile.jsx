import { useEffect, useState } from "react";
import "../../assets/styles/ProfilePage.css";

export default function Profile() {
  const [user, setUser] = useState({
    first_name: "",
    email: "",
    phone: "",
    paymentMethod: "",
  });
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored) setUser(stored);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const cancelEdit = () => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored) setUser(stored);
    setEditing(false);
  };

  const initials = user.first_name
    ? user.first_name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase()
    : "ME";

  return (
    <div className="profile-page">

      {/* TOAST */}
      <div className={`profile-toast ${saved ? "profile-toast--show" : ""}`}>
        ✓ Profile updated
      </div>

      {/* HERO */}
      <div className="profile-hero">
        <div className="profile-avatar">{initials}</div>
        <div className="profile-hero-text">
          <h1 className="profile-name">{user.first_name || "Your Name"}</h1>
          <p className="profile-sub">{user.email || "no email set"}</p>
          <span className="profile-badge">✦ Beauty Member</span>
        </div>
      </div>

      {/* PERSONAL INFO */}
      <div className="profile-card">
        <div className="profile-card-header">
          <span className="profile-card-icon">◈</span>
          <h2 className="profile-card-title">Personal Information</h2>
        </div>
        <div className="profile-fields">
          <div className="profile-field">
            <label htmlFor="first_name">Full Name</label>
            <input
              id="first_name"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
              disabled={!editing}
              placeholder="Your full name"
            />
          </div>
          <div className="profile-field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              disabled={!editing}
              placeholder="you@example.com"
            />
          </div>
          <div className="profile-field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={user.phone}
              onChange={handleChange}
              disabled={!editing}
              placeholder="+254 7XX XXX XXX"
            />
          </div>
        </div>
      </div>

      {/* PAYMENT */}
      <div className="profile-card">
        <div className="profile-card-header">
          <span className="profile-card-icon">◈</span>
          <h2 className="profile-card-title">Payment Details</h2>
        </div>

        {/* PAYMENT METHOD TOGGLE */}
        <div className="payment-toggle-group">
          <button
            type="button"
            className={`payment-toggle-btn ${user.paymentMethod === "mpesa" ? "payment-toggle-btn--active" : ""} ${!editing ? "payment-toggle-btn--disabled" : ""}`}
            onClick={() => editing && setUser({ ...user, paymentMethod: "mpesa" })}
          >
            <span className="payment-toggle-icon">📱</span>
            <span className="payment-toggle-label">M-Pesa</span>
            {user.paymentMethod === "mpesa" && <span className="payment-toggle-check">✓</span>}
          </button>

          <button
            type="button"
            className={`payment-toggle-btn ${user.paymentMethod === "card" ? "payment-toggle-btn--active" : ""} ${!editing ? "payment-toggle-btn--disabled" : ""}`}
            onClick={() => editing && setUser({ ...user, paymentMethod: "card" })}
          >
            <span className="payment-toggle-icon">💳</span>
            <span className="payment-toggle-label">Card</span>
            {user.paymentMethod === "card" && <span className="payment-toggle-check">✓</span>}
          </button>
        </div>

        {/* CONDITIONAL FIELDS */}
        {user.paymentMethod === "mpesa" && (
          <div className="profile-fields" style={{ marginTop: "1rem" }}>
            <div className="profile-field profile-field--full">
              <label htmlFor="mpesaPhone">M-Pesa Phone Number</label>
              <input
                id="mpesaPhone"
                name="mpesaPhone"
                type="tel"
                value={user.mpesaPhone || ""}
                onChange={handleChange}
                disabled={!editing}
                placeholder="+254 7XX XXX XXX"
              />
            </div>
          </div>
        )}

        {user.paymentMethod === "card" && (
          <div className="profile-fields" style={{ marginTop: "1rem" }}>
            <div className="profile-field profile-field--full">
              <label htmlFor="cardName">Name on Card</label>
              <input
                id="cardName"
                name="cardName"
                value={user.cardName || ""}
                onChange={handleChange}
                disabled={!editing}
                placeholder="As it appears on your card"
              />
            </div>
            <div className="profile-field profile-field--full">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                id="cardNumber"
                name="cardNumber"
                value={user.cardNumber || ""}
                onChange={handleChange}
                disabled={!editing}
                placeholder="•••• •••• •••• ••••"
                maxLength={19}
              />
            </div>
            <div className="profile-field">
              <label htmlFor="cardExpiry">Expiry Date</label>
              <input
                id="cardExpiry"
                name="cardExpiry"
                value={user.cardExpiry || ""}
                onChange={handleChange}
                disabled={!editing}
                placeholder="MM / YY"
                maxLength={7}
              />
            </div>
            <div className="profile-field">
              <label htmlFor="cardCvv">CVV</label>
              <input
                id="cardCvv"
                name="cardCvv"
                value={user.cardCvv || ""}
                onChange={handleChange}
                disabled={!editing}
                placeholder="•••"
                maxLength={4}
              />
            </div>
          </div>
        )}

        {!user.paymentMethod && (
          <p className="payment-unset-hint">Select a payment method above</p>
        )}
      </div>

      {/* BOOKING HISTORY */}
      <div className="profile-card">
        <div className="profile-card-header">
          <span className="profile-card-icon">◈</span>
          <h2 className="profile-card-title">Booking History</h2>
        </div>
        <div className="profile-empty">
          <span className="profile-empty-icon">🗓</span>
          <p>No bookings yet — your upcoming appointments will appear here</p>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="profile-actions">
        {editing ? (
          <>
            <button className="profile-btn profile-btn--ghost" onClick={cancelEdit}>
              Cancel
            </button>
            <button className="profile-btn profile-btn--primary" onClick={saveChanges}>
              Save Changes
            </button>
          </>
        ) : (
          <button className="profile-btn profile-btn--primary" onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        )}
      </div>

    </div>
  );
}