import React, { useContext, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { SIGNIN_API } from "../../constants/routing";
import AuthStore from "../../store/AuthStore";

import "./style/Auth.sass";

const Login = () => {
  const history = useHistory();
  const store = useContext(AuthStore);
  const [loginError, setLoginError] = useState("");

  const authorize = values => {
    const { email, password } = values;
    const { setLoggedInUser } = store;

    Axios.post(SIGNIN_API, {
      email,
      password
    })
      .then(result => {
        setLoggedInUser(result.data);
        localStorage.setItem("AlpsUser", JSON.stringify(result.data));
        history.push("/");
      })
      .catch(() => setLoginError("Email или пароль не верны"));
  };

  const validate = values => {
    let errors = {};
    if (!values.email) {
      errors.email = "Необходимо заполнить email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Неправильный формат электронной почты";
    }
    return errors;
  };

  return (
    <Card className="auth">
      <div className="card__title">Войти</div>
      <Formik
        initialValues={{ email: "", password: "" }}
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
            <Button type="submit" disabled={isSubmitting}>
              Войти
            </Button>
            {loginError && <div className="auth__error">{loginError}</div>}
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default Login;
