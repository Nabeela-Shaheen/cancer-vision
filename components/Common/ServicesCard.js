import React from 'react';
import Link from 'next/link';

const ServicesCard = () => {
    return (
        <div className="services-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Services</span>
                    <h2>Let’s Check Our Services</h2>
                    <p>At Cancer Vision, we offer a suite of cutting-edge services designed to provide you with the best tools for early detection and management of skin cancer. Our advanced technology and user-centric approach ensure you receive accurate, timely, and reliable support.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-megaphone"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/digiLab">
                                    Digital Lab
                                </Link>
                            </h3>
                            <p>Utilize our advanced Convolutional Neural Network (CNN) technology to detect skin cancer with high accuracy. Simply upload an image of the suspicious area, and our app will analyze it in real-time.</p>

                            <Link href="/digiLab" className="learn-more-btn">

                                <i className="left-icon flaticon-next-button"></i>Learn More<i className="right-icon flaticon-next-button"></i>

                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-megaphone"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/liveDigiLab">
                                    Live Digital Lab
                                </Link>
                            </h3>
                            <p>Utilize our advanced Convolutional Neural Network (CNN) technology to detect skin cancer with high accuracy. Simply upload an image of the suspicious area, and our app will analyze it in real-time.</p>

                            <Link href="/liveDigiLab" className="learn-more-btn">

                                <i className="left-icon flaticon-next-button"></i>Learn More<i className="right-icon flaticon-next-button"></i>

                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-keywords"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/hospital">
                                    Hospitals
                                </Link>
                            </h3>
                            <p>For users requiring further evaluation and treatment, our app provides a curated list of nearby hospitals with specialized dermatology and oncology departments. These facilities are equipped with the latest technology and staffed by experienced professionals to offer you the best care possible.</p>

                            <Link href="/hospital" className="learn-more-btn">

                                <i className="left-icon flaticon-next-button"></i>Learn More<i className="right-icon flaticon-next-button"></i>

                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-content-management"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/doctors">
                                    Clinic & Doctors
                                </Link>
                            </h3>
                            <p>Find local clinics and dermatologists for routine check-ups and follow-up consultations. Our app connects you with trusted medical professionals who can provide personalized care and support for your skin health needs.</p>

                            <Link href="/doctors" className="learn-more-btn">

                                <i className="left-icon flaticon-next-button"></i>Learn More<i className="right-icon flaticon-next-button"></i>

                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-ppc"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/emergency">
                                    Emergency Contacts
                                </Link>
                            </h3>
                            <p>In case of urgent concerns, our app offers a list of emergency contacts including healthcare facilities and dermatologists who are available for immediate consultation and assistance. Your health and peace of mind are our top priorities.</p>

                            <Link href="/emergency" className="learn-more-btn">

                                <i className="left-icon flaticon-next-button"></i>Learn More<i className="right-icon flaticon-next-button"></i>

                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-competitor"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/dietplan">
                                    Diet Plan
                                </Link>
                            </h3>
                            <p>Healthy skin starts from within. Our app offers personalized diet plans that focus on nutrition to support skin health and boost your immune system. 
                                Our diet plans are crafted by nutrition experts to complement your skin care routine and overall health goals.</p>

                            <Link href="/dietplan" className="learn-more-btn">

                                <i className="left-icon flaticon-next-button"></i>Learn More<i className="right-icon flaticon-next-button"></i>

                            </Link>
                        </div>
                    </div>

                    {/* <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-startup"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/single-services">
                                    BMI Calculator
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link href="/single-services" className="learn-more-btn">

                                <i className="left-icon flaticon-next-button"></i>Learn More<i className="right-icon flaticon-next-button"></i>

                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default ServicesCard;