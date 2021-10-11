import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="w-screen overflow-x-hidden">
      <Header />
      <main>{children}</main>
    </div>
  );
}
