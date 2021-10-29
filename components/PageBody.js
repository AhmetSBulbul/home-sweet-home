export default function PageBody({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col px-8">
      {children}
    </div>
  );
}
