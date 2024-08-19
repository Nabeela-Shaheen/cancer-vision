import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import ProductsDetailsContent from '../components/ProductsDetails/ProductsDetailsContent';

const ProductsDetails = () => {
    return (
        <>
			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="Products Details" 
            />  

            <ProductsDetailsContent />
            
			<Footer />
		</>
    )
}

export default ProductsDetails;