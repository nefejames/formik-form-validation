import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./SignInForm.scss";

const signInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched } = formik;
        return (
          <div className="container">
            <h1>Sign in to continue</h1>
            <Form>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div>

              <div className="form-row">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
              </div>

              <button type="submit">Sign In</button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
