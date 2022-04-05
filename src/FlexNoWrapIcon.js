import React from "react";

export function FlexNoWrapIcon({
  color = "currentColor",
  size = 52,
  transform
}) {
  return (
    <svg
      style={{ transform }}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="2.64285"
        width="5.85714"
        height="18.7143"
        rx="1.5"
        fill="white"
        stroke={color}
      />
      <rect
        x="17.6429"
        y="2.64285"
        width="5.85714"
        height="18.7143"
        rx="1.5"
        fill="white"
        stroke={color}
      />
      <rect
        x="8.57141"
        y="2.14285"
        width="6.85714"
        height="19.7143"
        rx="2"
        fill={color}
      />
    </svg>
  );
}
