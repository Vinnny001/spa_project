import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/shared/Home";
import Signup from "./pages/shared/Signup";
import Login from "./pages/auth/Login";

import ClientLayout from "./layouts/ClientLayout";
import Dashboard from "./pages/client/Dashboard";
import Services from "./pages/client/Services";

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
        </Route>

      </Routes>
    </Router>
  );
}

export default App;