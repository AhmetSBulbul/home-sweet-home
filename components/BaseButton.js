import Link from "next/link";
import cn from "classnames";
import React from "react";

/* Nextjs Base Button Component */

const FunctionalLink = React.forwardRef(
  (
    { onClick, href, children, ...props },
    ref
  ) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    );
  }
);

function FunctionalLinkButton({
  href,
  children,
  onClick,
  ...props
}) {
  return (
    <Link href={href} passHref>
      <FunctionalLink
        onClick={onClick}
        {...props}
      >
        {children}
      </FunctionalLink>
    </Link>
  );
}

function LinkButton({
  href,
  children,
  ...props
}) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

function Button({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

const BaseButton = ({
  children,
  className,
  ...props
}) => {
  const CurrBtn = props.href
    ? props.onClick
      ? FunctionalLinkButton
      : LinkButton
    : Button;

  return (
    <CurrBtn className={className} {...props}>
      {children}
    </CurrBtn>
  );
};

export default BaseButton;
