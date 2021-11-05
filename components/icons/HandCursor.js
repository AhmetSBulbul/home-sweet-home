import * as React from "react";

function SvgHandCursor(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#hand-cursor_svg__clip0_544:4421)">
        <path
          d="M11.539 0A2.307 2.307 0 009.23 2.308v17.884c-2.945-1.498-4.282-1.73-5.77-1.73-1.726 0-3.45.666-3.459 2.868l5.19 2.324 3.642 3.642A9.235 9.235 0 0015.363 30h7.714a4.616 4.616 0 004.615-4.615V13.846A2.308 2.308 0 0024.15 11.9c-.369.234-.664.569-.85.965a2.047 2.047 0 01-.223-.172 2.308 2.308 0 10-4.616 0V11.54a2.307 2.307 0 10-4.615 0V2.308A2.307 2.307 0 0011.54 0zM.002 21.33H0v.016l.002-.016z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="hand-cursor_svg__clip0_544:4421">
          <path fill="#fff" d="M0 0h27.692v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgHandCursor;
