import { ColorizeTwoTone } from "@mui/icons-material";
import React from "react";

export function FlexWrapIcon({ color = "currentColor", size = 52, transform }) {
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
        x="2.5"
        y="0.5"
        width="4"
        height="10"
        rx="1.5"
        fill="white"
        stroke={color}
      />
      <rect x="9" width="5" height="11" rx="2" fill={color} />
      <rect
        x="16.5"
        y="0.5"
        width="4"
        height="10"
        rx="1.5"
        fill="white"
        stroke={color}
      />
      <path
        d="M11 12.5H12C12.8284 12.5 13.5 13.1716 13.5 14V22C13.5 22.8284 12.8284 23.5 12 23.5H11C10.1716 23.5 9.5 22.8284 9.5 22V14C9.5 13.1716 10.1716 12.5 11 12.5Z"
        fill="white"
        stroke={color}
      />
      <rect x="16" y="12" width="5" height="12" rx="2" fill={color} />
      <rect x="2" y="12" width="5" height="12" rx="2" fill={color} />
    </svg>
  );
}
