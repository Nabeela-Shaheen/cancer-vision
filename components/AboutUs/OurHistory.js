import React from 'react';

const OurHistory = () => {
    return (
        <div className="history-area ptb-100 bg-f9f9f9">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our History</span>
                    <h2>History Begins In 2023</h2>
                </div>

                <ol className="timeline history-timeline">
                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2023</span>
                            June 10
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>Ressearch & Literature Review</h3>
                                        <p>The foundation of our project began with thorough research. We studied the prevalence and impact of skin cancer globally, understanding the urgent need for early detection solutions. This phase involved consulting with medical professionals, reviewing epidemiological data, and identifying the key challenges in current detection methods.</p>
                                        <p>To build a solid theoretical base, we conducted an extensive literature review. We explored existing technologies, methods, and algorithms used in skin cancer detection. This review helped us understand the strengths and limitations of current solutions, guiding us in identifying opportunities for innovation.</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src="/images/history/history-img1.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2023</span>
                            July 14
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>Technology Selection</h3>
                                        <p>With insights from our research and literature review, we moved on to selecting the appropriate technologies. We chose Convolutional Neural Networks (CNN) for their proven effectiveness in image analysis and deep learning. Our tech stack also included Python for programming, TensorFlow for model building, and React for our user interface.</p>
                                        <h3>Data Collection</h3>
                                        <p>A critical aspect of our project was collecting a comprehensive dataset. We sourced thousands of images of skin lesions from reputable medical databases and collaborated with dermatologists to ensure our data was diverse and representative of different skin conditions.</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src="/images/history/history-img2.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2023</span>
                            September 25
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>Data Preprocessing</h3>
                                        <p>To ensure the quality and consistency of our data, we performed extensive data preprocessing. This involved cleaning the data, augmenting images to increase dataset size, normalizing pixel values, and labeling the images accurately. This step was crucial in preparing the data for effective model training.</p>
                                        <h3>Model Training</h3>
                                        <p>Using our preprocessed data, we trained our CNN model. This phase included selecting the appropriate architecture, tuning hyperparameters, and employing techniques like cross-validation to improve model accuracy. We iteratively trained and refined our model to achieve the highest possible performance.</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src="/images/history/history-img3.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2023</span>
                            December 10
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>UI Design and Development</h3>
                                        <p>Parallel to model training, we designed and developed a user-friendly interface. Our goal was to create an intuitive and accessible application that guides users through the skin cancer detection process. We focused on clean design, ease of navigation, and incorporating educational resources.</p>
                                        <h3>Model Integration</h3>
                                        <p>Once the model was trained, we integrated it into our application. This involved setting up APIs to facilitate communication between the frontend and the backend, ensuring smooth and efficient data flow and real-time analysis capabilities.</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src="/images/history/history-img4.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2024</span>
                            June 10
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>Testing</h3>
                                        <p> Comprehensive testing was conducted to ensure the reliability and accuracy of our application. We performed unit testing, integration testing, and user acceptance testing. Feedback from beta testers, including medical professionals, helped us identify and fix any issues.</p>
                                        <h3>Deployment
                                        </h3>
                                        <p>Finally, we deployed Cancer Vision to the cloud, making it accessible to users worldwide. We chose a scalable and secure hosting environment to handle user data with the utmost confidentiality and ensure seamless performance.</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src="/images/history/history-img4.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default OurHistory;