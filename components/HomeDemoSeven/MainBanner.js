import React from 'react';

const MainBanner = () => {
    return (
        <div className="banner-wrapper-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="banner-wrapper-content">
                            <div className="content">
                                <span className="sub-title">Growth Your Business</span>
                                <h1>We Are Full Service SEO Agency</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                
                                <form>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter Website URL" />
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-4 offset-lg-0 offset-md-4">
                                            <button type="submit" className="default-btn">Start Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <div className="banner-wrapper-image">
                            <img src="/images/banner-img8.jpg" alt="image" />
                            <div className="divider"></div>
                        </div>
                    </div>
                </div>
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
    )
}

export default MainBanner;