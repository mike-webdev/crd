import { useEffect } from "react";
import NavItem from "../items/NavItem";
import Link from "next/link";

export default function Footer() {

  useEffect(() => {
    const mybutton: HTMLElement = document.getElementById("scrollToTopButton")
    window.onscroll = function () {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }, [])


  function scrollToTop() {
    window.scrollTo(0, 0);
  }





  return (
    <div>
      <section className="footer-links space">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h3 className="text-center">CRD | ABOUT US</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                gravida venenatis sapien nec mollis. Pellentesque accumsan
                tortor a elit ornare, a iaculis ante imperdiet. Morbi ut nulla
                eu elit efficitur aliquet quis vel libero. Donec vel viverra
                sapien, ut elementum magna. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Sed nisi
                orci, dignissim eu sagittis a, interdum eget libero. Maecenas
                hendrerit vulputate convallis.
              </p>
            </div>
            <div className="col-sm-4 text-center">
              <h4>MENU</h4>
              <ul className="footer-menu">
                <NavItem link="/" page="Home" />
                <NavItem link="/" page="Courses" />
                <NavItem link="/" page="Features" />
                <NavItem link="/" page="Featured Courses" />
                <NavItem link="/" page="Learner Outcomes" />
                <NavItem link="/" page="How it Works" />
                <NavItem link="/" page="Student Reviews" />
                <NavItem link="/" page="All Courses" />
                <NavItem link="/" page="Frequently Asked Questions" />
              </ul>
            </div>
            <div className="col-sm-4">
              <h4 className="text-center">SITE NOTICES</h4>
              <ul className="">
                <li>
                  <strong>New! Sample Course # 2.</strong> Try our{" "}
                  <Link href="#"><a>new course.</a></Link>
                </li>
                <li>
                  <strong>Update: Mintography Updated.</strong>{" "}
                  <Link href="#"><a>Check our updates.</a></Link>
                </li>
                <li>
                  <strong>Archival Notice: Sample Course # 4 Archived.</strong>{" "}
                  If you enrolled to this course, you can still view it on your
                  homepage.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Link href="#"><a onClick={scrollToTop} id="scrollToTopButton" title="Go to top"><i className="fas fa-chevron-circle-up"></i></a></Link>

      <footer className="text-center footer">
        Copyright. Magicsoft International Software Development Services
      </footer>
    </div>
  );
}
