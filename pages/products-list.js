import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import ProductsCard from '../components/Products/ProductsCard';
import Footer from '../components/_App/Footer';

const ProductsList = () => {
    return (
        <>
			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="Products List" 
            />  
            
            <ProductsCard />
		  
			<Footer />
		</>
    )
}

export default ProductsList;