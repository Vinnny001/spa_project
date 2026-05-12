import { useEffect, useState } from "react";

export default function ManageBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(JSON.parse(localStorage.getItem("bookings")) || []);
  }, []);

  const updateStatus = (index, status) => {
    const updated = [...bookings];
    updated[index].status = status;

    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div className="admin-page">

      <h1>📅 Manage Bookings</h1>

      <div className="booking-list">

        {bookings.length === 0 ? (
          <p>No bookings available</p>
        ) : (
          bookings.map((b, i) => (
            <div className="booking-card" key={i}>

              <div>
                <h3>{b.service}</h3>
                <p>{b.option}</p>
                <p>👤 {b.client}</p>
                <p>📅 {b.date}</p>

                <span className={`status ${b.status || "pending"}`}>
                  {b.status || "pending"}
                </span>
              </div>

              <div className="booking-actions">

                <button onClick={() => updateStatus(i, "approved")}>
                  Approve
                </button>

                <button onClick={() => updateStatus(i, "completed")}>
                  Complete
                </button>

                <button onClick={() => updateStatus(i, "cancelled")}>
                  Cancel
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}