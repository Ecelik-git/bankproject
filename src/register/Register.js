import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import { TextField } from "formik-material-ui";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import "./Register.css";

const initialValues={
    firstName:"",
    lastName:"",
    dob:"",
    email:"",
    role:["user"],
    password:"",
    confirmPassword:"",
};
const validationSchema=Yup.object().shape(
    {
        firstName:Yup.string().required("Enter First Name"),
        lastName:Yup.string().required("Enter Last Name"),
        dob:Yup.string().required("Enter Date of Birth Name"),
        email:Yup.string().email("Enter e-Mail Name").required("Pls enter valid email address"),
        userName:Yup.string().required("Enter User Name"),
        password:Yup.string().required("Enter password"),
        confirmPassword:Yup.string().oneOf([
            Yup.ref("password"),null,"Password should match"]
        )


    }
);

const RegistrationForm=(props)=>(
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
                        type="text">
​
                        </Field>
                    </div>
                    <div className="col-2 text-center p-3"></div>
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
            component={RegistrationForm}></Formik>
        </div>
    )
};

export default Register;