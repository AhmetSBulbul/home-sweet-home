import * as React from "react";

function SvgRepository(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#repository_svg__clip0_618_4387)">
        <path
          d="M30.317 13.664L17.22.566a1.932 1.932 0 00-2.732 0l-2.72 2.72 3.45 3.45a2.293 2.293 0 012.906 2.926l3.325 3.325a2.298 2.298 0 11-1.377 1.296l-3.101-3.101v8.16a2.3 2.3 0 11-1.89-.067V11.04a2.298 2.298 0 01-1.248-3.015l-3.401-3.402-8.982 8.981a1.933 1.933 0 000 2.733l13.1 13.098a1.933 1.933 0 002.731 0l13.037-13.037a1.933 1.933 0 000-2.733z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="repository_svg__clip0_618_4387">
          <path
            fill="currentColor"
            transform="translate(.883)"
            d="M0 0h30v30H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgRepository;
