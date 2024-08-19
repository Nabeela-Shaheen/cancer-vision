import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutContentTwo from '../components/AboutUs/AboutContentTwo';
import OurHistory from '../components/AboutUs/OurHistory';
import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/_App/Footer';
import AboutSection from '../components/HomeDemoOne/AboutSection';

const AboutUs = () => {
    return (
        <>
			<NavbarStyleTwo />
            
			<PageBanner 
                pageTitle="About Us" 
            />  
            
            <AboutContentTwo />
            <AboutSection />

            <OurHistory />

            <div className="container">

                <h6 style={{textAlign: 'center'}}>Join us in our mission to make early detection of skin cancer accessible to everyone. With Cancer Vision, you're not just using an app; you're becoming part of a community dedicated to better skin health.</h6>

            </div >

            <OurTeamStyleTwo />

            <TestimonialStyleTwo />

            <Partner />
		  
			<Footer />
		</>
    )
}

export default AboutUs;