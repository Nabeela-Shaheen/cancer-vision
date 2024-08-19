import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="digital-agency-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-content">
                            <span className="sub-title">Digital Marketing</span>
                            <h1>Digital Agency with Excellence Service</h1>
                            <p>We have created a cloud based tool to do your all boring tasks related to data analysis and decesion making based on the nature of data!</p>
                            
                            <div className="btn-box">
                                <Link href="/about-us-1" className="default-btn">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="banner-image">
                            <img src="/images/banner-img4.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;