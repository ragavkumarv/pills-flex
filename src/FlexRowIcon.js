import React from "react";

export function FlexRowIcon({ color = "currentColor", size = 52 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.77118"
        y="0.5"
        width="5.50847"
        height="17.7119"
        rx="1.5"
        fill="white"
        stroke={color}
      />
      <rect x="13.2203" width="6.50847" height="18.7119" rx="2" fill={color} />
      <path
        d="M19.6756 24.3536C19.8708 24.1583 19.8708 23.8417 19.6756 23.6464L16.4936 20.4645C16.2983 20.2692 15.9818 20.2692 15.7865 20.4645C15.5912 20.6597 15.5912 20.9763 15.7865 21.1716L18.6149 24L15.7865 26.8284C15.5912 27.0237 15.5912 27.3403 15.7865 27.5355C15.9818 27.7308 16.2983 27.7308 16.4936 27.5355L19.6756 24.3536ZM4.27118 24.5H19.322V23.5H4.27118V24.5Z"
        fill={color}
      />
    </svg>
  );
}
