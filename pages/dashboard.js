import React from 'react';
import CaseStudies from '../components/Common/CaseStudies';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo';
import Partner from '../components/Common/Partner';
import ServicesCard from '../components/Common/ServicesCard';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';
import SubscribeForm from '../components/Common/SubscribeForm';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import WhatWeDo from '../components/Common/WhatWeDo';
import MainBanner from '../components/HomeDemoTwo/MainBanner';
import Footer from '../components/_App/Footer';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';

const DashBoard = () => {


    return (
        <>
            <NavbarStyleTwo />

            <MainBanner />

            {/* <FeaturedService /> */}
            <ServicesCard />

           


            <WhatWeDo />

            <TestimonialStyleTwo />

            {/* <CaseStudies /> */}

            <Partner />

            <OurTeamStyleTwo />

            {/* <Pricing /> */}
            
            <SubscribeForm />

            <StartProjectWithUs />

            {/* <LatestBlogPost /> */}
            
            <Footer />
        </>
    )
}

export default DashBoard;