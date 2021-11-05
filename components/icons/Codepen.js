import * as React from "react";

function SvgCodepen(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#codepen_svg__clip0_544:4408)">
        <path
          d="M15.99.393a2.37 2.37 0 00-2.66.032L1.406 8.73a2.369 2.369 0 00-1.015 1.944v8.947c0 .796.4 1.538 1.063 1.976l12.118 8.01c.792.525 1.82.525 2.613 0l12.358-8.164a2.37 2.37 0 001.063-1.976v-8.791c0-.795-.399-1.537-1.062-1.976L15.99.393zm9.231 9.692l-4.567 3.067-4.284-3.115-.027-6.127 8.878 6.175zm-11.977-6.17v5.997l-4.39 3.07-4.377-2.936 8.767-6.13zM3.276 13l2.834 1.9-2.834 1.982V13zM13.32 25.785l-8.84-5.929 4.416-3.087 4.424 2.969v6.047zM11.64 14.85l2.862-2.002 3.334 2.191-2.955 1.985-3.24-2.174zm4.802 10.934v-6.05l4.228-2.833 4.552 2.993-8.78 5.89zm10.042-8.8l-3.001-1.972 3.001-2.013v3.985z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="codepen_svg__clip0_544:4408">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCodepen;
