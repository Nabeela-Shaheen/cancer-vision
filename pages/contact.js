import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
    return (
        <>
			<NavbarStyleTwo />
            
			<PageBanner 
                pageTitle="Contact Us" 
            />

            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className='bx bx-map'></i>
                                </div>
                                <div className="icon">
                                    <i className='bx bx-map'></i>
                                </div>
                                <h3>Our Address</h3>
                                <p>ST-2D, Block-17, Gulshan-e-Iqbal, National Stadium Rd, Karachi,  Sindh</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className='bx bx-phone-call'></i>
                                </div>
                                <div className="icon">
                                    <i className='bx bx-phone-call'></i>
                                </div>
                                <h3>Contact</h3>
                                <p>Mobile: <a href="tel:+923437891268">+92 343 7891269</a></p>
                                <p>E-mail: <a href="mailto:917-2020@lms.indus.edu.pk">917-2020@lms.indus.edu.pk</a></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className='bx bx-time-five'></i>
                                </div>
                                <div className="icon">
                                    <i className='bx bx-time-five'></i>
                                </div>
                                <h3>Hours of Operation</h3>
                                <p>Monday - Friday: 09:00 - 20:00</p>
                                <p>Sunday & Saturday: 10:30 - 22:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            <ContactForm />

            <div id="map">
     
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14476.022119925685!2d67.0798734!3d24.897793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ed99b197d7d%3A0xf77ba28a91dce806!2sIndus%20University!5e0!3m2!1sen!2s!4v1716644484663!5m2!1sen!2s"></iframe>
            </div>
		  
			<Footer />
		</>
    )
}

export default Contact;