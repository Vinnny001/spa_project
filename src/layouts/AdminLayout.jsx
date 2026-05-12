import { Link, Outlet } from "react-router-dom";
import "../assets/styles/admin.css";

export default function AdminLayout() {
  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <div className="admin-sidebar">

        <h2>🌸 Admin</h2>

        <nav>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/services">Services</Link>
          <Link to="/admin/bookings">Bookings</Link>
          <Link to="/admin/clients">Clients</Link>
        </nav>

      </div>

      {/* MAIN CONTENT */}
      <div className="admin-content">
        <Outlet />
      </div>

    </div>
  );
}