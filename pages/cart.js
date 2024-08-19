import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

const Cart = () => {
    return <>
        <NavbarStyleTwo />

        <PageBanner 
            pageTitle="Cart" 
        />  
        
        <div className="cart-area ptb-100">
            <div className="container">
                <form>
                    <div className="cart-table table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="product-thumbnail">
                                        <Link href="/product-details">

                                            <img src="/images/products/products-img1.jpg" alt="item" />

                                        </Link>
                                    </td>

                                    <td className="product-name">
                                        <Link href="/product-details">
                                            Note Book Mockup
                                        </Link>
                                    </td>

                                    <td className="product-price">
                                        <span className="unit-amount">$250.00</span>
                                    </td>

                                    <td className="product-quantity">
                                        <div className="input-counter">
                                            <input type="number" defaultValue="1" /> 
                                        </div>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">$250.00</span>

                                        <a href="#" className="remove"><i className='bx bx-trash'></i></a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="product-thumbnail">
                                        <Link href="/product-details">

                                            <img src="/images/products/products-img2.jpg" alt="item" />

                                        </Link>
                                    </td>

                                    <td className="product-name">
                                        <a href="#">Motivational Book Cover</a>
                                    </td>

                                    <td className="product-price">
                                        <span className="unit-amount">$200.00</span>
                                    </td>

                                    <td className="product-quantity">
                                        <div className="input-counter">
                                            <input type="number" defaultValue="1" /> 
                                        </div>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">$200.00</span>

                                        <a href="#" className="remove"><i className='bx bx-trash'></i></a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="product-thumbnail">
                                        <Link href="/product-details">

                                            <img src="/images/products/products-img3.jpg" alt="item" />

                                        </Link>
                                    </td>

                                    <td className="product-name">
                                        <a href="#">Book Cover Softcover</a>
                                    </td>

                                    <td className="product-price">
                                        <span className="unit-amount">$200.00</span>
                                    </td>

                                    <td className="product-quantity">
                                        <div className="input-counter">
                                            <input type="number" defaultValue="1" /> 
                                        </div>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">$200.00</span>

                                        <a href="#" className="remove"><i className='bx bx-trash'></i></a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="product-thumbnail">
                                        <Link href="/product-details">

                                            <img src="/images/products/products-img4.jpg" alt="item" />

                                        </Link>
                                    </td>

                                    <td className="product-name">
                                        <a href="#">Stop and Take a Second</a>
                                    </td>

                                    <td className="product-price">
                                        <span className="unit-amount">$150.00</span>
                                    </td>

                                    <td className="product-quantity">
                                        <div className="input-counter">
                                            <input type="number" defaultValue="1" /> 
                                        </div>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">$150.00</span>
                                        <a href="#" className="remove"><i className='bx bx-trash'></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="cart-buttons">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-sm-7 col-md-7">
                                <div className="shopping-coupon-code">
                                    <input type="text" className="form-control" placeholder="Coupon code" name="coupon-code" id="coupon-code" />
                                    <button type="submit">Apply Coupon</button>
                                </div>
                            </div>

                            <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                                <a href="#" className="default-btn">Update Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="cart-totals">
                        <h3>Cart Totals</h3>

                        <ul>
                            <li>Subtotal <span>$800.00</span></li>
                            <li>Shipping <span>$30.00</span></li>
                            <li>Total <span>$830.00</span></li>
                        </ul>

                        <a href="#" className="default-btn">Proceed to Checkout</a>
                    </div>
                </form>
            </div>
        </div>
      
        <Footer />
    </>;
}

export default Cart;