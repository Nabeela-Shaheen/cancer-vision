

import React, { useState } from "react";
import Link from '../../utils/ActiveLink';
import Logo from "../../assets/images/logo.webp";
import LogoWhite from "../../assets/images/white-logo.webp";
import languageIcon from "../../assets/images/languageIcon.svg";
import languageIconWhite from "../../assets/images/languageiconWhite.png";
import SmallContactForm from "../../components/Contact/SmallContactForm";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { GrLanguage } from "@react-icons/all-files/gr/GrLanguage";
import { CgMenuGridO } from "@react-icons/all-files/cg/CgMenuGridO";
import TopHeader from "./TopHeader";
import Image from "next/image";
const Navbar = ({ locationPathname = "" }) => {
    const [menu, setMenu] = React.useState(true)
    const [emailIconHide, setEmailIconHide] = useState(false);

    const toggleNavbar = () => {
        setMenu(!menu);
        setEmailIconHide(!emailIconHide);
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
    })

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

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar"
                // className="navbar-area"
                className={`navbar-area ${locationPathname !== "/" &&
                    locationPathname !== "/en_is/" &&
                    locationPathname !== "/is_is/" &&
                    "navbar-color-white"
                    }`}
            >
                <TopHeader locationPathname={locationPathname} />
                <div className="main-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    {/* <img src={Logo} alt="logo" /> */}
                                    <Image
                                        src={
                                            locationPathname !== "/" &&
                                                locationPathname !== "/en_is/" &&
                                                locationPathname !== "/is_is/"
                                                ? LogoWhite
                                                : Logo
                                        }
                                        alt="Logo"
                                    />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
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
                                        <Link href="/#" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Home <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                    </li>

                                    <li className="nav-item">
                                        <Link href="/#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                About <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/about-us" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">   About Us</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">  FAQ's</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link"> Privacy Policy</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/terms-of-service" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link"> Terms of Service</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Services <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/#" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link"> Development <i className="bx bx-chevron-right"></i></a>
                                                </Link>
                                                <ul className="dropdown-menu">


                                                    <li className="nav-item">
                                                        <Link href="/mobile-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Mobile Development<i className="bx bx-chevron-down"></i></a>
                                                        </Link>
                                                        <ul className="dropdown-menu">

                                                            <li className="nav-item">
                                                                <Link href="/mobile-development/react-native-app-development" activeClassName="active">
                                                                    <a onClick={toggleNavbar} className="nav-link"> React Native App Development</a>
                                                                </Link>
                                                            </li>

                                                            <li className="nav-item">
                                                                <Link href="/mobile-development/flutter-app-development" activeClassName="active">
                                                                    <a onClick={toggleNavbar} className="nav-link"> Flutter App Development</a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>


                                                    <li className="nav-item">
                                                        <Link href="/web-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link"> Web Development<i className="bx bx-chevron-down"></i></a>
                                                        </Link>
                                                        <ul className="dropdown-menu">

                                                            <li className="nav-item">
                                                                <Link href="/web-development/react-web-development" activeClassName="active">
                                                                    <a onClick={toggleNavbar} className="nav-link"> React Web Development</a>
                                                                </Link>
                                                            </li>

                                                            <li className="nav-item">
                                                                <Link href="/web-development/wordpress-web-development" activeClassName="active">
                                                                    <a onClick={toggleNavbar} className="nav-link"> Wordpress Web Development</a>
                                                                </Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link href="/web-development/php-web-development" activeClassName="active">
                                                                    <a onClick={toggleNavbar} className="nav-link"> PHP Web Development</a>
                                                                </Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link href="/web-development/wordpress-error-solving" activeClassName="active">
                                                                    <a onClick={toggleNavbar} className="nav-link">  Wordpress Error Solving</a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/database-design-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link"> Database Design &amp; Development</a>
                                                        </Link>
                                                    </li>


                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/graphic-designing" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Graphic Designing</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/social-media-management" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link"> Social Media Management <i className="bx bx-chevron-down"></i></a>
                                                </Link>
                                                <ul className="dropdown-menu">

                                                    <li className="nav-item">
                                                        <Link href="/social-media-management" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">  Social Media Management</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/social-media-management/social-media-marketing/" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link"> Social Media Marketing</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/social-media-management/page-management/" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link"> Social Media Page Management</a>
                                                        </Link>
                                                    </li>

                                                </ul>

                                            </li>

                                            <li className="nav-item">
                                                <Link href="/digital-marketing" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link"> Digital Marketing</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/2d-animated-video" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link"> 2D Animated Video</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/2d-3d-modeling" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">2D/3D Modeling</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/content-writing" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">  Content Writing</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/seo-services" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">  SEO Services <i className="bx bx-chevron-down"></i></a>
                                                </Link>
                                                <ul className="dropdown-menu">

                                                    <li className="nav-item">
                                                        <Link href="/seo-services" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">   SEO Service</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/seo-services/seo-competitor-analysis/" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link"> SEO Competitor Analysis</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/seo-services/on-page-seo" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">   SEO On-page</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/seo-services/ui-ux-design-seo" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">   SEO UI/UX Design</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/seo-services/web-audit-and-assessment" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">  SEO Audit and Assessment</a>
                                                        </Link>
                                                    </li>

                                                </ul>

                                            </li>

                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Offers <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/hard-working-moms-offer" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Mom's Offer</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/careers">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Careers
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                <Image
                                                    src={
                                                        locationPathname !== "/" &&
                                                            locationPathname !== "/en_is/" &&
                                                            locationPathname !== "/is_is/"
                                                            ? languageIconWhite
                                                            : languageIcon
                                                    }
                                                    alt="loading"
                                                />
                                                &nbsp; <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            {/* <TranslationHeader /> */}
                                        </ul>
                                    </li>


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





                            <div className="option-item option-item-hamburger mobile-show">
                                <div
                                    style={{
                                        marginLeft: "15px",
                                        color: "#ec193f",
                                    }}
                                    className="side-menu-btn" onClick={handleToggleSidebarModal}>
                                    <CgMenuGridO
                                        style={{ cursor: "pointer", fontSize: "28px" }}
                                    />
                                </div>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>

            {/* Search Form */}
            <div className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>

                        <div className="search-overlay-close" onClick={handleToggleSearchModal}>
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input type="text" className="input-search" placeholder="Search here..." />
                                <button type="submit">
                                    <i className="flaticon-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Form */}

            {/* Sidebar Modal */}
            <div className={`sidebarModal modal right ${isActiveSidebarModal ? "" : "show"}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="close" onClick={handleToggleSidebarModal}>
                            <i className='bx bx-x'></i>
                        </button>

                        <div className="modal-body">
                            <div className="logo">
                                <Link href="/">
                                    <a className="d-inline-block">
                                        <Image src={Logo} alt="getweys-logo" width="100%" />
                                    </a>
                                </Link>
                            </div>



                            <div className="sidebar-contact-info">
                                <h2>
                                    <a href="tel:+923000184999">+92(300)-0184999</a>
                                    <span>OR</span>
                                    <a href="mailto:info@getweys.com">info@getweys.com</a>
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
        </>
    );
}

export default Navbar;