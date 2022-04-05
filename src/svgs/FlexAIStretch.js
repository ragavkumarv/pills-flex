import React from "react";

export function FlexAIStretch({
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
      <g clip-path="url(#clip0_23_26)">
        <rect
          x="21.0834"
          y="21.5"
          width="7"
          height="17.3333"
          transform="rotate(-180 21.0834 21.5)"
          fill={color}
        />
        <rect
          x="11.3334"
          y="21.75"
          width="7"
          height="17.3333"
          transform="rotate(-180 11.3334 21.75)"
          fill={color}
        />
        <rect
          x="26"
          y="3.33333"
          width="2"
          height="26"
          rx="1"
          transform="rotate(90 26 3.33333)"
          fill={color}
        />
        <rect
          x="26"
          y="20.6667"
          width="2"
          height="26"
          rx="1"
          transform="rotate(90 26 20.6667)"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_23_26">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
