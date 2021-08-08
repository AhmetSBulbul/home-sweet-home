import * as React from "react";

function SvgTwitter(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#twitter_svg__clip0)">
        <path
          d="M34.965 2.035C33.608.68 31.974 0 30.063 0H6.938c-1.91 0-3.545.679-4.902 2.035C.679 3.392 0 5.027 0 6.937v23.125c0 1.911.679 3.546 2.036 4.902C3.393 36.322 5.027 37 6.938 37h23.125c1.91 0 3.545-.678 4.901-2.035C36.322 33.607 37 31.973 37 30.062V6.937c0-1.91-.679-3.545-2.035-4.902zm-6.66 12.201c.016.145.024.361.024.65 0 1.35-.197 2.703-.59 4.06a14.526 14.526 0 01-1.807 3.902 15.185 15.185 0 01-2.902 3.3c-1.125.955-2.473 1.718-4.047 2.288-1.574.57-3.26.856-5.059.856-2.794 0-5.38-.755-7.756-2.264.385.048.787.072 1.204.072 2.329 0 4.425-.723 6.287-2.169a4.799 4.799 0 01-2.926-1.011 5.14 5.14 0 01-1.795-2.505c.418.064.73.096.94.096.353 0 .762-.064 1.228-.193-1.172-.225-2.16-.806-2.963-1.746-.803-.94-1.204-2.011-1.204-3.216v-.048c.85.401 1.653.61 2.408.627-1.461-.98-2.192-2.385-2.192-4.216 0-.9.233-1.75.699-2.553a14.339 14.339 0 004.625 3.733 14.322 14.322 0 005.829 1.566c-.08-.305-.12-.69-.12-1.156 0-1.398.493-2.59 1.481-3.577.988-.988 2.18-1.482 3.577-1.482 1.478 0 2.707.53 3.686 1.59A10.064 10.064 0 0030.16 9.61c-.401 1.237-1.148 2.176-2.24 2.819a10.721 10.721 0 002.914-.82 9.834 9.834 0 01-2.53 2.626z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="twitter_svg__clip0">
          <path fill="#fff" d="M0 0h37v37H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgTwitter;