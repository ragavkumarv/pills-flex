import React from "react";

export function FlexJCSpaceEvenly({
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
      <g clip-path="url(#clip0_18_45)">
        <rect
          x="5.0769"
          y="4.61539"
          width="6.46154"
          height="14.7692"
          rx="2"
          fill={color}
        />
        <rect
          x="12.4615"
          y="4.61539"
          width="6.46154"
          height="14.7692"
          rx="2"
          fill={color}
        />
        <rect
          x="2.30768"
          width="1.84615"
          height="24"
          rx="0.923077"
          fill={color}
        />
        <rect
          x="19.8461"
          width="1.84615"
          height="24"
          rx="0.923077"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_18_45">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
