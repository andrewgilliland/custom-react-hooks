import React from "react";
import { useHover, useWindowWidth, useMeasure } from "../hooks";
import { Card } from "../Elements";
import black from "../black.png";

const Hover = () => {
  const [isHovered, bind] = useHover(false);
  const width = useWindowWidth();
  const [{ ref }, bounds] = useMeasure();

  // console.log("isHovered", isHovered);
  // console.log("width", width);
  console.log("bounds", bounds);

  if (width < 400) return null;

  return (
    <Card
      ref={ref}
      {...bind}
      style={{ background: isHovered ? "var(--purp)" : "var(--black)" }}
    >
      <h3>Some card</h3>
      <img src={black} alt="black" />
    </Card>
  );
};

export default Hover;
