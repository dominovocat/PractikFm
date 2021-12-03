import { Form, Formik } from "formik";
import React from "react";
import InputWrapper from "../InputWrapper";
import styles from "./SignUpForm.module.scss";
import { SIGN_UP_SCHEMA } from "../../../utils/schemasValidation";

const initialValues = {
  fname: "",
  lname: "",
  display: "",
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
      validationSchema={SIGN_UP_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form className={styles.AllIn}>
            <InputWrapper name="fname" placeholder="First Name" />
            <InputWrapper name="lname" placeholder="Last Name" />
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
            <div className={styles.radio}>
              <input
                type="radio"
                value="radioOne"
                name="choise"
                id="choiseOne"
              ></input>
              <label for="choiseOne">
                <h2>Join As a Buyer</h2>
                <p>
                  I am looking for a Name, Logo or Tagline for my business,
                  brand or product.
                </p>
              </label>
              <input
                type="radio"
                value="radioTwo"
                name="choise"
                id="choiseTwo"
              ></input>
              <label for="choiseTwo">
                <h2>Join As a Creative or Marketplace Seller</h2>
                <p>
                  I plan to submit name ideas, Logo designs or sell names in
                  Domain Marketplace.
                </p>
              </label>
            </div>
            <input
              className={styles.Create}
              type="submit"
              value="Create Account"
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
