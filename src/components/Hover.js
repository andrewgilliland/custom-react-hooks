import React from "react";
import { useHover, useWindowWidth } from "../hooks";
import { Card } from "../Elements";
import black from "../black.png";

const Hover = () => {
  const [isHovered, bind] = useHover(false);
  const width = useWindowWidth();
  console.log("isHovered", isHovered);
  console.log("width", width);

  if (width < 400) return null;

  return (
    <Card
      {...bind}
      style={{ background: isHovered ? "var(--purp)" : "var(--black)" }}
    >
      <h3>Some card</h3>
      <img src={black} alt="black" />
    </Card>
  );
};

export default Hover;
