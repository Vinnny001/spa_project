import { Outlet, Link, useNavigate } from "react-router-dom";

export default function ClientLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear auth later if you add backend auth
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div style={styles.container}>

      {/* Sidebar / Navbar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Spa Client</h2>

        <Link to="/client/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/client/services" style={styles.link}>Services</Link>

        <button onClick={handleLogout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        <Outlet />
      </div>

    </div>
  );
}

/* 🔥 Styles */
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh"
  },
  sidebar: {
    width: "220px",
    backgroundColor: "#ec4899",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  logo: {
    marginBottom: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500"
  },
  logoutBtn: {
    marginTop: "20px",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "white",
    color: "#ec4899",
    cursor: "pointer",
    fontWeight: "bold"
  },
  main: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#fdf2f8"
  }
};