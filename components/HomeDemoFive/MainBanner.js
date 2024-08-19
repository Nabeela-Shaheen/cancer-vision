import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
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

const MainBanner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return <>
        {display ? <OwlCarousel 
            className="home-slides-two owl-carousel owl-theme"
            {...options}
        >
            <div className="banner-section">
                <div className="container">
                    <div className="home-content">
                        <img src="/images/banner-img6.png" alt="image" />
                        <span className="sub-title">Digital Marketing</span>
                        <h1>Boots Your Website Traffic</h1>
                        <p>Get all kinds of hi-tech decesion making consulting services using Artificial Intelligence and Machine Learning from one umbrella.</p>

                        <Link href="/about-us-1" className="default-btn">
                            Learn More
                        </Link>
                    </div>
                </div>

                <div className="shape2"><img src="/images/shape/shape2.png" alt="image" /></div>
                <div className="shape3"><img src="/images/shape/shape3.png" alt="image" /></div>
                <div className="shape5"><img src="/images/shape/shape5.png" alt="image" /></div>
                <div className="shape6"><img src="/images/shape/shape6.png" alt="image" /></div>
                <div className="shape7"><img src="/images/shape/shape7.png" alt="image" /></div>
                <div className="shape13"><img src="/images/shape/shape13.png" alt="image" /></div>
                <div className="shape8"><img src="/images/shape/shape8.png" alt="image" /></div>
            </div>

            <div className="banner-section">
                <div className="container">
                    <div className="home-content">
                        <img src="/images/banner-img7.png" alt="image" />
                        <span className="sub-title">SEO Marketing</span>
                        <h1>Digital Marketing Specialists</h1>
                        <p>Get all kinds of hi-tech decesion making consulting services using Artificial Intelligence and Machine Learning from one umbrella.</p>
                        
                        <Link href="/about-us-1" className="default-btn">
                            Learn More
                        </Link>
                    </div>
                </div>

                <div className="shape2"><img src="/images/shape/shape2.png" alt="image" /></div>
                <div className="shape3"><img src="/images/shape/shape3.png" alt="image" /></div>
                <div className="shape5"><img src="/images/shape/shape5.png" alt="image" /></div>
                <div className="shape6"><img src="/images/shape/shape6.png" alt="image" /></div>
                <div className="shape7"><img src="/images/shape/shape7.png" alt="image" /></div>
                <div className="shape13"><img src="/images/shape/shape13.png" alt="image" /></div>
                <div className="shape8"><img src="/images/shape/shape8.png" alt="image" /></div>
            </div>
        </OwlCarousel> : ''}
    </>;
}

export default MainBanner;