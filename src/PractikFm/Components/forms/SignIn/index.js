import { Form, Formik } from "formik";
import React from "react";
import InputWrapper from "../InputWrapper";
import styles from "./SignInForm.module.scss";
import { SIGN_IN_SCHEMA } from "../../../utils/schemasValidation";

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = (props) => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_IN_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form className={styles.Form}>
            <InputWrapper name="email" placeholder="Email" />
            <InputWrapper
              name="password"
              type="password"
              placeholder="Password"
            />
            <input type="submit" value="Login" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
