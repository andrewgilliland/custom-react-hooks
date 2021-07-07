import React, { useState, useMemo } from "react";
import { useHover } from "../hooks/useHover";
import { Card } from "../Elements";
import black from "../black.png";

const Hover = () => {
  const [isHovered, bind] = useHover(false);
  console.log("isHovered", isHovered);

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
