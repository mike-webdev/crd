import "../styles/globals.scss";
import "../styles/admin.scss";
import Nav from "../components/layout/Nav";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "next-auth/client";
import Router from "next/router";
import { useState } from "react";
import Preloader from "../components/items/Preloader";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  //hide nav on some pages
  const noNavigation = ["/student/update-info"];//just add here the pages with no nav
  const noFooter = ["/student/update-info","/course/lessonoutlook","/ielts","/minttube","/mintography"];//just add here the pages with no footer

  //show loading on route change
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <Provider session={pageProps.session}>
      {loading && <Preloader />}
      <ToastContainer position="top-right" closeOnClick autoClose={2000} />
      <Header />
      {noNavigation.includes(router.pathname) ? null : <Nav />}
      <Component {...pageProps} />
      {noFooter.includes(router.pathname) ? null : <Footer />}
    </Provider>
  );
}

export default MyApp;
