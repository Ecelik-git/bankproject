import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import "./Login.css";

const initialValues = {
  userName: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Please enter your username"),
  password: Yup.string().required("Please enter your password"),
});

const submitForm = (values, action) => {
  action.setSubmitting(false);
};

const LoginForm = (props) => (
  <div className="container">
    <fieldset>
      <legend> Login</legend>
      <Form>
        <div className="row justify-content-start">
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              name="userName"
              label="username"
              type="text"
            />
          </div>
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              name="password"
              label="password"
              type="text"
            />
          </div>
          <div className="col-3 text-center p-3">
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

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
        component={LoginForm}
      ></Formik>
    </div>
  );
};

export default Login;
