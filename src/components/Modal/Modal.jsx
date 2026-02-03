import "./Modal.css";

export default function Modal({ show, onClose, title, message }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{message}</p>
        <button className="modal-btn" onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  );
}
