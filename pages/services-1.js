import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import ServicesCard from '../components/Common/ServicesCard';

const Services = () => {
    return <>
        <NavbarStyleTwo />
        
        <PageBanner 
            pageTitle="Services" 
        />  
         
         <ServicesCard />

        <Footer />
    </>;
}

export default Services;