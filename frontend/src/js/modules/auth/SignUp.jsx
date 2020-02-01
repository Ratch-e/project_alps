import React, { useContext, useState } from "react";
import Axios from "axios";
import { inject, observer } from "mobx-react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { SIGNUP_API } from "../../constants/routing";
import AuthStore from "../../store/AuthStore";

import "./style/Auth.sass";

const SignUp = ({ history }) => {
  const store = useContext(AuthStore);
  const [signupError, setSignupError] = useState("");

  const authorize = values => {
    const { email, password } = values;
    const { setLoggedInUser } = store;

    Axios.post(SIGNUP_API, {
      email,
      password
    })
      .then(result => {
        setLoggedInUser(result.data);
        localStorage.setItem("AlpsToken", JSON.stringify(result.data));
        history.push("/");
      })
      .catch(() => setSignupError("Такой пользователь уже существует"));
  };

  const validate = values => {
    let errors = {};
    if (!values.email) {
      errors.email = "This field is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address format";
    } else if (values.password !== values.password2) {
      errors.password = "Пароли не совпадают";
    }
    return errors;
  };

  return (
    <Card className="auth">
      <div className="card__title">Регистрация</div>
      <Formik
        initialValues={{ email: "", password: "", password2: "" }}
        validate={validate}
        validateOnChange={false}
        onSubmit={authorize}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label className="auth__field">
              Email
              <Field
                autoComplete="off"
                className="auth__input"
                type="email"
                name="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="auth__error"
              />
            </label>
            <label className="auth__field">
              Пароль
              <Field
                autoComplete="off"
                className="auth__input"
                type="password"
                name="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="auth__error"
              />
            </label>
            <label className="auth__field">
              Повторите пароль
              <Field
                autoComplete="off"
                className="auth__input"
                type="password"
                name="password2"
              />
              <ErrorMessage
                name="password2"
                component="div"
                className="auth__error"
              />
            </label>
            <Button type="submit" disabled={isSubmitting}>
              Зарегистрироваться
            </Button>
            {signupError && <div className="auth__error">{signupError}</div>}
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default SignUp;
