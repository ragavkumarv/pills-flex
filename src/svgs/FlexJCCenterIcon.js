import React from "react";

export function FlexJCCenterIcon({
  color = "currentColor",
  size = 52,
  transform,
}) {
  return (
    <svg
      style={{ transform }}
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.76923"
        y="4.61539"
        width="6.46154"
        height="14.7692"
        rx="2"
        fill={color}
      />
      <rect
        x="14.7692"
        y="4.61539"
        width="6.46154"
        height="14.7692"
        rx="2"
        fill={color}
      />
      <rect
        x="11.0769"
        width="1.84615"
        height="24"
        rx="0.923077"
        fill={color}
      />
    </svg>
  );
}
