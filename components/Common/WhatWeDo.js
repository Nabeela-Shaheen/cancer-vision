import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const WhatWeDo = () => {
    return (
        <div className="what-we-do-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="what-we-do-content">
                            <span className="sub-title">What We Do</span>
                            <h2>We Help to Dignose Skin Cancer & Desieas with latest Technology</h2>
                            <p>At Cancer Vision, our mission is to leverage advanced technology to provide early and accurate detection of skin cancer and other skin conditions. Our app empowers users with the tools and knowledge they need to take proactive steps towards better skin health.</p>
                            <p>Our sophisticated algorithms and vast database of skin images allow us to deliver highly accurate results, providing peace of mind and actionable insights.</p>
                            <div className="skills-item">
                                <div className="skills-header">
                                    <h4 className="skills-title">Cancer Vision Detection Accuracy Upto</h4>
                                    <div className="skills-percentage">
                                        <div className="count-box">92%</div>
                                    </div>
                                </div>
                                <div className="skills-bar">
                                    <div className="bar-inner"><div className="bar progress-line" data-width="90"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="what-we-do-content-accordion">
                            <p>Your health is our top priority, and we are committed to providing you with the most accurate and reliable skin cancer detection available. However, it is crucial to consult with your doctor or a qualified healthcare professional for a thorough examination and personalized medical advice. Always seek professional medical guidance to ensure the best possible care.</p>
                            <Accordion allowZeroExpanded preExpanded={['a']}>
                                <AccordionItem uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                            How Can You Find Cancer Detection?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Our app makes it simple to detect potential skin cancer. Just follow these steps:
                                            



                                        </p>
                                        <ol>
                                            <li>Upload an Image: Take a clear photo of the suspicious skin area using your smartphone.</li>
                                            <li>Get Instant Analysis: Our Convolutional Neural Network (CNN) technology analyzes the image and data in real-time, comparing it against thousands of known cases.</li>
                                            <li>Receive Detailed Report: Obtain a comprehensive report with findings and recommendations for further action if necessary.</li>
                                        </ol>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                               what is purpose of this app ?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>The purpose of Cancer Vision is to empower individuals with the ability to detect skin cancer and other skin diseases early. Early detection is crucial for successful treatment and better outcomes. Our app provides users with:</p>
                                        <ul>
                                            <li>Accurate Detection: Utilizing cutting-edge technology to identify suspicious lesions.</li>
                                            <li>Educational Resources: Offering information about skin health, cancer types, prevention, and treatment options.</li>
                                            <li>Personalized Care: Facilitating access to healthcare professionals and emergency contacts for prompt follow-up.</li>
                                        </ul>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                            How Can We Ensure Your Result is Accurate?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Our app employs state-of-the-art Convolutional Neural Network (CNN) technology, which has been trained on a vast and diverse dataset of skin images. This ensures a high degree of accuracy in detecting and analyzing skin lesions. Additionally:</p>
                                        <ul>
                                            <li>Continuous Learning: Our AI model continually learns and improves from new data, enhancing its accuracy over time.</li>
                                            <li>Expert Collaboration: We collaborate with dermatologists and oncologists to validate our findings and refine our algorithms.</li>
                                            <li>User Feedback: We incorporate user feedback to improve our services and ensure our app meets the highest standards of accuracy and reliability.</li>
                                        </ul>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;