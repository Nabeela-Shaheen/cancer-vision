import React from 'react';
import Link from 'next/link';

const TopHeader = () => {
    return (
        <header className="top-header-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <ul className="top-header-contact-info">
                            <li><i className='bx bx-phone-call'></i> <a href="tel:+14854560102">+1-485-456-0102</a></li>
                            <li><i className='bx bx-envelope'></i> <a href="mailto:917-2020@lms.indus.edu.pk">917-2020@lms.indus.edu.pk</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="top-header-btn">
                            <Link href="/contact" className="default-btn">
                                Free Site Analysis
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TopHeader;