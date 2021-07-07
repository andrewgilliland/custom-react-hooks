import { useState } from "react";

export const useIncrement = ({
  maxValue = 10000,
  minValue = -10000,
  initial = 0,
  step = 1
}) => {
  const [value, setValue] = useState(initial);

  const increment = () => {
    setValue((prevState) => (prevState + step >= maxValue ? maxValue : prevState + step));
  };

  const decrement = () => {
    setValue((prevState) => (prevState - step <= minValue ? minValue : prevState - step));
  };

  const reset = () => setValue(initial);

  return [value, { increment, decrement, reset }];
};
