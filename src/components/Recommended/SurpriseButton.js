import React, { useState, useEffect, useRef } from 'react';

const SurpriseButton = ({ onClick, disabled }) => {
  const [isRolling, setRolling] = useState(false);
  const speedRef = useRef(30);
  const counterRef = useRef(0);

  useEffect(() => {
    let interval;

    if (isRolling) {
      interval = setInterval(() => {
        counterRef.current++;

        if (counterRef.current === 80) {
          clearInterval(interval);
          setRolling(false);
          counterRef.current = 0;
        } else {
          if (counterRef.current > 50) {
            // Decrease speed after rolling for a while
            speedRef.current += 1;
          }

          onClick();
        }
      }, speedRef.current);
    }

    return () => clearInterval(interval);
  }, [isRolling, onClick]);

  const handleClick = () => {
    setRolling(true);
  };

  return (
    <button onClick={handleClick} disabled={disabled}>
      Sorpréndeme
    </button>
  );
};

export default SurpriseButton;