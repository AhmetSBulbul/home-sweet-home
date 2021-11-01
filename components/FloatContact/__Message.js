export default function Message({
  children,
  onClick,
}) {
  return (
    <>
      <h3 className="text-center mb-4 px-4">
        {children}
      </h3>
      <button
        type="button"
        onClick={onClick}
        className="bg-secondary text-white px-2 py-1"
      >
        Tamam
      </button>
    </>
  );
}
