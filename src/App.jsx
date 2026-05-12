import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

// 🔥 Lazy imports
const Home = lazy(() => import("./pages/shared/Home"));
const Signup = lazy(() => import("./pages/shared/Signup"));
const Login = lazy(() => import("./pages/auth/Login"));

const ClientLayout = lazy(() => import("./layouts/ClientLayout"));
const Dashboard = lazy(() => import("./pages/client/Dashboard"));
import Profile from "./pages/client/Profile";

const Services = lazy(() => import("./pages/client/Services"));
const BookAppointment = lazy(() => import("./pages/client/BookAppointment"));
const MyAppointments = lazy(() => import("./pages/client/MyAppointments"));
const ServicesHistory = lazy(() => import("./pages/client/MyServicesHistory"));
const Notifications = lazy(() => import("./pages/client/Notifications"));
const Payment = lazy(() => import("./pages/client/Payments"));

function App() {
  return (
    <Router>
      {/* ⏳ fallback while loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route
  path="/client"
  element={
    <ProtectedRoute>
      <ClientLayout />
    </ProtectedRoute>
  }
>
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
      </Suspense>
    </Router>
  );
}

export default App;