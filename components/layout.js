import Header from "./Header";
import FloatContact from "./FloatContact";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="w-screen overflow-x-hidden">
      <Header />
      <FloatContact />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
