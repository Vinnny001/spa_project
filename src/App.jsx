import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageServices from "./pages/admin/ManageServices";
import ManageBookings from "./pages/admin/ManageBookings";
import ManageClients from "./pages/admin/ManageClients";

import Home from "./pages/shared/Home";
import Signup from "./pages/shared/Signup";
import Login from "./pages/auth/Login";

import ClientLayout from "./layouts/ClientLayout";
import Dashboard from "./pages/client/Dashboard";
import Profile from "./pages/client/Profile";
import Services from "./pages/client/Services";
import BookAppointment from "./pages/client/BookAppointment";
import MyAppointments from "./pages/client/MyAppointments";
import ServicesHistory from "./pages/client/MyServicesHistory";
import Notifications from "./pages/client/Notifications";
import Payment from "./pages/client/Payments";

import "./assets/styles/App.css";

function App() {
  return (
    <Router>
      <Routes>

<Route path="/admin" element={<AdminLayout />}>
  <Route index element={<AdminDashboard />} />
  <Route path="services" element={<ManageServices />} />
  <Route path="bookings" element={<ManageBookings />} />
  <Route path="clients" element={<ManageClients />} />
</Route>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* CLIENT DASHBOARD LAYOUT */}
        <Route path="/client" element={<ClientLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="services" element={<Services />} />
          <Route path="book-appointment" element={<BookAppointment />} />
          <Route path="my-appointments" element={<MyAppointments />} />
          <Route path="services-history" element={<ServicesHistory />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="payment" element={<Payment />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;