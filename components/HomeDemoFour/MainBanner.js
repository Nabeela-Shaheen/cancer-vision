import React from 'react';

const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="container">
                <div className="banner-area-content">
                    <h1>Digital Marketing Solution</h1>
                    <p>Get all kinds of hi-tech decesion making consulting services using Artificial Intelligence and Machine Learning from one umbrella.</p>

                    <form>
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="website" placeholder="Your Website URL" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="form-group">
                                    <button type="submit" className="default-btn">Get Your Report</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <img src="/images/banner-img5.png" alt="image" />
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
    )
}

export default MainBanner;