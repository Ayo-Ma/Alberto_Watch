import  { useEffect, useState } from 'react';
import '../Css/VisitorCount.css';

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let count = parseInt(localStorage.getItem('visitorCount'), 10) || 0;
    count += 1; 
    localStorage.setItem('visitorCount', count);
    setVisitorCount(count);
  }, []);

  return (
    <div className="visitor-count">
      Visited: {visitorCount}
    </div>
  );
};

export default VisitorCount;
