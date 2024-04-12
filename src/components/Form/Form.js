import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Form.css";

function Form() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must be characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid Email Address").required("Required"),
      phone: Yup.string()
        .min(20, "Characters Must Be Number")
        .required("Required"),
      text: Yup.string()
        .max(200, "Must be characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : null}
      </div>
      <div className="input-container">
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p>{formik.errors.lastName}</p>
        ) : null}
      </div>
      <div className="input-container">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
      </div>
      <div className="input-container">
        <input
          id="phone"
          name="phone"
          type="phone"
          placeholder="Phone Number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <p>{formik.errors.phone}</p>
        ) : null}
      </div>
      <div className="input-containertext">
        <input
          id="text"
          name="text"
          type="text"
          placeholder="Any Message?"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.text}
        />
        {formik.touched.text && formik.errors.text ? (
          <p>{formik.errors.text}</p>
        ) : null}
      </div>
      <button className="sub" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
