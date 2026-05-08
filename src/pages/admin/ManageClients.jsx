import { useEffect, useState } from "react";

export default function ManageClients() {

  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(JSON.parse(localStorage.getItem("clients")) || []);
  }, []);

  return (
    <div className="admin-page">

      <h1>👤 Manage Clients</h1>

      <div className="client-list">

        {clients.length === 0 ? (
          <p>No clients registered</p>
        ) : (
          clients.map((c, i) => (
            <div className="client-card" key={i}>

              <h3>{c.name}</h3>
              <p>{c.email}</p>
              <p>{c.phone}</p>

            </div>
          ))
        )}

      </div>

    </div>
  );
}