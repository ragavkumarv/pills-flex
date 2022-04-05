import React from "react";

export function FlexAIStart({ color = "currentColor", size = 52, transform }) {
  return (
    <svg
      style={{ transform }}
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_23_24)">
        <rect
          x="21.0834"
          y="22.0833"
          width="7"
          height="17.3333"
          rx="2"
          transform="rotate(-180 21.0834 22.0833)"
          fill={color}
        />
        <path
          d="M11.9167 14.375C11.9167 15.4796 11.0212 16.375 9.91668 16.375L6.91667 16.375C5.81211 16.375 4.91668 15.4796 4.91667 14.375L4.91663 6.83332C4.91662 5.72874 5.81206 4.8333 6.91663 4.8333L9.91663 4.8333C11.0212 4.8333 11.9166 5.72872 11.9166 6.83329L11.9167 14.375Z"
          fill={color}
        />
        <rect
          x="26"
          y="3.91666"
          width="2"
          height="26"
          rx="1"
          transform="rotate(90 26 3.91666)"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_23_24">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
