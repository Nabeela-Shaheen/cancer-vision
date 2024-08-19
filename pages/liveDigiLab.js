import React from 'react';
import CameraComponent from '../components/Camera';
import PageBanner from '../components/Common/PageBanner';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';
import Footer from '../components/_App/Footer';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';


const options = {
    apiKey: "free", // Get API key: https://www.bytescale.com/get-started
    maxFileCount: 1,
    showFinishButton: true, // Note: You must use 'onUpdate' if you set 'showFinishButton: false' (default).
    styles: {
      colors: {
        primary: "#377dff"
      }
    }
  };

const DigiLab = () => {
    return (
        <>
			<NavbarStyleTwo />
            
			<PageBanner 
                pageTitle="Live Digital Lab" 
            /> 

            <div className="overview-area ptb-100">
                <div className="container">
                <CameraComponent  />
                    {/* <div className="overview-box">
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

                        <h1>Image Uploader with react-dropzone</h1>
      <ImageUploader />

                   
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
                    </div> */}
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
                                <span className="sub-title">SKIN HEALTH SOLUTIONS</span>
                                <h2>Innovating Detection, Empowering Patients</h2>
                                <p>At Cancer Vision, we believe that early detection and personalized care are essential in the fight against skin cancer. Our advanced technology and comprehensive resources are designed to support you every step of the way.</p>
                                <ul className="features-list">
                                    <li><span><i className='bx bx-check'></i> Advanced Detection Algorithms</span></li>
                                    <li><span><i className='bx bx-check'></i>Real-Time Analysis</span></li>
                                    <li><span><i className='bx bx-check'></i> Comprehensive Reporting</span></li>
                                    <li><span><i className='bx bx-check'></i> Educational Resources</span></li>
                                    <li><span><i className='bx bx-check'></i> Personalized Diet Plans</span></li>
                                    <li><span><i className='bx bx-check'></i> Emergency Contacts</span></li>
                                    <li><span><i className='bx bx-check'></i> Secure Data Handling</span></li>
                                    <li><span><i className='bx bx-check'></i> 24/7 Support</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

       

            <StartProjectWithUs />
			  
			<Footer />
		</>
    )
}

export default DigiLab;