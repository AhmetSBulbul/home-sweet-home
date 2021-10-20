import Link from "next/link";
import styles from "./index.module.css";
import cn from "classnames";
import React from "react";

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

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

const Button = ({
  children,
  className,
  ...props
}) => {
  const CurrBtn = props.href
    ? props.onClick
      ? FunctionalLinkButton
      : LinkButton
    : BaseButton;

  return (
    <CurrBtn
      className={cn([styles.button, className])}
      {...props}
    >
      {children}
    </CurrBtn>
  );
};

export default Button;
