import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/router';
import { Modal, Button, Form } from 'react-bootstrap';
import jsPDF from 'jspdf';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',

  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 400,
  height: 300,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};



const ImageUploader = () => {
  const [result, setResult] = useState(null);
  const [files, setFiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.png'],
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  // console.log(files, "filesfilesfiles");

  const onSubmit = useCallback(async (acceptedFiles) => {
    if (files.length === 0) {
      console.warn('No files selected for upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', files[0]);

    try {
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
      console.error('Error uploading image:', error);
    }
  }, [files]);

  const handleModalSubmit = async () => {
    // Validate user input
    if (!name || !age || !phoneNumber) {
      alert('Please fill in all fields.');
      return;
    }
    // Convert the image to base64
    // const imageBase64 = await imageToBase64(files[0].preview);

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

  return (
    <>

      <section className="container">
        <div {...getRootProps({ className: 'dropzone' })} style={dropzoneStyle} >
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside style={thumbsContainer}>
          {thumbs}
        </aside>
      </section>
      {/* <div>
                <div {...getRootProps()} style={dropzoneStyle}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop an image here, or click to select one</p>
                </div>
            </div> */}
      <button className='default-btn' onClick={onSubmit} disabled={files.length === 0}>Upload</button>
      <button className='default-btn' style={{ marginLeft: '10px' }} onClick={() => setIsModalOpen(true)} disabled={files.length === 0}>
        Generate Report
      </button>
      {/* <button onClick={onsubmit}>Upload</button> */}

      <h5 className='mt-3'>result: {result}</h5>




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
    </>
  );
};

const dropzoneStyle = {
  border: '2px dashed #ccc',
  borderRadius: '4px',
  padding: '40px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default ImageUploader;
