import React from "react";

export function FlexJCSpaceAroundIcon({
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
      <g clip-path="url(#clip0_17_43)">
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
          x="1.84613"
          width="1.84615"
          height="24"
          rx="0.923077"
          fill={color}
        />
        <rect
          x="20.3077"
          width="1.84615"
          height="24"
          rx="0.923077"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_17_43">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
