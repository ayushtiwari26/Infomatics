import { useState, useEffect } from "react";

const useRandomNumber = (convertTo, intervalTime = 100) => {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 20) {
        const newNumber = Math.floor(Math.random() * 10000);
        setNumber(newNumber);
      } else {
        clearInterval(interval);
        setNumber(convertTo);
      }
      count++;
    }, intervalTime);
    return () => clearInterval(interval);
  }, [convertTo, intervalTime]);

  return number;
};

export default useRandomNumber;
