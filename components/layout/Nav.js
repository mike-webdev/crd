import Link from "next/link";
import { useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import NavItem from "../items/NavItem";
import ChangeLanguage from "./ChangeLanguage";
import useTranslation from "next-translate/useTranslation";
import { useSession, signOut } from "next-auth/client";

export default function Nav() {
  const [session, loading] = useSession();
  // const { state, dispatch } = useContext(Context);
  // const { user } = state;
  const { t } = useTranslation("common");
  // user = JSON.stringify(user, null, 4)

  // const router = useRouter();

  // const logout = async () => {
  //   dispatch({ type: "LOGOUT" });
  //   window.localStorage.removeItem("user");
  //   const { data } = await axios.get("/api/logout");
  //   toast(data.message);

  //   if(user.type == 1){
  //     router.push("/admin/login");
  //   }else{
  //     router.push("/login");
  //   }
  // };

  function logoutHandler() {
    signOut();
    toast("Logged out.");
  }

  useEffect(() => {
    //admin nav
    //setting active tab
    var btns = document.querySelectorAll("#adminNav li a");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");

        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }
  }, []);

  return (
    <section className="navigationbar">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Mint09</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <NavItem link="/" page="Home" />
              {session ? (
                session.user.user_type == 1 ? (
                  // ADMIN NAV
                  <>
                    <nav id="adminNav">
                      <ul>
                        <li>
                          <Link href="/admin">
                            <a>
                              <span id="admin">Admin</span>{" "}
                              <i className="fas fa-tachometer-alt"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/admin/course-management">
                            <a>
                              <span id="course_management">
                                Course Management
                              </span>{" "}
                              <i className="fas fa-clipboard-list"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a>
                              <span>Sample Nav Item</span>{" "}
                              <i className="fas fa-clipboard-check"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a>
                              <span>Sample Nav Item</span>{" "}
                              <i className="fas fa-gift"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a>
                              <span id="reports">Reports</span>{" "}
                              <i className="fas fa-flag"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <a onClick={logoutHandler}>Log Out</a>
                  </>
                ) : (
                  //STUDENT NAV
                  <>
                    <NavItem link="/student" page="Dashboard" />
                    <NavItem link="#" page="My Courses" />
                    <NavItem link="#" page="Achievements" />
                    <NavItem link="#" page="Reviews" />
                    <li className="nav-item">
                      <div className="dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {t("My Account")}
                        </a>

                        <ul
                          className="dropdown-menu text-center"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              {session.user.name}
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              {t("My Profile")}
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <div className="notif-count">1</div>
                              {t("Notifications")}
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              {t("User Settings")}
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              {t("My Forums")}
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={logoutHandler}
                              className="dropdown-item"
                            >
                              {t("Log Out")}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </>
                )
              ) : (
                <>
                  <NavItem link="#featured" page="Featured Courses" />
                  <NavItem link="#learnerOutcome" page="Learner Outcomes" />
                  <NavItem link="#reviews" page="Reviews" />
                  <NavItem link="/login" page="Login" />
                  <NavItem link="/register" page="Register" />
                </>
              )}
                    <li className="nav-item">
                      <ChangeLanguage/>
                    </li>
              {/* 
              {
                session && session.user.type == 1 ? (
                   // ADMIN NAV 
                   <>
                   <nav id="adminNav">
                     <ul>
                       <li> 
                         <Link href="/admin"><a><span id="admin">Admin</span> <i className="fas fa-tachometer-alt"></i></a></Link> 
                        </li>
                       <li> 
                        <Link href="/admin/course-management"><a><span id="course_management">Course Management</span> <i className="fas fa-clipboard-list"></i></a></Link> 
                       </li>
                       <li> 
                        <Link href="#"><a><span>Sample Nav Item</span> <i className="fas fa-clipboard-check"></i></a></Link> 
                       </li>
                       <li> 
                         <Link href="#"><a><span>Sample Nav Item</span> <i className="fas fa-gift"></i></a></Link>
                        </li>
                       <li> 
                         <Link href="#"><a><span id="reports">Reports</span> <i className="fas fa-flag"></i></a></Link>
                        </li>
                     </ul>
                   </nav>
                   <a onClick={logoutHandler}>
                      Log Out
                    </a>
                 </>
                ) : (
                  <>
                  <NavItem link="/" page="Home" />

                    {session === null && (
                      <>
                        <NavItem link="#featured" page="Featured Courses" />
                        <NavItem link="#learnerOutcome" page="Learner Outcomes" />
                        <NavItem link="#reviews" page="Reviews" />
                        <NavItem link="/login" page="Login" />
                        <NavItem link="/register" page="Register" />
                      </>
                    )}
                    {session !== null && (
                      <>
                        <NavItem link="/student" page="Dashboard" />
                        <NavItem link="#" page="My Courses" />
                        <NavItem link="#" page="Achievements" />
                        <NavItem link="#" page="Reviews" />
                        <li className="nav-item">
                          <div className="dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              id="dropdownMenuLink"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {t("My Account")}
                            </a>

                            <ul
                              className="dropdown-menu text-center"
                              aria-labelledby="dropdownMenuLink"
                            >
                              <li>
                                <a className="dropdown-item" href="#">
                                  {t("My Profile")}
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <div className="notif-count">1</div>{t("Notifications")}
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                {t("User Settings")}
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                {t("My Forums")}
                                </a>
                              </li>
                              <li>
                                <a onClick={logoutHandler} className="dropdown-item">
                                {t("Log Out")}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </>
                    )}
                    <li className="nav-item">
                      <ChangeLanguage/>
                    </li>
                
                </>
                )
              } */}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
