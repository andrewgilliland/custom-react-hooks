import React from "react";
import { useMount, useUnmount, useToggle } from "../hooks";

const Mount = () => {
  const { isToggled, toggle } = useToggle();

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && <UnMount />}
    </div>
  );
};

const UnMount = () => {
  useMount(() => {
    console.log("I mounted!");
  });
  useUnmount(() => {
    console.log("I unmounted!");
  });
  return <div>Unmount me</div>;
};

export default Mount;
