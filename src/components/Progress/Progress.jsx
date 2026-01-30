import "./Progress.css";

export default function Progress({ completed, total }) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="progress-container">
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="progress-text">
        {completed} of {total} tasks completed ({percentage}%)
      </p>
    </div>
  );
}
