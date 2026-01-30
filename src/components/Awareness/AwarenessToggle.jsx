import "./AwarenessToggle.css";

export default function AwarenessToggle({ active, onToggle, onStop }) {
  return (
    <div className="awareness-controls">
      {/* Main toggle */}
      <button
        className={`awareness-btn ${active ? "on" : ""}`}
        onClick={() => onToggle(!active)}
      >
        {active ? "Pause Wellness Awareness" : "Start Wellness Awareness"}
      </button>

      {/* End Session button */}
      {active && (
        <button className="awareness-stop-btn" onClick={onStop}>
          End Session
        </button>
      )}
    </div>
  );
}
