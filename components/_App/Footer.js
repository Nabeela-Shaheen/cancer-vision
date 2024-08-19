import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <Link href="/" className="logo">

                                <img src="/images/white-logo.png" alt="logo" />

                            </Link>
                            <p>At Cancer Vision, we are dedicated to providing innovative tools and resources for early detection and treatment of skin cancer. Our mission is to empower individuals with the knowledge and technology to take control of their skin health.</p>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="https://www.linkedin.com/in/nabeelashaheen/" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us">
                                        About
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/pricing">
                                        Pricing
                                    </Link>
                                </li> */}
                                {/* <li>
                                    <Link href="/portfolio-1">
                                        Portfolio
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-2">
                            <h3>Resources</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/team-1">
                                        Team
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/contact">
                                        Contact
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/services-1">
                                        Services
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/faq">
                                        FAQ
                                    </Link>
                                </li> */}
                                {/* <li>
                                    <Link href="/blog-1">
                                        Blog
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    ST-2D, Block-17, Gulshan-e-Iqbal, Adjacent to, National Stadium Rd, National Stadium Colony, Karachi, Karachi City, Sindh
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i> 
                                    <a href="tel:+923437891268">+92 343 7891269</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:917-2020@lms.indus.edu.pk">917-2020@lms.indus.edu.pk</a>
                                </li>
                                {/* <li>
                                    <i className='bx bxs-inbox'></i>
                                    <a href="tel:+557854578964">+55 785 4578964</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p><i className='bx bx-copyright'></i>{currentYear} <strong>Cancer Vision</strong> is Proudly Powered by <a target="_blank" href="https://NabeelaShaheen.netlify.app/">BSSE FYP Nabeela Team</a></p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    {/* <Link href="/privacy-policy"> */}
                                    <Link href="#">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    {/* <Link href="/terms-of-service"> */}
                                    <Link href="#">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape16">
                <img src="/images/shape/shape16.png" alt="image" />
            </div>
        </footer>
    );
}

export default Footer;