import React, { useState } from 'react';
import axios from 'axios';
import { server } from '../../global/constants.js';
import { useFormik } from 'formik';

const SmallContactForm = ({ handleToggleSearchModal }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validate = values => {
    let errors = {};
    if (!values.name) {
      errors.name = '⋆Required';
    }
    if (!values.email) {
      errors.email = '⋆Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email format';
    }
    if (!values.message) {
      errors.message = '⋆Required';
    }
    return errors;
  };

  const onSubmit = async (values, onSubmitProps) => {
    const dataToSend = {
      name: values.name,
      email: values.email,
      message: values.message,
    };
    console.log(dataToSend);
    try {
      const { data } = await axios.post(`${server}/contact-2`, dataToSend);
      if (data && data.success) {
        onSubmitProps.resetForm();
        setIsSuccess(true);
        handleToggleSearchModal();
      }
    } catch {
      setIsError(true);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div>
      <form id="contactForm" onSubmit={formik.handleSubmit}>
        {isSuccess ? (
          <div className="alert alert-success" role="alert">
            Message sent successfully
          </div>
        ) : isError ? (
          <div className="alert alert-danger" role="alert">
            Error occured while sending message
          </div>
        ) : null}
        <div className="row">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div
                className="text-light"
                style={{ marginBottom: '-9px', fontSize: '12px' }}
              >
                {formik.errors.name}
              </div>
            ) : null}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Email Address"
              className="form-control"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div
                className="text-light"
                style={{ marginBottom: '-9px', fontSize: '12px' }}
              >
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className="form-group">
            <textarea
              cols="30"
              rows="3"
              placeholder="Message"
              className="form-control"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message ? (
              <div
                className="text-light"
                style={{ marginBottom: '-5px', fontSize: '12px' }}
              >
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <button type="submit" className="default-btn">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default SmallContactForm;
