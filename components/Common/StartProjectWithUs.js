import React from 'react';
import Link from 'next/link';

const StartProjectWithUs = () => {
    return (
        <div className="project-start-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img src="/images/project-start1.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <span className="sub-title">Get Started</span>
                            <h2>We're Here for You, Anytime</h2>
                            <p>At Cancer Vision, your health is our top priority. Our dedicated team is available 24/7 to support and assist you every step of the way.

Whether you have questions, need guidance, or want to start using our cutting-edge cancer detection tools, we're just a click away.</p>
                            
                            <Link href="/contact" className="default-btn">
                            Contact US
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape2"><img src="/images/shape/shape2.png" alt="image" /></div>
            <div className="shape3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape5"><img src="/images/shape/shape5.png" alt="image" /></div>
            <div className="shape6"><img src="/images/shape/shape6.png" alt="image" /></div>
            <div className="shape7"><img src="/images/shape/shape7.png" alt="image" /></div>
            <div className="shape13"><img src="/images/shape/shape13.png" alt="image" /></div>
        </div>
    );
}

export default StartProjectWithUs;