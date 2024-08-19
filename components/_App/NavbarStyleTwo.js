import React, { useEffect, useState } from "react";
import Link from "../../utils/ActiveLink";
import { useRouter } from "next/router";
import { onAuthStateChanged, signOut } from "../../lib/auth";
import Cookies from "js-cookie";
import Image from "next/image";

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



const NavbarStyleTwo = ( {initialUser}) => {
  const [menu, setMenu] = React.useState(true);

  const router = useRouter();

  const user = useUserSession(initialUser);

  const handleSignOut = (event) => {
    event.preventDefault();
    signOut();
    Cookies.remove("loggedin");
    router.push("/");
  };

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
      <div id="navbar" className="navbar-area navbar-color-white">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a onClick={toggleNavbar} className="navbar-brand">
                  <Image height={100} width={200} src="/images/logo.png" alt="logo" />
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
                    <Link href="/dashboard" activeClassName="active">
                      <a
                       onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Home 
                       
                      </a>
                    </Link>

                
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us">
                      <a
                       onClick={toggleNavbar}
                        className="nav-link"
                      >
                        About Us
                 
                      </a>
                    </Link>

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
                        <Link href="/digiLab" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Digi Lab
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/hospital" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                          Hospitals
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/doctors" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Doctors
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/emergency" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                          Emergency Contacts
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/dietplan" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                          Diet
                          </a>
                        </Link>
                      </li>

                  
                    </ul>
                  </li>


                  {/* <li className="nav-item">
                    <Link href="/blog">
                      <a
                       onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Blog
                     
                      </a>
                    </Link>

                  </li> */}

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

              <>
                <div className="profile">
                    <div>
                    <Image 
                    src={user?.photoURL ?? "/images/team/team-img6.jpg"} 
                    // alt="Profile"
                    //  src="/images/team/team-img6.jpg" 
                     width={100} height={100} alt={user?.email} 
                     />
                    </div>
                  <h6 style={{ marginTop: "10px" }}>
                    
                    {user?.displayName}
                    
                  </h6>
                  <p>{user?.email}</p>

                  <div className="menu">
                    ....................
                  
                     <br/>
                      <button  className="default-btn" onClick={handleSignOut}>
                        {/* <a href="#" onCbuttonck={handleSignOut}> */}
                          Sign Out
                        {/* </a> */}
                      </button>
                    
                  </div>
                </div>
              </>

              <div className="sidebar-contact-info">
                <h3>Contact Info</h3>
                <h5>
                  <a href="tel:+923437891268">+92 343 7891268</a>
                  <br/>   <span>OR</span> <br/>
                  <a href="mailto:917-2020@lms.indus.edu.pk">917-2020@lms.indus.edu.pk</a>
                </h5>
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

export default NavbarStyleTwo;
