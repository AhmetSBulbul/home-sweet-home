import * as React from "react";

function SvgChat(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#chat_svg__clip0_544:4506)" fill="currentColor">
        <path d="M1.326 3.462v20.192l6.923-5.192a2.87 2.87 0 011.73-.577h11.54A2.884 2.884 0 0024.402 15V3.462A2.885 2.885 0 0021.518.577H4.21a2.885 2.885 0 00-2.884 2.885zM4.21 17.885V3.462h17.308V15H9.02a2.861 2.861 0 00-1.73.577L4.21 17.885z" />
        <path d="M30.172 29.423v-18.75a2.885 2.885 0 00-2.885-2.885v15.866l-3.078-2.308a2.86 2.86 0 00-1.73-.577H8.537a2.885 2.885 0 002.885 2.885h10.096a2.868 2.868 0 011.73.577l6.924 5.192z" />
      </g>
      <defs>
        <clipPath id="chat_svg__clip0_544:4506">
          <path fill="#fff" transform="translate(.883)" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgChat;
