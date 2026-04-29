import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("currentUser");

    console.log("DASHBOARD RAW DATA:", data);

    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>
        Welcome {user?.firstName || "Guest"} 💆‍♀️
      </h1>
    </div>
  );
}