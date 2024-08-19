import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ]
};

const TestimonialStyleTwo = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="feedback-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="feedback-image">
                            <img src="/images/feedback-img1.jpg" alt="image" />
                            <img src="/images/feedback-img2.jpg" alt="image" />
                            <img src="/images/feedback-img3.jpg" alt="image" />
                            <img src="/images/feedback-img4.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="feedback-content">
                            <span className="sub-title">Feedback</span>
                            <h2>What Our Users Are Saying?</h2>

                            {display ? <OwlCarousel 
                                className="feedback-slides owl-carousel owl-theme"
                                {...options}
                            > 
                                <div className="single-feedback-item">
                                    <p>"Incredible Accuracy!"
"I was amazed by how accurately Cancer Vision detected my skin lesion. The app's real-time analysis and detailed report helped me take immediate action and consult my dermatologist. Highly recommend!"</p>

                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img src="/images/user1.jpg" alt="image" />
                                            <div className="title">
                                                <h3>Dr. Sami</h3>
                                                <span>MBBS Surgical</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-feedback-item">
                                    <p>"A Lifesaver!"
"Cancer Vision has been a lifesaver. The early detection feature allowed me to catch my skin cancer at an early stage. The educational resources and emergency contacts were incredibly helpful. This app is a must-have for everyone."</p>

                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img src="/images/user2.jpg" alt="image" />
                                            <div className="title">
                                                <h3>Dr. Sarah </h3>
                                                <span>Dermotologist</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-feedback-item">
                                    <p>"Easy to Use!"
"The user-friendly interface made it so easy to upload my images and get a quick analysis. I appreciate the clear guidance and the 24/7 support available. It's reassuring to know that help is just a tap away."</p>

                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img src="/images/user3.jpg" alt="image" />
                                            <div className="title">
                                                <h3>Fahad Ali</h3>
                                                <span>Skin Specialist</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel> : ''}
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape16">
                <img src="/images/shape/shape16.png" alt="image" />
            </div>
        </div>
    )
}

export default TestimonialStyleTwo;