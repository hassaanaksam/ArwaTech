import React from 'react';
import { Form, Field, Formik } from "formik";
import axios from 'axios';
import { useRef } from 'react';
import Swal from 'sweetalert2';

export default function Singup() {

  const formRef = useRef();

  const initialValues = {
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    linkedinLink: "",
    contactNumber: "",
    description: "",
    skills: "",
    startDate: "",
    endDate: "",
    image: null,
  };

  const handleSubmit = (values) => {

    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    axios.post("http://localhost:5000/employee/employee", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(res => {
      console.log('Form submitted successfully', res.data);
      Swal.fire({
        title: 'Created successfully',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        confirmButtonColor: 'Black'
      }).then(() => {
        formRef.current.reset();
      })
    })
      .catch(error => {
        console.error('Form submission error', error);
      });
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} >
        <div className='container d-flex align-items-center justify-content-center'>
          <div className='card p-4 w-50 my-3 mx-auto' style={{ width: '600px' }}>
            <h2 className="mb-8 text-center">Sign Up</h2>
            <Form ref={formRef}>

              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name:</label>
                <Field name="firstName" type="text" className="form-control" id="firstName" placeholder='Enter firstName' />
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name:</label>
                <Field name="lastName" type="text" className="form-control" id="lastName" placeholder='Enter lastName' />
              </div>

              <div className="mb-3">
                <label htmlFor="role" className="form-label">Role:</label>
                <Field name="role" type="text" className="form-control" id="role" placeholder='Enter role' />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <Field name="email" type="text" className="form-control" id="email" placeholder='Enter email' />
              </div>

              <div className="mb-3">
                <label htmlFor="linkedinLink" className="form-label">LinkedIn Link:</label>
                <Field name="linkedinLink" type="text" className="form-control" id="linkedinLink" placeholder='Enter linkedinLink' />
              </div>

              <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
                <Field name="contactNumber" type="text" className="form-control" id="contactNumber" placeholder='Enter contactNumber' />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description:</label>
                <Field name="description" type="text" className="form-control" id="description" placeholder='Enter description' />
              </div>

              <div className="mb-3">
                <label htmlFor="skills" className="form-label">Skills:</label>
                <Field name="skills" type="text" className="form-control" id="skills" placeholder="Enter skills" />
              </div>

              <div className="mb-3">
                <label htmlFor="startDate" className="form-label">Start Date:</label>
                <Field name="startDate" type="date" className="form-control" id="startDate" placeholder="Enter startDate" />
              </div>

              <div className="mb-3">
                <label htmlFor="endDate" className="form-label">End Date:</label>
                <Field name="endDate" type="date" className="form-control" id="endDate" placeholder='Enter endDate' />
              </div>

              <div className="mb-3">
                <Field name="image">
                  {({ field, form }) => (
                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">Image:</label>
                      <input type="file" id="image" name="image" onChange={(event) => {
                          form.setFieldValue("image", event.currentTarget.files[0]);
                        }} className="form-control" />
                    </div>
                  )}
                </Field>
              </div>

              <div className="text-center mb-3">
                <button type="submit" className='btn btn-dark'>Submit</button>
              </div>

            </Form>
          </div>
        </div>
      </Formik>
    </div>
  );
}
