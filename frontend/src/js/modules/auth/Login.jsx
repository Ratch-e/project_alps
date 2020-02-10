import React, { useContext, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { ErrorMessage, useFormik } from "formik";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { SIGNIN_API } from "../../constants/routing";
import AuthStore from "../../store/AuthStore";

import "./auth.sass";

const Login = () => {
  const history = useHistory();
  const store = useContext(AuthStore);
  const [loginError, setLoginError] = useState("");

  const validate = values => {
    let errors = {};
    if (!values.email) {
      errors.email = "Необходимо заполнить email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Неправильный формат электронной почты";
    }
    return errors;
  };

  const authorize = values => {
    const { email, password } = values;
    const { setLoggedInUser } = store;

    Axios.post(SIGNIN_API, {
      email,
      password,
    })
      .then(result => {
        setLoggedInUser(result.data);
        localStorage.setItem("AlpsUser", JSON.stringify(result.data));
        history.push("/");
      })
      .catch(() => setLoginError("Email или пароль не верны"));
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: validate,
    validateOnChange: false,
    onSubmit: authorize,
  });

  return (
    <Card className="auth">
      <div className="card__title">Войти</div>
      <form onSubmit={formik.handleSubmit}>
        <label className="auth__field">
          Email
          <input
            autoComplete="off"
            className="auth__input"
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <label className="auth__field">
          Пароль
          <input
            autoComplete="off"
            className="auth__input"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <Button type="submit" disabled={formik.isSubmitting}>
          Войти
        </Button>
        {loginError && <div className="auth__error">{loginError}</div>}
      </form>
    </Card>
  );
};

export default Login;
