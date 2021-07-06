import React from "react";
import { useIncrement } from "../hooks/useIncrement";

const Increment = () => {
  const [value, { increment, decrement }] = useIncrement();

  return (
    <div>
      <button onClick={decrement}>-</button>
      {value}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Increment;
