import Link from "next/link";
import styles from "./index.module.css";
import cn from "classnames";

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
    ? LinkButton
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
