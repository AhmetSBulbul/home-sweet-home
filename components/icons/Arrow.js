import * as React from "react";

function SvgArrow(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.596 16.25l-3.225 3.238 1.762 1.762 6.25-6.25-6.25-6.25-1.762 1.762 3.225 3.238H3.383v2.5h20.213z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrow;
