import React, { useRef, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import jsPDF from 'jspdf';
const CameraComponent = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [result, setResult] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const stopCamera = () => {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null;
    };

    const capturePhoto = async () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Set the canvas dimensions to match the video stream
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;

        // Draw the current frame from the video stream onto the canvas
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        // Convert the canvas content to a Blob (binary data)
        return new Promise(resolve => {
            canvas.toBlob(blob => resolve(blob), 'image/png');
        });
    };

    const sendPhotoToAPI = async (blob) => {
        try {
            const formData = new FormData();
            formData.append('file', blob, 'captured_photo.png');

            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                body: formData,
            });

            if (response) {
                const responseData = await response.json();
                console.log(responseData);
                // Access the data property in the response
                const { data } = responseData;

                console.log('Response Data:', data);

                // Now you can access specific properties like filename and prediction
                if (data && data.length > 0) {
                    const { filename, prediction } = data[0];
                    setResult(prediction);
                    console.log('Filename:', filename);
                    console.log('Prediction:', prediction);
                }
                console.log('Photo uploaded successfully');
            } else {
                console.error('Failed to upload photo');
            }
        } catch (error) {
            console.error('Error uploading photo:', error);
        }
    };

    const handleModalSubmit = async() => {
        // Validate user input
        if (!name || !age || !phoneNumber) {
          alert('Please fill in all fields.');
          return;
        }
    
        const file = files[0];
        let base64Data = '';
        if (file) {
          // Create a promise to wait for FileReader to complete
          const readFileAsDataURL = (file) => {
            return new Promise((resolve) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                base64Data = reader.result;
                resolve(base64Data);
              };
              reader.readAsDataURL(file);
            });
          };
      
          // Wait for FileReader to complete
          base64Data = await readFileAsDataURL(file);
        }
      
        console.log('Base64 Data:', base64Data);
      
      
    // Generate PDF
  
    const pdf = new jsPDF();

   
  
    // Add title
    pdf.setFontSize(16);
    pdf.text('Test Report', 90, 10);

        // Add date
        const currentDate = new Date().toLocaleDateString();
        pdf.setFontSize(10);
        pdf.text(`Date: ${currentDate}`, 150, 10);
  
    // Add user data
    pdf.setFontSize(12);
    pdf.text(`Name: ${name}`, 20, 20);
    pdf.text(`Age: ${age}`, 20, 30);
    pdf.text(`Phone Number: ${phoneNumber}`, 20, 40);
    pdf.text(`Result: ${result}`, 20, 50);
    
    pdf.text(`- - - - - - - - - - - - -- - - - -  - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - -- - - - -  - - - - - - - - - - - - - - - -  `, 10, 60);
    pdf.text(`Image:`, 20, 70);
  
    // Add image
    if (base64Data) {
      pdf.addImage(base64Data, 'PNG', 20, 80, 120, 120);
    }
  

  
    // Add footer
    pdf.setFontSize(8);
    pdf.text('This is not a final result. Please consult with a doctor.', 90, 210, { align: 'center' });
  
    pdf.save('report.pdf');
  
        setIsModalOpen(false);
      };

    const handleCapture = async () => {
        const blob = await capturePhoto();
        setCapturedPhoto(URL.createObjectURL(blob)); // Display the captured photo

        // // Send the captured photo to the API
        // sendPhotoToAPI(blob);
    };

    const handleSubmit = async () => {
        // Handle form submission
        const blob = await capturePhoto();
         // Send the captured photo to the API
         sendPhotoToAPI(blob);
    }

    return (
        <div>
            <h2>Live Cancer Detection</h2>
            <div className='cameraBtn'>
                <button className='default-btn' style={{ margin: '5px' }} onClick={startCamera}>Start Camera</button>
                <button className='default-btn' style={{ margin: '5px' }} onClick={stopCamera}>Stop Camera</button>
                <button className='default-btn' style={{ margin: '5px' }} onClick={handleCapture}>Capture Photo</button>
                <button className='default-btn' style={{ margin: '5px' }} onClick={handleSubmit}>Submit</button>
                <button className='default-btn' style={{ margin: '5px' }} onClick={() => setIsModalOpen(true)} 
                // disabled={files.length === 0}
                >
        Generate Report
      </button>
            </div>
         <div className='cameraLive'>
         <div>
           <video ref={videoRef} className='cameraVideo'
            // width="640" height="480" style={{margin : '10px'}} 
             autoPlay playsInline />
            <canvas ref={canvasRef} style={{ display: 'none' }} />
           </div>
            <div>
            {capturedPhoto && (
                <div>
                    <h3>Captured Photo:</h3>
                    <img src={capturedPhoto} alt="Captured" />
                    <h5>Result: {result}</h5> 
                </div>
            )}
            </div>
         </div>

<Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Generate Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalSubmit}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default CameraComponent;
