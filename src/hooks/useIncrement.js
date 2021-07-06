import { useState } from "react";

export const useIncrement = (initial = 0) => {
  const [value, setValue] = useState(initial);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  return [value, { increment, decrement }];
};
