import "./Header.css";

export default function Header({ awarenessActive }) {
  return (
    <header className="header">
      <div className="header-text">
        <h1>Quick Health Reminder</h1>
        <p>Stay active. Stay hydrated. Stay well.</p>
      </div>

      <div className="status">
        <span className={`status-item ${awarenessActive ? "on" : "off"}`}>
          ● Wellness Awareness {awarenessActive ? "On" : "Off"}
        </span>
        <span className={`status-item ${awarenessActive ? "on" : "off"}`}>
          ● Screen Presence Tracking {awarenessActive ? "Active" : "Paused"}
        </span>
      </div>
    </header>
  );
}

