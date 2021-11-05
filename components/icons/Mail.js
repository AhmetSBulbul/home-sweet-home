import * as React from "react";

function SvgMail(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 39 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#mail_svg__clip0_544:4450)" fill="currentColor">
        <path d="M1.083 3.22C6.23 7.577 15.26 15.245 17.915 17.637c.356.322.738.486 1.135.486.396 0 .778-.162 1.133-.483C22.84 15.246 31.871 7.577 37.017 3.218a.78.78 0 00.11-1.078A3.103 3.103 0 0034.675.937H3.425c-.958 0-1.852.44-2.452 1.204a.78.78 0 00.11 1.078z" />
        <path d="M37.347 5.581a.778.778 0 00-.833.113C30.806 10.533 23.522 16.735 21.23 18.8c-1.287 1.161-3.072 1.161-4.361-.001C14.426 16.598 6.246 9.643 1.586 5.694A.782.782 0 00.3 6.29v19.648a3.128 3.128 0 003.125 3.125h31.25a3.128 3.128 0 003.125-3.125V6.29a.78.78 0 00-.453-.709z" />
      </g>
      <defs>
        <clipPath id="mail_svg__clip0_544:4450">
          <path fill="#fff" transform="translate(.133)" d="M0 0h38.75v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgMail;
