import React, { useState, useEffect } from "react";
import { Link } from '../../utils/ActiveLink';

import Logo from "../../assets/images/logo.webp";
import LogoWhite from "../../assets/images/white-logo.webp";
import languageIcon from "../../assets/images/languageIcon.svg";
import languageIconWhite from "../../assets/images/languageiconWhite.png";
import SmallContactForm from "../Contact/SmallContactForm.js";
import {HiOutlineMail} from "@react-icons/all-files/hi/HiOutlineMail"; 
import { GrLanguage } from "@react-icons/all-files/gr/GrLanguage";
import { CgMenuGridO } from "@react-icons/all-files/cg/CgMenuGridO";
// import { useBreakpoint } from "gatsby-plugin-breakpoints";
// import TranslationHeader from "../Common/TranslationHeader.js";
// import { navigate } from "gatsby";
// import useGeoLocation from "react-ipgeolocation";
// import { useLocation } from "@reach/router";
// import { useLang } from "../../global/context";
// import { Trans } from "react-i18next";
import TopHeader from "./TopHeader";
import Image from "next/image";

const Navbar = ({ locationPathname = "" }) => {
  const [menu, setMenu] = useState(true);
  const [emailIconHide, setEmailIconHide] = useState(false);
  const toggleNavbar = () => {
    setMenu(!menu);
    setEmailIconHide(!emailIconHide);
  };
//   const breakpoints = useBreakpoint();

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  // Search Modal
  const [isactiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isactiveSearchModal);
  };

  // Sidebar Modal
  const [isactiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isactiveSidebarModal);
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

//   const pageLocation = useLocation();

//   const currentRoute = pageLocation.pathname.split("/")[2];

//   const { selectedLng } = useLang();
//   const { country, isLoading, error } = useGeoLocation();

//   const getRedirectLanguage = () => {
//     if (typeof navigator === `undefined`) {
//       return "";
//     }
//     const lang = navigator?.language?.split("-")[0];
//     if (!lang) return "";
//     // IP --> iceland and browser language --> iceland then show icelandic otherwise show english(icelandic)
//     //if ip --> iceland

//     if (country === "IS") {
//       if (lang === "is") {
//         return "is_is";
//       } else {
//         return "en_is";
//       }
//     } else {
//       return "";
//     }
//   };

//   useEffect(() => {
//     if (!isLoading) {
//       const urlLang = getRedirectLanguage();

