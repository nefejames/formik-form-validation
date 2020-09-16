import React, { Fragment } from "react";
import { Formik } from "formik";

import "./SignInForm.scss";

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  return (
    <Formik
      initialValues={initialValues}
    validate = {values => {
      let errors = {}
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

      if(!values.email){
        errors.email = "Requiredsssss"
      } else if(!regex.test(values.email)){
        errors.email = "Invalid Email"
      }

      if(!values.password){
        errors.password = "Required"
      } else if(values.password.length < 4){
        errors.password = "Password too short"
      }

      return errors
    }}
      onSubmit={(values) => {
        console.log(values);
       
      }}
      
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          dirty,
          isValid
        } = formik;
        return (
          <Fragment>
            <div className="container">
              <h1>Sign in to continue</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email ? "input-error" : null
                    }
                  />
                  {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="form-row">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password ? "input-error" : null
                    }
                  />
                  {errors.password && touched.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>

                <button type="submit" 
                className={isValid ? "" : "disabled-btn"}
               >
                  Sign In</button>
              </form>
            </div>
          </Fragment>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
