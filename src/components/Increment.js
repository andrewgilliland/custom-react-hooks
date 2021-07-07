import React from "react";
import { useIncrement } from "../hooks/useIncrement";

const Increment = () => {
  const [value, { increment, decrement, reset }] = useIncrement({
    maxValue: 100,
    minValue: 0,
    initial: 50,
    step: 5,
  });

  return (
    <div>
      <button onClick={decrement}>-</button>
      {value}
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Increment;
