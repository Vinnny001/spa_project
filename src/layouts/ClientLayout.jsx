import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./clientLayout.css";

export default function ClientLayout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
    <div style={styles.container}>

      <div style={styles.sidebar}>

        <h2 style={styles.logo}>
          Welcome {user?.firstName}
        </h2>

        <Link to="/client/dashboard" style={styles.link} className="side-link">Dashboard</Link>
        <Link to="/client/services" style={styles.link} className="side-link">Services</Link>
        <Link to="/client/book-appointment" style={styles.link} className="side-link">Book Appointment</Link>
        <Link to="/client/my-appointments" style={styles.link} className="side-link">My Appointments</Link>
        <Link to="/client/services-history" style={styles.link} className="side-link">Services History</Link>
        <Link to="/client/notifications" style={styles.link} className="side-link">Notifications</Link>
        <Link to="/client/payment" style={styles.link} className="side-link">Payment</Link>

        <button onClick={handleLogout} style={styles.logoutBtn}>
          Logout
        </button>

      </div>

      <div style={styles.main}>
        <Outlet />
      </div>

    </div>
  );
}

const styles = {
  container: { display: "flex", minHeight: "100vh" },
  sidebar: {
    width: "240px",
    background: "linear-gradient(#ec4899, #be185d)",
    color: "white",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  logo: { marginBottom: "25px", fontSize: "18px" },
  link: { color: "white", textDecoration: "none" },
  logoutBtn: { marginTop: "20px", padding: "10px", background: "white", color: "#ec4899", border: "none", borderRadius: "6px" },
  main: { flex: 1, padding: "20px", backgroundColor: "#fdf2f8" }
};