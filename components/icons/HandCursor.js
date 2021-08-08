import * as React from "react";

function SvgHandCursor(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 2a2 2 0 00-2 2v15.5C6.448 18.201 5.289 18 4 18c-1.496 0-2.99.577-2.998 2.486L5.5 22.5l3.156 3.156A8.004 8.004 0 0014.315 28H21a4 4 0 004-4V14a2 2 0 00-3.07-1.688 2 2 0 00-.737.836A1.78 1.78 0 0121 13a2 2 0 00-4 0v-1a2 2 0 10-4 0V4a2 2 0 00-2-2zM1.002 20.486H1v.014l.002-.014z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHandCursor;
