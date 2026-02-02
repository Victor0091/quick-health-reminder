import TaskItem from "./TaskItem";
import "./TaskList.css";

export default function TaskList({ tasks, completed, onComplete, awarenessActive }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          completed={completed.includes(task.id)}
          onComplete={() => onComplete(task.id)}
          awarenessActive={awarenessActive}
        />
      ))}
    </div>
  );
}
