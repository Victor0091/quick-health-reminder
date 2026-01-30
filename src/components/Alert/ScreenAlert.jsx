import "./ScreenAlert.css";

export default function ScreenAlert({ show }) {
  if (!show) return null;

  return (
    <div className="alert">
      ⏰ You’ve been on screen for 30 minutes.  
      Time for a wellness break!
    </div>
  );
}
