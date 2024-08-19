import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
    return (
        <div className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        {/* <div className="about-image">
                            <img src="/images/about-img1.jpg" alt="image" />
                        </div> */}
                        <div className="about-content">
                            <div className="content">
                                {/* <span className="sub-title">About Us</span> */}
                                <h2>What We Offer</h2>


                                <ul className="features-list">
                                    <li><i className="flaticon-speed"></i> Advanced Detection Technology: Our app uses state-of-the-art Convolutional Neural Networks (CNN) to analyze skin images, ensuring a high degree of accuracy.</li>
                                    <li><i className="flaticon-speed"></i> Real-Time Analysis: Get instant feedback on your skin lesions, with detailed reports that can be shared with healthcare professionals.</li>
                                    <li><i className="flaticon-speed"></i> Comprehensive Resources: Access a library of educational materials on skin cancer prevention, detection, and treatment.</li>
                                    <li><i className="flaticon-speed"></i> User-Friendly Interface: Designed for individuals of all technological backgrounds, our app guides users effortlessly through the detection process.</li>
                                    <li><i className="flaticon-speed"></i> 24/7 Support: Our dedicated team is always available to assist you, ensuring you have the support you need at any time.</li>
                                </ul>

                                <ul className="funfacts-list">
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-menu-1"></i>
                                            <h3>1</h3>
                                            <p>for Year Completed project</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-web-settings"></i>
                                            <h3>953</h3>
                                            <p>Working hours were spent</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-conversation"></i>
                                            <h3>5</h3>
                                            <p>Expert team members</p>
                                        </div>
                                    </li>
                                </ul>

                                <Link href="/about-us-1" className="default-btn">
                                    More About Us
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                {/* <span className="sub-title">About Us</span> */}
                                <h2>Our Commitment</h2>
                                <p>At Cancer Vision, your health is our top priority. We are dedicated to providing the most accurate and reliable skin cancer detection available. However, we also emphasize the importance of consulting with your doctor or a qualified healthcare professional for a thorough examination and personalized medical advice.
                                    <p>Join us in our mission to make skin cancer detection more accessible and accurate. With Cancer Vision, you have a reliable partner in your journey towards better skin health.</p>
                                </p>

                                <h2>Future Work</h2>

                                <p>Looking ahead, we are committed to expanding the capabilities of Cancer Vision. Our future work includes integrating additional types of skin conditions for detection, enhancing our AI algorithms for even greater accuracy, and developing partnerships with leading healthcare providers to facilitate seamless referrals and follow-up care. We are also exploring the incorporation of augmented reality (AR) features to improve user experience and the potential for wearable technology integration for continuous skin monitoring. Our goal is to stay at the forefront of innovation, ensuring that our users have access to the best tools and resources for their skin health.

                                    Join us in our mission to make skin cancer detection more accessible and accurate. With Cancer Vision, you have a reliable partner in your journey towards better skin health.</p>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;