import React from 'react';
import Link from 'next/link';

const CaseStudiesTwo = () => {
    return (
        <div className="portfolio-area section-title-center pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Case Studies</span>
                    <h2>Check of Our Some Recent Works & Case Studies</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-portfolio-box">
                            <Link href="/single-portfolio" className="image d-block">

                                <img src="/images/portfolio/portfolio-img1.jpg" alt="image" />

                            </Link>
    
                            <div className="content">
                                <h3>
                                    <Link href="/single-portfolio">
                                        Movie Recommendation
                                    </Link>
                                </h3>
                                <span>System Project</span>

                                <Link href="/single-portfolio" className="link-btn">
                                    <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-portfolio-box">
                            <Link href="/single-portfolio" className="image d-block">

                                <img src="/images/portfolio/portfolio-img2.jpg" alt="image" />

                            </Link>
    
                            <div className="content">
                                <h3>
                                    <Link href="/single-portfolio">
                                        Customer Segmentation
                                    </Link>
                                </h3>
                                <span>Machine Learning</span>
                                
                                <Link href="/single-portfolio" className="link-btn">
                                    <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-portfolio-box">
                            <Link href="/single-portfolio" className="image d-block">

                                <img src="/images/portfolio/portfolio-img3.jpg" alt="image" />

                            </Link>
    
                            <div className="content">
                                <h3>
                                    <Link href="/single-portfolio">
                                        Data Analysis
                                    </Link>
                                </h3>
                                <span>Web Project</span>
                                
                                <Link href="/single-portfolio" className="link-btn">
                                    <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-portfolio-box">
                            <Link href="/single-portfolio" className="image d-block">

                                <img src="/images/portfolio/portfolio-img4.jpg" alt="image" />

                            </Link>
    
                            <div className="content">
                                <h3>
                                    <Link href="/single-portfolio">
                                        Detection Project
                                    </Link>
                                </h3>
                                <span>Programming</span>
                                
                                <Link href="/single-portfolio" className="link-btn">
                                    <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-portfolio-box">
                            <Link href="/single-portfolio" className="image d-block">

                                <img src="/images/portfolio/portfolio-img5.jpg" alt="image" />

                            </Link>
    
                            <div className="content">
                                <h3>
                                    <Link href="/single-portfolio">
                                        Data Scientist
                                    </Link>
                                </h3>
                                <span>Data Science</span>
                                
                                <Link href="/single-portfolio" className="link-btn">
                                    <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-portfolio-box">
                            <Link href="/single-portfolio" className="image d-block">

                                <img src="/images/portfolio/portfolio-img6.jpg" alt="image" />

                            </Link>
    
                            <div className="content">
                                <h3>
                                    <Link href="/single-portfolio">
                                        Benefits Research
                                    </Link>
                                </h3>
                                <span>Science Projects</span>
                                
                                <Link href="/single-portfolio" className="link-btn">
                                    <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaseStudiesTwo;