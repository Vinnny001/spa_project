import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/styles/ClientLayout.css";

export default function ClientLayout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/login");
    } else {
      setLoading(false);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) return null;

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="layout">

      {/* MOBILE TOP BAR */}
      <div className="topbar">
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <h3></h3>
      </div>

      {/* OVERLAY */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "open" : ""}`}>

        <h2 className="logo">
          Welcome {user?.firstName || "User"}
        </h2>

        <Link to="/client/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
        <Link to="/client/profile" onClick={() => setOpen(false)}>Profile</Link>
        <Link to="/client/services" onClick={() => setOpen(false)}>Services</Link>
        <Link to="/client/book-appointment" onClick={() => setOpen(false)}>Book Appointment</Link>
        <Link to="/client/my-appointments" onClick={() => setOpen(false)}>My Appointments</Link>
        <Link to="/client/services-history" onClick={() => setOpen(false)}>History</Link>
        <Link to="/client/notifications" onClick={() => setOpen(false)}>Notifications</Link>
        <Link to="/client/payment" onClick={() => setOpen(false)}>Payment</Link>

        <button className="logout" onClick={handleLogout}>
          Logout
        </button>

      </div>

      {/* MAIN */}
      <div className="main">
        <Outlet />
      </div>

    </div>
  );
}