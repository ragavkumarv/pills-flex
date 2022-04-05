import React from "react";

export function FlexAIBase({ color = "currentColor", size = 52, transform }) {
  return (
    <svg
      style={{ transform }}
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5331 1.29395L22.9037 23H19.8007L17.8783 18.0049H8.08484L6.16248 23H3.05945L11.4301 1.29395H14.5331ZM9.2655 14.9019H16.6825L12.9891 5.33545L9.2655 14.9019Z"
        fill={color}
      />
      <rect
        x="23.8639"
        y="24.3496"
        width="1.65043"
        height="21.4556"
        rx="0.825215"
        transform="rotate(90 23.8639 24.3496)"
        fill={color}
      />
    </svg>
  );
}
