import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return <p>No user found</p>;
  }

  return (
    <div style={styles.container}>
      <h2>My Profile 👤</h2>

      <div style={styles.card}>
        <p><strong>Name:</strong> {user.firstName} {user.surname}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Contact:</strong> {user.contact}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px"
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    maxWidth: "400px"
  }
};