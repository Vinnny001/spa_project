import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-pink-100">
        
        {/* Top Right Auth Buttons */}
        <div style={{ position: "absolute", top: "20px", right: "20px" }}>
          <Link
            to="/login"
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: "#ec4899",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Login
          </Link>

          <Link
            to="/signup"
            style={{
              padding: "10px 20px",
              backgroundColor: "white",
              color: "#ec4899",
              border: "2px solid #ec4899",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Sign Up
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Beauty Spa Management System
        </h1>

        <p className="max-w-2xl text-lg mb-6">
          Simplifying appointment scheduling, customer management, and payments 
          to enhance efficiency and improve customer experience in modern beauty spas.
        </p>

        <div className="flex gap-4">
          <Link
            to="/appointments"
            className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition"
          >
            Book Appointment
          </Link>

          <Link
            to="/services"
            className="bg-white border border-pink-500 text-pink-500 px-6 py-3 rounded-xl hover:bg-pink-50 transition"
          >
            View Services
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Appointments</h2>
          <p>
            Easily schedule and manage appointments to avoid double bookings 
            and reduce waiting time.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Customer Records</h2>
          <p>
            Store and access customer details, history, and preferences 
            for personalized service.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Payments</h2>
          <p>
            Track and manage all transactions accurately to ensure 
            transparency and accountability.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-pink-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Our System?</h2>
        <p className="max-w-3xl mx-auto">
          Our system replaces manual record-keeping with a reliable digital platform.
          It improves efficiency, enhances customer satisfaction, and supports better 
          decision-making for spa owners and staff.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-pink-500 text-white text-center py-4 mt-10">
        <p>© {new Date().getFullYear()} Beauty Spa System. All rights reserved.</p>
      </footer>
    </div>
  );
}