import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';
import ImageUploader from '../components/ImageUploader';
import Footer from '../components/_App/Footer';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';


const options = {
    apiKey: "free", // Get API key: https://www.bytescale.com/get-started
    maxFileCount: 1,
    showFinishButton: true, // Note: You must use 'onUpdate' if you set 'showFinishButton: false' (default).
    styles: {
        colors: {
            primary: "#377dff"
        }
    }
};

const DigiLab = () => {
    return (
        <>
            <NavbarStyleTwo />

            <PageBanner
                pageTitle="Digital Lab"
            />

            <div className="overview-area ptb-100">
                <div className="container">
                    <div className="overview-box">
                        <div className="overview-content">
                            <div className="content">
                                <span className="sub-title">Our app makes it simple to detect potential skin cancer. Just follow these steps:</span>
                                <h2>Creative Solutions, Creative Results</h2>
                                <ul className="features-lists">
                                    <li><i className="flaticon-speed"></i> Upload an Image: Take a clear photo of the suspicious skin area using your smartphone.
                                    </li>
                                    <li><i className="flaticon-speed"></i> Get Instant Analysis: Our Convolutional Neural Network (CNN) technology analyzes the image and data in real-time, comparing it against thousands of known cases.</li>
                                    <li><i className="flaticon-speed"></i> Receive Detailed Report: Obtain a comprehensive report with findings and recommendations for further action if necessary.</li>

                                </ul>

                            </div>
                        </div>

                        <div className="overview-image">

                            <h1>Upload Clear Image</h1>
                            <ImageUploader />

                            {/* <UploadDropzone options={options}
                  onUpdate={({ uploadedFiles }) => console.log(uploadedFiles.map(x => x.fileUrl).join("\n"))}
                  onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
                  width="600px"
                  height="375px" /> */}
                            {/* <div className="image">
                                <img src="/images/services/services-img1.png" alt="image" />
                            </div> */}
                        </div>
                    </div>
                    <div className="overview-box">
                        <div className="overview-image">
                            <div className="image">
                                <img src="/images/services/services-img2.png" alt="image" />
                            </div>
                        </div>

                        <div className="overview-content">
                            <div className="content right-content">
                                <span className="sub-title">SKIN HEALTH SOLUTIONS</span>
                                <h2>Innovating Detection, Empowering Patients</h2>
                                <p>At Cancer Vision, we believe that early detection and personalized care are essential in the fight against skin cancer. Our advanced technology and comprehensive resources are designed to support you every step of the way.</p>
                                <ul className="features-list">
                                    <li><span><i className='bx bx-check'></i> Advanced Detection Algorithms</span></li>
                                    <li><span><i className='bx bx-check'></i>Real-Time Analysis</span></li>
                                    <li><span><i className='bx bx-check'></i> Comprehensive Reporting</span></li>
                                    <li><span><i className='bx bx-check'></i> Educational Resources</span></li>
                                    <li><span><i className='bx bx-check'></i> Personalized Diet Plans</span></li>
                                    <li><span><i className='bx bx-check'></i> Emergency Contacts</span></li>
                                    <li><span><i className='bx bx-check'></i> Secure Data Handling</span></li>
                                    <li><span><i className='bx bx-check'></i> 24/7 Support</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <StartProjectWithUs />



            <Footer />
        </>
    )
}

export default DigiLab;