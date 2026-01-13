import { useEffect, useState } from "react";
import "../Css/LiveActivity.css";

const LiveActivity = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let current = Number(localStorage.getItem("sessionCount")) || 0;
    current += 1;
    localStorage.setItem("sessionCount", current);
    setCount(current);

    const timeout = setTimeout(() => setVisible(false), 6000);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="live-activity" role="status" aria-live="polite">
      <span className="dot" />
      <span className="text">
        {count} people exploring watches
      </span>
      <button
        className="close"
        aria-label="Dismiss"
        onClick={() => setVisible(false)}
      >
        ×
      </button>
    </div>
  );
};

export default LiveActivity;
