import React from "react";

export function FlexJCStretchIcon({
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
      <rect x="3" y="3" width="8.5" height="18" rx="2" fill={color} />
      <path
        d="M12.5 5C12.5 3.89543 13.3954 3 14.5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H14.5C13.3954 21 12.5 20.1046 12.5 19V5Z"
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
