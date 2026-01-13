import { useEffect, useMemo, useState } from "react";
import "../Css/ScrollingTicker.css";

const messages = [
  "Free strap sizing on every order.",
  "2-year warranty on all watches.",
  "Need help? Visit Support →",
  "New drops weekly. Stay sharp.",
];

const ScrollingTicker = () => {
  const [now, setNow] = useState(new Date());
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const timeText = useMemo(() => {
    // Make it look premium: “Tue, 13 Jan • 03:05”
    return new Intl.DateTimeFormat(undefined, {
      weekday: "short",
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(now);
  }, [now]);

  if (dismissed) return null;

  return (
    <div className="ticker" role="region" aria-label="Store updates">
      <div className="ticker__inner">
        <div className="ticker__left">
          <span className="ticker__pill">Live</span>
          <span className="ticker__time">{timeText}</span>
        </div>

        <div className="ticker__marquee" aria-hidden="true">
          <div className="ticker__track">
            {/* duplicate for seamless loop */}
            {[...messages, ...messages].map((m, idx) => (
              <span className="ticker__item" key={`${m}-${idx}`}>
                {m}
                <span className="ticker__dot" />
              </span>
            ))}
          </div>
        </div>

        <div className="ticker__right">
          <button
            type="button"
            className="ticker__close"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss updates"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollingTicker;