//       if (urlLang !== "" && !currentRoute?.includes(urlLang) && !selectedLng) {
//         console.log(`/${urlLang}/${currentRoute}`);
//         localStorage.setItem("gatsby-i18next-language", urlLang);
//         // navigate(`/${urlLang}/${currentRoute ?? ""}`, { replace: true });
//       }
//     }
//   }, [country, isLoading]);

  return (
    <React.Fragment>
      <div
        id="navbar"
        className={`navbar-area ${
          locationPathname !== "/" &&
          locationPathname !== "/en_is/" &&
          locationPathname !== "/is_is/" &&
          "navbar-color-white"
        }`}
      >
        <TopHeader locationPathname={locationPathname} />
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" onClick={toggleNavbar} className="navbar-brand">
                <Image
                  src={
                    locationPathname !== "/" &&
                    locationPathname !== "/en_is/" &&
                    locationPathname !== "/is_is/"
                      ? LogoWhite
                      : Logo
                  }
                  alt="getweys-logo"
                  width="60%"
                />
              </Link>
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{
                  fontSize: "30px",
                  color:
                    locationPathname !== "/" && locationPathname !== "/is/"
                      ? "#ea0143"
                      : "",
                }}
              >
                <span>
                  <i className="flaticon-menu"></i>
                </span>
              </button>
              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      to="/"
                      activeClassName="active"
                      onClick={toggleNavbar}
                      className="nav-link"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      About <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/about-us"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          About Us
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/faq"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          FAQ's
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/privacy-policy"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Privacy Policy
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/terms-of-service"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Terms of Service
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Services <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/#"
                          activeClassName="active"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Development <i className="bx bx-chevron-right"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              to="/mobile-development"
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Mobile Development
                              <i className="bx bx-chevron-down"></i>
                            </Link>

                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link
                                  to="/mobile-development/react-native-app-development"
                                  activeClassName="active"
                                  onClick={toggleNavbar}
                                  className="nav-link"
                                >
                                  React Native App Development
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  to="/mobile-development/flutter-app-development"
                                  activeClassName="active"
                                  onClick={toggleNavbar}
                                  className="nav-link"
                                >
                                  Flutter App Development
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/web-development"
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Web Development
                              <i className="bx bx-chevron-down"></i>
                            </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link
                                  to="/web-development/react-web-development"
                                  activeClassName="active"
                                  onClick={toggleNavbar}
                                  className="nav-link"
                                >
                                  React Web Development
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  to="/web-development/wordpress-web-development"
                                  activeClassName="active"
                                  onClick={toggleNavbar}
                                  className="nav-link"
                                >
                                  Wordpress Web Development
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  to="/web-development/php-web-development"
                                  activeClassName="active"
                                  onClick={toggleNavbar}
                                  className="nav-link"
                                >
                                  PHP Web Development
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  to="/web-development/wordpress-error-solving"
                                  activeClassName="active"
                                  onClick={toggleNavbar}
                                  className="nav-link"
                                >
                                  Wordpress Error Solving
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/database-design-development"
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Database Design &amp; Development
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/graphic-designing"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Graphic Designing{" "}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/social-media-management"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Social Media Management
                          <i className="bx bx-chevron-right"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              to="/social-media-management"
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Social Media Management
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="/social-media-management/social-media-marketing/"
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Social Media Marketing
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/social-media-management/page-management/"
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Social Media Page Management
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/digital-marketing"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Digital Marketing
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/2d-animated-video"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          2D Animated Video
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/2d-3d-modeling"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          2D/3D Modeling
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/content-writing"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Content Writing
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/seo-services"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          SEO Services
                          <i className="bx bx-chevron-right"></i>
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              to="/seo-services"
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              SEO Service
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="/seo-services/seo-competitor-analysis"
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              SEO Competitor Analysis
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="/seo-services/on-page-seo"
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              SEO On-page
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/seo-services/ui-ux-design-seo"
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              SEO UI/UX Design
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="/seo-services/web-audit-and-assessment"
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              SEO Audit and Assessment
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/contact"
                      activeClassName="active"
                      onClick={toggleNavbar}
                      className="nav-link"
                      style={{ marginTop: "0.5px" }}
                    >
                      Contact
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      to="/our-services"
                      activeClassName="active"
                      onClick={toggleNavbar}
                      className="nav-link"
                    >
                      Details
                    </Link>
                  </li> */}

                  <li className="nav-item">
                    <Link
                      to="/#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Offers <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="/hard-working-moms-offer"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Mom's Offer
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/careers"
                      activeClassName="active"
                      onClick={toggleNavbar}
                      className="nav-link"
                    >
                      Careers
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      to="/blogs"
                      activeClassName="active"
                      onClick={toggleNavbar}
                      className="nav-link"
                    >
                      Blogs
                    </Link>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link
                      to="/#"
                      activeClassName="active"
                      onClick={toggleNavbar}
                      className="nav-link"
                    >
                
                      <img
                        src={
                          locationPathname !== "/" &&
                          locationPathname !== "/en_is/" &&
                          locationPathname !== "/is_is/"
                            ? languageIconWhite
                            : languageIcon
                        }
                        alt="loading"
                      />
                      &nbsp;
                      <i className="bx bx-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <TranslationHeader />
                    </ul>
                  </li> */}
                </ul>
              </div>

              {!emailIconHide && (
                <div className="others-option">
                  <div className="option-item">
                    <div
                      className="search-box"
                      onClick={handleToggleSearchModal}
                    >
                      <HiOutlineMail />
                    </div>
                  </div>
                </div>
              )}

              {/* <CgMenuGridO /> */}
              {/* {!breakpoints.sm && ( */}
                <div className="option-item option-item-hamburger">
                  <div
                    style={{
                      marginLeft: "15px",
                      color: "#ec193f",
                    }}
                    className="side-menu-btn"
                    onClick={handleToggleSidebarModal}
                  >
                    <CgMenuGridO
                      style={{ cursor: "pointer", fontSize: "28px" }}
                    />
                  </div>
                </div>
              {/* )} */}
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isactiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              {/* <ContactForm /> */}
              <SmallContactForm
                handleToggleSearchModal={handleToggleSearchModal}
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}

      {/* Sidebar Modal */}
      <div
        className={`sidebarModal modal right ${
          isactiveSidebarModal ? "" : "show"
        }`}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              type="button"
              className="close"
              onClick={handleToggleSidebarModal}
              style={{ fontSize: "30px" }}
            >
              <i className="bx bx-x"></i>
            </div>

            <div className="modal-body">
              <div className="logo">
                <Link to="/" className="d-inline-block">
                  <img src={Logo} alt="getweys-logo" width="100%" />
                </Link>
              </div>

              <div className="sidebar-contact-info">
                <h2>
                  {/* <Trans>phone</Trans> */}
                 phone
                  <span>OR</span>
                  info@getweys.com
                </h2>
              </div>

              <ul className="social-list">
                <li>
                  <span>Follow Us On:</span>
                </li>
                <li>
                  <a href="https://www.facebook.com/Getweys" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/getweys" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/getweys/mycompany/"
                    target="_blank"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/getweys/" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}
    </React.Fragment>
  );
};

export default Navbar;
