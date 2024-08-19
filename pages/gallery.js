import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Lightbox from 'react-image-lightbox';

const images = [
    ('images/gallery/gallery-img1.jpg'),
    ('images/gallery/gallery-img2.jpg'),
    ('images/gallery/gallery-img3.jpg'),
    ('images/gallery/gallery-img4.jpg'),
    ('images/gallery/gallery-img5.jpg'),
    ('images/gallery/gallery-img6.jpg'),
    ('images/gallery/gallery-img7.jpg'),
    ('images/gallery/gallery-img8.jpg'),
    ('images/gallery/gallery-img9.jpg'),
];

const Gallery = () => {

    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <>
			<NavbarStyleTwo />
            
			<PageBanner 
                pageTitle="Gallery" 
            />  
		 
            <div className="gallery-area pt-100 pb-70">
                {/* Lightbox */}
                {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpenImage(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn" 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
                                >
                                    <img src="/images/gallery/gallery-img1.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(1);}}
                                >
                                    <img src="/images/gallery/gallery-img2.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(2);}}
                                >
                                    <img src="/images/gallery/gallery-img3.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(3);}}
                                >
                                    <img src="/images/gallery/gallery-img4.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(4);}}
                                >
                                    <img src="/images/gallery/gallery-img5.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(5);}}
                                >
                                    <img src="/images/gallery/gallery-img6.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(6);}}
                                >
                                    <img src="/images/gallery/gallery-img7.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(7);}}
                                >
                                    <img src="/images/gallery/gallery-img8.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                >
                                    <img src="/images/gallery/gallery-img9.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</>
    )
}

export default Gallery;