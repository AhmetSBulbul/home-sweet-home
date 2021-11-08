import BaseButton from "../BaseButton";

export default function IconButton({
  children,
  ...props
}) {
  return (
    <BaseButton
      className="text-4xl transition-transform transform hover:scale-110"
      {...props}
    >
      {children}
    </BaseButton>
  );
}
