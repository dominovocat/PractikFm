import { Form, Formik } from "formik";
import React from "react";
import InputWrapper from "../InputWrapper";
import styles from "./SignUpForm.module.scss";
import { SIGN_IN_SCHEMA } from "../../../utils/schemasValidation";

const initialValues = {
  firstName:'',
  lastName:'',
  display:'',
  email: "",
  password: "",
};

const SignUpForm = (props) => {
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
          <Form className={styles.AllIn}>
            <InputWrapper name="firstName" placeholder="First Name" />
            <InputWrapper name="lastName" placeholder="Last Name" />
            <InputWrapper name="display" placeholder="Display Name" />
            <InputWrapper name="email" placeholder="Email" />
            <InputWrapper
              name="password"
              type="password"
              placeholder="Password"
            />
            <InputWrapper
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <input className={styles.Create} type="submit" value="Create Account" />
            <label className={styles.label}>
              <radio>Join As a Buyer</radio>
              <radio>Join As a Creativ or Marketplace Seller</radio>
            </label>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
