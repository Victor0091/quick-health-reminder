import { useEffect, useState } from "react";
import Header from "./src/components/Header/Header";
import ScreenAlert from "./src/components/Alert/ScreenAlert";
import TaskList from "./src/components/Tasks/TaskList";
import Progress from "./src/components/Progress/Progress";
import AwarenessToggle from "./src/components/Awareness/AwarenessToggle";
import Modal from "./src/components/Modal/Modal";
import { TASKS } from "./src/data/tasks";
import { playNotificationSound, playCompleteSound } from "./src/sound/sound";

const REMINDER_INTERVAL =0.1;

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
  const [timerEnded, setTimerEnded] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(() => {
    try {
      return localStorage.getItem("soundEnabled") !== "false";
    } catch (e) {
      return true;
    }
  });
  
  
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

  // Persist sound preference
  useEffect(() => {
    try {
      localStorage.setItem("soundEnabled", soundEnabled);
    } catch (e) {}
  }, [soundEnabled]);

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
      if (soundEnabled) {
        playCompleteSound();
      }
    }
  };

  
  const remainingMinutes =
    screenMinutes === 0
      ? REMINDER_INTERVAL
      : Math.round((REMINDER_INTERVAL - (screenMinutes % REMINDER_INTERVAL)) * 100) / 100;

  // Show remainder when timer ends
  useEffect(() => {
    if (awarenessActive && remainingMinutes === 0 && screenMinutes > 0) {
      setTimerEnded(true);
      if (soundEnabled) {
        playNotificationSound();
      }
    }
  }, [remainingMinutes, awarenessActive, screenMinutes, soundEnabled]);

 
  const handleStop = () => {
    setAwarenessActive(false);
    setScreenMinutes(0);
    setTimerEnded(false);
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

        {/* Sound toggle */}
        <button
          className="theme-toggle"
          onClick={() => setSoundEnabled((s) => !s)}
          aria-pressed={soundEnabled}
          style={{ marginLeft: 8 }}
        >
          {soundEnabled ? "🔊 Sound On" : "🔇 Sound Off"}
        </button>
      </div>

      {}
      <ScreenAlert
        show={timerEnded}
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

      {/* Timer ended modal */}
      <Modal
        show={timerEnded}
        onClose={() => setTimerEnded(false)}
        title="⏰ Wellness Break Time!"
        message="You've been on screen for 30 minutes. Time to take a wellness break! Complete the tasks below or end your session."
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
