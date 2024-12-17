import { useState, useEffect } from "react";

const ScrollingTicker = () => {
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("Fetching location...");

  // Update the date and time
  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date();
      setDateTime(now.toLocaleString());
    }, 1000);
    return () => clearInterval(updateTime);
  }, []);

  // Fetch user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Lng: ${longitude.toFixed(2)}`);
        },
        () => {
          setLocation("Location access denied");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  return (
    <div style={styles.tickerContainer}>
      <div style={styles.tickerContent}>
        <span>
          🕒 {dateTime} | 📍 {location} | Stay updated with Alberto Watch Company!
        </span>
      </div>
    </div>
  );
};

const styles = {
  tickerContainer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#222",
    color: "#fff",
    overflow: "hidden",
    zIndex: 2000,
    whiteSpace: "nowrap",
    fontSize: "16px",
    padding: "10px 0",
  },
  tickerContent: {
    display: "inline-block",
    paddingLeft: "100%", // Start off-screen
    animation: "scroll-left 15s linear infinite",
  },
};

// Add the scrolling keyframe animation dynamically
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@keyframes scroll-left {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  }`,
  styleSheet.cssRules.length
);

export default ScrollingTicker;
