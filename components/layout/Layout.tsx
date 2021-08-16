import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Nav />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
