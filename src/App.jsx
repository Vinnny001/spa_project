import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/shared/Home";
import Signup from "./pages/shared/Signup";
import Login from "./pages/auth/Login";

import ClientLayout from "./layouts/ClientLayout";
import Dashboard from "./pages/client/Dashboard";
import Services from "./pages/client/Services";

import BookAppointment from "./pages/client/BookAppointment";
import MyAppointments from "./pages/client/MyAppointments";
import ServicesHistory from "./pages/client/MyServicesHistory";
import Notifications from "./pages/client/Notifications";
import Payment from "./pages/client/Payments"

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Client Layout */}
        <Route path="/client" element={<ClientLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
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