import { useEffect, useState } from "react";

export default function AdminDashboard() {

  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setBookings(JSON.parse(localStorage.getItem("bookings")) || []);
    setServices(JSON.parse(localStorage.getItem("services")) || []);
    setClients(JSON.parse(localStorage.getItem("clients")) || []);
  }, []);

  return (
    <div className="admin-page">

      <h1>🌸 Admin Dashboard</h1>

      <p>Overview of spa activity (data-driven)</p>

      <div className="dashboard-cards">

        <div className="admin-card">
          <h3>{bookings.length}</h3>
          <p>Total Bookings</p>
        </div>

        <div className="admin-card">
          <h3>{services.length}</h3>
          <p>Total Services</p>
        </div>

        <div className="admin-card">
          <h3>{clients.length}</h3>
          <p>Total Clients</p>
        </div>

      </div>

    </div>
  );
}