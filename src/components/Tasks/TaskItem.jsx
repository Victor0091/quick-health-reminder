import "./TaskItem.css";

export default function TaskItem({ task, completed, onComplete, awarenessActive }) {
  return (
    <div className={`task-item ${completed ? "completed" : ""}`}>
      <div className="emoji">{task.emoji}</div>
      <div className="details">
        <h3>{task.title}</h3>
        <p>{task.subtitle}</p>
      </div>
      <button onClick={onComplete} disabled={completed || !awarenessActive}>
        {completed ? "✓ Done" : "Complete"}
      </button>
    </div>
  );
}
