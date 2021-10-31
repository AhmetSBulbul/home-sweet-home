import Header from "./Header";
import FloatContactBtn from "./FloatContactBtn";

export default function Layout({ children }) {
  return (
    <div className="w-screen overflow-x-hidden">
      <Header />
      <FloatContactBtn />
      <main>{children}</main>
    </div>
  );
}
