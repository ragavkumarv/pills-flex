import React from "react";

export function FlexColumnIcon({ color = "currentColor", size = 52 }) {
  return (
    <svg
      style={{ transform: "rotate(180deg) scale(-1, 1)" }}
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_5_8)">
        <rect
          x="14.6667"
          y="0.5"
          width="10.25"
          height="9.29167"
          rx="1.5"
          transform="rotate(90 14.6667 0.5)"
          fill="white"
          stroke={color}
        />
        <rect
          x="4.875"
          y="23.75"
          width="10.5"
          height="10.5"
          rx="2"
          transform="rotate(-90 4.875 23.75)"
          fill={color}
        />
        <path
          d="M22.0214 24.2498C22.2167 24.445 22.5333 24.445 22.7286 24.2498L25.9105 21.0678C26.1058 20.8725 26.1058 20.5559 25.9105 20.3607C25.7153 20.1654 25.3987 20.1654 25.2034 20.3607L22.375 23.1891L19.5466 20.3607C19.3513 20.1654 19.0347 20.1654 18.8395 20.3607C18.6442 20.5559 18.6442 20.8725 18.8395 21.0678L22.0214 24.2498ZM21.875 0V23.8962H22.875V0L21.875 0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_5_8">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
