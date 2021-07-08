import { useState, useRef, useEffect } from "react";

export const useMeasure = () => {
  const ref = useRef();

  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const [resizeObserve] = useState(() => {
    return new ResizeObserver(([entry]) => setBounds(entry.contentRect));
  });

  useEffect(() => {
    if (ref.current) {
      resizeObserve.observe(ref.current);
    }

    return () => {
      return resizeObserve.disconnect();
    };
  }, [resizeObserve]);

  return [{ ref }, bounds];
};
