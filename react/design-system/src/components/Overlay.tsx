// create a overlay component

import { ComponentProps, forwardRef } from "react";

const Overlay = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  function Overlay(props, ref) {
    return (
      <div
        ref={ref}
        className="fixed   bg-black bg-opacity-50 z-30"
        {...props}
      />
    );
  }
);

export default Overlay;
