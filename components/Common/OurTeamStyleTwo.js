import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 4,
        }
    }
};

const OurTeamStyleTwo = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="team-area-two ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our Team</span>
                    {/* <h2>We Help to Acheive Your Business Goal</h2> */}
                    <p>At Cancer Vision, we're dedicated to leveraging the latest technology to enhance healthcare and improve lives. As a Final Year Project (FYP) team, we've poured our passion, expertise, and innovation into developing a cutting-edge application designed to revolutionize skin cancer detection and management.</p>
                    
                </div>

                {display ? <OwlCarousel 
                    className="team-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-team-member">
                        <div className="image">
                            <Image  width={600} height={600} className='teamImage'    src="/images/team/team-img1.jpg" alt="team-image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="content">
                            <h3>Ms. Shagufta Aftab</h3>
                            <span>Supervisor,</span>
                            <span>Lecturer  FCIT, INDUS University</span>
                            <i className="flaticon-share-icon"></i>
                        </div>
                    </div>

                    <div className="single-team-member">
                        <div className="image">
                            <Image  width={600} height={600} className='teamImage' src="/images/team/team-img2.jpg" alt="team-image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="content">
                        <h3>Mr. Mushtaher Uddin </h3>
                            <span>Co Supervisor, </span>
                            <span>Lecturer  FCIT, INDUS University</span>
                            <i className="flaticon-share-icon"></i>
                        </div>
                    </div>

                    <div className="single-team-member">
                        <div className="image">
                            <Image  width={600} height={600} className='teamImage' src="/images/team/team-img3.jpg" alt="team-image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="content">
                            <h3>Nabeela Shaheen </h3>
                            <span>Software Engnineering Student</span>
                            <span>BSSE FCIT, INDUS University</span>
                            <i className="flaticon-share-icon"></i>
                        </div>
                    </div>

                    <div className="single-team-member">
                        <div className="image">
                            <Image  width={600} height={600} className='teamImage' src="/images/team/team-img4.jpg" alt="team-image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="content">
                            <h3>Aliza Aimen</h3>
                            <span>Software Engnineering Student</span>
                            <span>BSSE FCIT, INDUS University</span>
                            <i className="flaticon-share-icon"></i>
                        </div>
                    </div>

                    <div className="single-team-member">
                        <div className="image">
                            <Image  width={600} height={600} className='teamImage' src="/images/team/team-img5.jpg" alt="team-image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="content">
                            <h3>Ali Abbas</h3>
                            <span>Software Engnineering Student</span>
                            <span>BSSE FCIT, INDUS University</span>
                            <i className="flaticon-share-icon"></i>
                        </div>
                    </div>

                </OwlCarousel> : ''}
            </div>

            <div className="shape17">
                <img src="/images/shape/shape17.png" alt="image" />
            </div>
        </div>
    )
}

export default OurTeamStyleTwo;