import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 5,
    items: 1,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ]
};

const MainBanner = () => {
    // Popup Video
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    // Carousel
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return <>
        <div className="home-wrapper-area">
            <div className="container-fluid">
                {display ? <OwlCarousel
                    className="home-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-banner-item">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="banner-content">
                                    <span className="sub-title">Skin Cancer Detection Made Easy</span>
                                    <h3 style={{color:'white'}}>Empowering You with Early Detection and Analysis</h3>
                                    <p>Our revolutionary app uses advanced Convolutional Neural Network (CNN) technology to help you detect and analyze skin cancer with ease and accuracy.</p>
                                    
                                    <ul  className='features-lists' style={{color:'white'}} >
                                      <li style={{color:'white' }}><i className="flaticon-speed"></i><b> Fast and Reliable:</b> Get real-time results and take control of your skin health.</li> 
                                      <li style={{color:'white'}}><i className="flaticon-speed"></i><b>   User-Friendly: </b>Intuitive interface designed for everyone, regardless of technological background.</li> 
                                      <li style={{color:'white'}}><i className="flaticon-speed"></i><b>    Educational Resources:</b> Access a wealth of information on skin cancer, prevention, and treatment.</li> 
                                    </ul>
                                    <div className="btn-box">
                                        <div className="d-flex align-items-center">
                                            <Link href="/contact" className="default-btn">
                                                Get Connect Us
                                            </Link>

                                            <div
                                                onClick={e => { e.preventDefault(); openModal() }}
                                                className="video-btn popup-youtube"
                                            >
                                                <i className="flaticon-play-button"></i> Watch Video
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="banner-image">
                                    <img src="/images/banner-img2.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>


                </OwlCarousel> : ''}
            </div>

            <div className="shape1"><img src="/images/shape/shape1.png" alt="image" /></div>
            <div className="shape2"><img src="/images/shape/shape2.png" alt="image" /></div>
            <div className="shape3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape4"><img src="/images/shape/shape4.png" alt="image" /></div>
            <div className="shape5"><img src="/images/shape/shape5.png" alt="image" /></div>
            <div className="shape6"><img src="/images/shape/shape6.png" alt="image" /></div>
            <div className="shape7"><img src="/images/shape/shape7.png" alt="image" /></div>
            <div className="shape8"><img src="/images/shape/shape8.png" alt="image" /></div>
            <div className="shape13"><img src="/images/shape/shape13.png" alt="image" /></div>
            <div className="shape14"><img src="/images/shape/shape14.png" alt="image" /></div>
        </div>

        {/* If you want to change the video need to update videoID */}
        <ModalVideo
            channel='youtube'
            isOpen={!isOpen}
            videoId='bk7McNUjWgw'
            onClose={() => setIsOpen(!isOpen)}
        />
    </>;
}

export default MainBanner;