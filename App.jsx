import { useEffect, useState } from "react";
import Header from "./src/components/Header/Header";
import ScreenAlert from "./src/components/Alert/ScreenAlert";
import TaskList from "./src/components/Tasks/TaskList";
import Progress from "./src/components/Progress/Progress";
import AwarenessToggle from "./src/components/Awareness/AwarenessToggle";
import { TASKS } from "./src/data/tasks";

const REMINDER_INTERVAL =30;

export default function App() {
 
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [screenMinutes, setScreenMinutes] = useState(0);
  const [awarenessActive, setAwarenessActive] = useState(false);
  
  
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch (e) {
      
    }
  }, [darkMode]);

  useEffect(() => {
    if (!awarenessActive) return;

    const interval = setInterval(() => {
      setScreenMinutes((prev) => prev + 1);
    }, 60000); 

    return () => clearInterval(interval);
  }, [awarenessActive]);

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(completed));
    } catch (e) {}
  }, [completed]);

  const handleComplete = (id) => {
    if (!completed.includes(id)) {
      setCompleted((prev) => [...prev, id]);
    }
  };

  
  const remainingMinutes =
    screenMinutes === 0
      ? REMINDER_INTERVAL
      : REMINDER_INTERVAL - (screenMinutes % REMINDER_INTERVAL);

 
  const handleStop = () => {
    setAwarenessActive(false);
    setScreenMinutes(0);
    setCompleted([]); 
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {}
      <Header awarenessActive={awarenessActive} />

      {}
      <div style={{ marginTop: 12, marginBottom: 8 }}>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode((d) => !d)}
          aria-pressed={darkMode}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {}
      <ScreenAlert
        show={awarenessActive && screenMinutes > 0 && remainingMinutes === 0}
      />

      {}
      <TaskList
        tasks={TASKS}
        completed={completed}
        onComplete={handleComplete}
        awarenessActive={awarenessActive}
      />

      
      <Progress completed={completed.length} total={TASKS.length} />

      {}
      <AwarenessToggle
        active={awarenessActive}
        onToggle={setAwarenessActive}
        onStop={handleStop}
      />

      {}
      <div className="footer">
        {awarenessActive
          ? `Next wellness reminder in ${remainingMinutes} minute${
              remainingMinutes !== 1 ? "s" : ""
            }`
          : "Wellness awareness is paused"}
      </div>
    </div>
  );
}
