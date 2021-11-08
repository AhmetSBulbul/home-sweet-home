import FloatContact from "./FloatContact";
import { Footer, Header } from "../modules";

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
