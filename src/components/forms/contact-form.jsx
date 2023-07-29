import React from "react";
import { useFormik } from "formik";
// internal
import { contact_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";
import NiceSelect from "@ui/niceSelect";

const ContactForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        company: "",
        msg: "",
      },
      validationSchema: contact_schema,
      onSubmit: (values, { resetForm }) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          name: values?.name,
          phone: values?.phone,
          email: values?.email,
          message: values?.msg,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://us-central1-aroksetx-13cc6.cloudfunctions.net/app/ready2-air",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => resetForm())
          .catch((error) => resetForm());
      },
    });

  const selectHandler = (e) => {};
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field">
            <input
              name="name"
              defaultValue={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Your Name"
              id="name"
            />
            <i className="fas fa-user"></i>
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field">
            <input
              name="email"
              defaultValue={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Email Adress"
              id="email"
            />
            <i className="fas fa-envelope"></i>
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field">
            <input
              name="phone"
              defaultValue={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Phone"
              id="phone"
            />
            <i className="fas fa-phone-alt"></i>
            {touched.phone && <ErrorMsg error={errors.phone} />}
          </div>
        </div>

        <div className="col-xxl-12 col-xl-12 col-lg-12">
          <div className="single-input-field textarea">
            <textarea
              name="msg"
              rows="10"
              cols="10"
              defaultValue={values.msg}
              onChange={handleChange}
              onBlur={handleBlur}
              id="msg"
              placeholder="Write Massage"
            ></textarea>
            <i className="fas fa-edit"></i>
            {touched.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
        <div className="col-xxl-12 col-xl-12">
          <button type="submit" className="fill-btn clip-btn">
            Send a message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
