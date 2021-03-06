import * as React from "react";

function SvgClose(props) {
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
        d="M19.95 15l9.28-9.28a2.624 2.624 0 000-3.712L27.995.771a2.624 2.624 0 00-3.712 0L15 10.051 5.72.77a2.624 2.624 0 00-3.712 0L.77 2.006a2.624 2.624 0 000 3.712l9.283 9.283L.77 24.28a2.624 2.624 0 000 3.713l1.237 1.237a2.624 2.624 0 003.712 0L15 19.95l9.282 9.28a2.624 2.624 0 003.712 0l1.237-1.236a2.624 2.624 0 000-3.712L19.95 15z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClose;
