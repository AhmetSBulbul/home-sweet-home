export default function PageBody({ children }) {
  return (
    <div className="w-full container desktop:max-w-7xl mx-auto flex flex-col px-4">
      {children}
    </div>
  );
}
