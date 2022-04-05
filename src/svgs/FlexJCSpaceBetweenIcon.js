import React from "react";

export function FlexJCSpaceBetweenIcon({
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
        x="4.61536"
        y="4.61539"
        width="6.46154"
        height="14.7692"
        rx="2"
        fill={color}
      />
      <rect
        x="12.9231"
        y="4.61539"
        width="6.46154"
        height="14.7692"
        rx="2"
        fill={color}
      />
      <rect
        x="2.76923"
        width="1.84615"
        height="24"
        rx="0.923077"
        fill={color}
      />
      <rect
        x="19.3846"
        width="1.84615"
        height="24"
        rx="0.923077"
        fill={color}
      />
    </svg>
  );
}
