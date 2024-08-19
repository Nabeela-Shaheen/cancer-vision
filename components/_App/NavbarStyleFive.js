import React, { useEffect, useState } from "react";
import Link from "../../utils/ActiveLink";
import Image from "next/image";
import { onAuthStateChanged, signOut } from "../../lib/auth";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function useUserSession(initialUser) {
  // The initialUser comes from the server through a server component
  const [user, setUser] = useState(initialUser);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    onAuthStateChanged((authUser) => {
      if (user === undefined) return;
      if (user?.email !== authUser?.email) {
        router.refresh();
      }
    });
  }, [user]);

  return user;
}

const NavbarStyleFive = ({initialUser}) => {
  const [menu, setMenu] = React.useState(true);

  const router = useRouter();

  const user = useUserSession(initialUser);

  const handleSignOut = (event) => {
    event.preventDefault();
    signOut();
    Cookies.remove("loggedin");
    router.push("/");
  };

//   const logOut = () => {
//     Cookies.remove("loggedin");
//     router.push("/");
//   };

  console.log("sssssssssx", router);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

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
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-two">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a onClick={toggleNavbar} className="navbar-brand">
                  <img
                    src="/images/logo.png"
                    style={{ height: 80 }}
                    alt="logo"
                  />
                </a>
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
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/#" activeClassName="active">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Home <i className="bx bx-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home Demo - 1
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-2" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home Demo - 2
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-3" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home Demo - 3
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-4" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home Demo - 4
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-5" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home Demo - 5
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-6" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home Demo - 6
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-7" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home Demo - 7
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        About <i className="bx bx-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/about-us-1" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            About Us One
                          </a>
                        </Link>
                      </li>

                      {/* <li className="nav-item">
                        <Link href="/about-us-2" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            About Us Two
                          </a>
                        </Link>
                      </li> */}

                      <li className="nav-item">
                        <Link href="/team-1" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Team One
                          </a>
                        </Link>
                      </li>

                      {/* <li className="nav-item">
                        <Link href="/team-2" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Team Two
                          </a>
                        </Link>
                      </li> */}
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Services <i className="bx bx-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/services-1" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Services One
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/services-2" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Services Two
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/services-3" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Services Three
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/single-services" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Services Details
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Pages <i className="bx bx-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/pricing" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Pricing
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/gallery" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Gallery
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/#" activeClassName="active">
                          <a
                            onClick={(e) => e.preventDefault()}
                            className="nav-link"
                          >
                            Shop <i className="bx bx-chevron-right"></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/products-list"
                              activeClassName="active"
                            >
                              <a onClick={toggleNavbar} className="nav-link">
                                Products List
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/cart" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                Cart
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/checkout" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                Checkout
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/product-details"
                              activeClassName="active"
                            >
                              <a onClick={toggleNavbar} className="nav-link">
                                Products Details
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="/faq" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            FAQ's
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/404" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            404 Error Page
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/coming-soon" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Coming Soon
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/profile-authentication"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Login/Register
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/privacy-policy" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Privacy Policy
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/terms-of-service" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Terms of Service
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Portfolio <i className="bx bx-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/#" activeClassName="active">
                          <a
                            onClick={(e) => e.preventDefault()}
                            className="nav-link"
                          >
                            Portfolio Style One{" "}
                            <i className="bx bx-chevron-right"></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/portfolio-1" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                Portfolio 2 Columns
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/portfolio-2" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                Portfolio 3 Columns
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/portfolio-3" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                Portfolio No Space
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="/#" activeClassName="active">
                          <a
                            onClick={(e) => e.preventDefault()}
                            className="nav-link"
                          >
                            Portfolio Style Two{" "}
                            <i className="bx bx-chevron-right"></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/portfolio-4" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                Portfolio 2 Columns
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/portfolio-5" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                Portfolio 3 Columns
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/portfolio-6" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                Portfolio No Space
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="/single-portfolio" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Portfolio Details
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Blog <i className="bx bx-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog-1" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Grid (2 in Row)
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-2" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Grid (3 in Row)
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-3" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Grid (Full Width)
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-4" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Right Sidebar
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-5" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Left Sidebar
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/#" activeClassName="active">
                          <a
                            onClick={(e) => e.preventDefault()}
                            className="nav-link"
                          >
                            Single Post <i className="bx bx-chevron-right"></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/single-blog-1"
                              activeClassName="active"
                            >
                              <a onClick={toggleNavbar} className="nav-link">
                                Default
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/single-blog-2"
                              activeClassName="active"
                            >
                              <a onClick={toggleNavbar} className="nav-link">
                                With Video
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/single-blog-3"
                              activeClassName="active"
                            >
                              <a onClick={toggleNavbar} className="nav-link">
                                With Image Slider
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>


              <div className="others-option d-flex align-items-center">


                <div className="option-item">
                  <div
                    className="side-menu-btn"
                    onClick={handleToggleSidebarModal}
                  >
                    <i className="flaticon-menu"></i>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

    
      {/* Sidebar Modal */}
      <div
        className={`sidebarModal modal right ${
          isActiveSidebarModal ? "" : "show"
        }`}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={handleToggleSidebarModal}
            >
              <i className="bx bx-x"></i>
            </button>

            <div className="modal-body">
              <div className="logo">
                <Link href="/">
                  <a className="d-inline-block">
                    <img
                      src="/images/logo.png"
                      style={{ height: 80 }}
                      alt="image"
                    />
                  </a>
                </Link>
              </div>

              {/* <div className="instagram-list">
                <div className="row justify-content-center">
              

                  <div className="col-lg-6 col-md-4 col-sm-4 col-6">
                    <div className="box">
                      <img src="/images/team/team-img6.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a href="#" target="_blank" className="link-btn"></a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <button
                type="submit"
                onClick={() => logOut()}
                style={{ backgroundColor: "#D93025", marginTop: "40px" }}
              >
                Log Out
              </button> */}
              <>
                <div className="profile">
                    <div>
                    <Image src="/images/team/team-img6.jpg" width={230} height={230} alt={user?.email} />
                    </div>
                  <p>
                    
                    {user?.displayName}
                    {user?.email}
                  </p>

                  <div className="menu">
                    ...
                  
                      <h1>{user?.displayName}</h1>
                      <button  className="default-btn" onClick={handleSignOut}>
                        {/* <a href="#" onCbuttonck={handleSignOut}> */}
                          Sign Out
                        {/* </a> */}
                      </button>
                    
                  </div>
                </div>
              </>

              <div className="sidebar-contact-info">
                <h2>
                  <a href="tel:+11234567890">+1 (123) 456 7890</a>
                  <span>OR</span>
                  <a href="mailto:917-2020@lms.indus.edu.pk">917-2020@lms.indus.edu.pk</a>
                </h2>
              </div>

              <ul className="social-list">
                <li>
                  <span>Follow Us On:</span>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-twitch"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}
    </>
  );
};

export default NavbarStyleFive;
