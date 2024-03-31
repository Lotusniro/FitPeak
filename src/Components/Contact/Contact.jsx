import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Contact.css';

//form validation using Yup
//formik used for form handling such as form submission, validation, and error messages
//yup is used for form validation such as required fields, email validation, and minimum length of the input fields
//initialValues is used to set the initial values of the form fields

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    message: Yup.string()
      .min(10, 'Must be at least 10 characters')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log('Form submitted:', values);
      setSubmitting(false);
      resetForm();
    },
  });

  return (
    <div className="contact-form-container">
      <form onSubmit={formik.handleSubmit} className="contact-form">
        <div className="form-group">
          <p className='h333'>Let us know what you think</p>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            required
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            required
            rows="8"
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
        </div>
        <button  type="submit" disabled={
          formik.isSubmitting
        }>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;

