import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SEOAnalysisForm from '../components/Common/SEOAnalysisForm';
import Pricing from '../components/Common/Pricing';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';

const SingleServices = () => {
    return (
        <>
			<NavbarStyleTwo />
            
			<PageBanner 
                pageTitle="Services Details" 
            /> 

            <div className="overview-area ptb-100">
                <div className="container">
                    <div className="overview-box">
                        <div className="overview-content">
                            <div className="content">
                                <span className="sub-title">Digital Marketing</span>
                                <h2>Creative Solutions, Creative Results</h2>
                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>
                                <div className="features-text">
                                    <h4>Core Development</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                </div>
                                <div className="features-text">
                                    <h4>Define Your Choices</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                </div>
                            </div>
                        </div>

                        <div className="overview-image">
                            <div className="image">
                                <img src="/images/services/services-img1.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="overview-image">
                            <div className="image">
                                <img src="/images/services/services-img2.png" alt="image" />
                            </div>
                        </div>
                        
                        <div className="overview-content">
                            <div className="content right-content">
                                <span className="sub-title">Social Media Marketing</span>
                                <h2>Solving Problems, Building Brands</h2>
                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>
                                <ul className="features-list">
                                    <li><span><i className='bx bx-check'></i> Recommender Systems</span></li>
                                    <li><span><i className='bx bx-check'></i> Demand Prediction</span></li>
                                    <li><span><i className='bx bx-check'></i> Omnichannel Analytics</span></li>
                                    <li><span><i className='bx bx-check'></i> Lead Generation</span></li>
                                    <li><span><i className='bx bx-check'></i> Dedicated Developers</span></li>
                                    <li><span><i className='bx bx-check'></i> 24/7 Support</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <SEOAnalysisForm />
			  
			<Footer />
		</>
    )
}

export default SingleServices;