export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const cards = [
    { title: "Appointments", value: "0 Upcoming", icon: "📅" },
    { title: "Services", value: "Massage, Nails, Facials", icon: "💅" },
    { title: "Payments", value: "No payments yet", icon: "💰" },
    { title: "History", value: "No history yet", icon: "🧾" },
    { title: "Notifications", value: "0 New", icon: "🔔" }
  ];

  return (
    <div className="dashboard">

      {/* 🌸 INTRO SECTION */}
      <div className="intro">
        <h2>Welcome to Beauty Wonderland Spa 🌸</h2>

        <p>
          Elevate your natural beauty with Beauty Wonderland Spa. <br />
          Relax, refresh, and restore your glow through personalized wellness
          and beauty care designed just for you.
        </p>
      </div>

      {/* 🌟 CARDS SECTION */}
      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.value}</p>
          </div>
        ))}
      </div>

    </div>
  );
}