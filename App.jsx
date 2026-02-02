import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ScreenAlert from "./components/Alert/ScreenAlert";
import TaskList from "./components/Tasks/TaskList";
import Progress from "./components/Progress/Progress";
import AwarenessToggle from "./components/Awareness/AwarenessToggle";
import { TASKS } from "./data/tasks";

const REMINDER_INTERVAL =30;

export default function App() {
  const [completed, setCompleted] = useState([]);
  const [screenMinutes, setScreenMinutes] = useState(0);
  const [awarenessActive, setAwarenessActive] = useState(false);

  
  useEffect(() => {
    if (!awarenessActive) return;

    const interval = setInterval(() => {
      setScreenMinutes((prev) => prev + 1);
    }, 60000); 

    return () => clearInterval(interval);
  }, [awarenessActive]);


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
  };

  return (
    <div className="app">
      {}
      <Header awarenessActive={awarenessActive} />

      {}
      <ScreenAlert
        show={awarenessActive && screenMinutes > 0 && remainingMinutes === 0}
      />

      {}
      <TaskList
        tasks={TASKS}
        completed={completed}
        onComplete={handleComplete}
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
