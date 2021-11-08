import { Footer, Header } from "../modules";

export default function Layout({ children }) {
  return (
    <div className="w-screen overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
