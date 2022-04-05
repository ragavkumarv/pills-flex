import React from "react";

export function FlexJCFlexStartIcon({
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
        x="5.53845"
        y="4.61539"
        width="6.46154"
        height="14.7692"
        rx="2"
        fill={color}
      />
      <rect
        x="13.8461"
        y="4.61539"
        width="6.46154"
        height="14.7692"
        rx="2"
        fill={color}
      />
      <rect
        x="3.69232"
        width="1.84615"
        height="24"
        rx="0.923077"
        fill={color}
      />
    </svg>
  );
}
