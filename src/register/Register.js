import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import { TextField } from "formik-material-ui";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import "./Register.css";

const initialValues = {
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  role: ["user"],
  password: "",
  confirmPassword: "",
};
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Enter First Name"),
  lastName: Yup.string().required("Enter Last Name"),
  dob: Yup.string().required("Enter Date of Birth Name"),
  email: Yup.string()
    .email("Enter e-Mail Name")
    .required("Pls enter valid email address"),
  userName: Yup.string().required("Enter User Name"),
  password: Yup.string().required("Enter password"),
  confirmPassword: Yup.string().oneOf([
    Yup.ref("password"),
    null,
    "Password should match",
  ]),
});
const submitForm = (values, actions) => {
  console.log("Values", values);
};
const RegistrationForm = (props) => (
  <div className="container">
    <fieldset>
      <legend>Register</legend>
      <Form>
        <div className="row justify-content-start">
          <div className="col-2 text-center p-3">
            <Field
              component={TextField}
              name="firstName"
              label="First Name"
              type="text"
            />
          </div>
          <div className="col-2 text-center p-3">
            <Field
              component={TextField}
              name="lastName"
              label="Last Name"
              type="text"
            />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-2 p-3">
            <Field
              component={TextField}
              name="dob"
              type="date"
              label="Date Of Birth"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="col-lg-2 p-3">
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
            />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-2 p-3">
            <Field
              component={TextField}
              name="username"
              type="text"
              label="User Name"
            />
          </div>
          <div className="col-lg-4 p-3">
            <div id="checkbox-group">Role</div>
            <div className="row">
              <div className="col-lg-2">
                <label className="p3">
                  <Field type="checkbox" name="role" value="user" />
                  User
                </label>
              </div>
              <div className="col-lg-2">
                <label className="p3">
                  <Field type="checkbox" name="role" value="admin" />
                  Admin
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-2 text-center p-3">
            <Field
              component={TextField}
              name="password"
              label="Password"
              type="password"
            />
          </div>
          <div className="col-2 text-center p-3">
            <Field
              component={TextField}
              name="confirmPassword"
              label="Confirm Password"
              type="password"
            />
          </div>
        </div>
        <div className="row">{props.isSubmitting && <LinearProgress />}</div>
        <div className="row justify-content-start">
          <div className="col-6 p-3 text-center">
            <Button
              variant="contained"
              color="primary"
              disabled={props.isSubmitting}
              onClick={props.submitForm}
              className="register__btn"
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </fieldset>
  </div>
);

const Register = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
        component={RegistrationForm}
      ></Formik>
    </div>
  );
};

export default Register;
