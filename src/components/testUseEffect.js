import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Timer({ intervalValue }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((value) => value + 1);
    }, intervalValue);

    return () => {
      console.log("interval cleared");
      clearInterval(intervalId);
    };
  }, [intervalValue]);

  return (
    <div className="container">
      <h1>Timer</h1>
      <h2>{value}</h2>
    </div>
  );
}

export default function Component() {
  const [intervalValue, setIntervalValue] = useState(100);

  const handleIntervalClick = (ms) => {
    setIntervalValue(ms);
  };

  return (
    <div className="container">
      <Timer intervalValue={intervalValue} />
      <Button variant="primary" onClick={() => handleIntervalClick(100)}>
        100ms
      </Button>
      <Button variant="primary" onClick={() => handleIntervalClick(300)}>
        300ms
      </Button>
      <Button variant="primary" onClick={() => handleIntervalClick(600)}>
        600ms
      </Button>
    </div>
  );
}
