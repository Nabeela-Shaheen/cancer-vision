import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import NavbarStyleFive from '../components/_App/NavbarStyleFive';
import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo';

const Team = () => {
    return (
        <>
			{/* <NavbarStyleTwo /> */}
            <NavbarStyleFive />
            
			<PageBanner 
                pageTitle="Team" 
            />  
		<OurTeamStyleTwo />

			<Footer />
		</>
    )
}

export default Team;