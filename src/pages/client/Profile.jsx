import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    phone: "",
    paymentMethod: ""
  });

  const [editing, setEditing] = useState(false);

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
    alert("Profile updated ✨");
  };

  return (
    <div className="profile-page">

      <h2 className="profile-title">🌸 My Beauty Profile</h2>

      {/* PERSONAL INFO */}
      <div className="profile-card">
        <h3>👤 Personal Information</h3>

        <div className="grid">
          <input name="firstName" value={user.firstName} onChange={handleChange} disabled={!editing} placeholder="Full Name" />
          <input name="email" value={user.email} onChange={handleChange} disabled={!editing} placeholder="Email" />
          <input name="phone" value={user.phone} onChange={handleChange} disabled={!editing} placeholder="Phone" />
        </div>
      </div>

      {/* PAYMENT */}
      <div className="profile-card">
        <h3>💳 Payment Details</h3>

        <div className="grid">
          <input name="paymentMethod" value={user.paymentMethod} onChange={handleChange} disabled={!editing} placeholder="Payment Method (M-Pesa/Card)" />
        </div>
      </div>

      {/* HISTORY */}
      <div className="profile-card">
        <h3>📅 Booking History</h3>
        <p className="empty-text">No bookings yet 💆‍♀️</p>
      </div>

      {/* ACTION BUTTONS */}
      <div className="actions">

        {!editing ? (
          <button onClick={() => setEditing(true)} className="btn edit">
            Edit Profile
          </button>
        ) : (
          <button onClick={saveChanges} className="btn save">
            Save Changes
          </button>
        )}

      </div>

    </div>
  );
}