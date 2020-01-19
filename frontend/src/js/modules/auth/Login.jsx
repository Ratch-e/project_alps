import React, { Component } from "react";
import Axios from "axios";
import { inject, observer } from "mobx-react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { SIGNIN_API } from "../../constants/routing";

import "./style/Auth.sass";

@inject("AuthStore")
@observer
export default class Login extends Component {
  state = {
    loginError: "",
  };

  removeErrors = () =>
    this.setState({
      loginError: "",
    });

  authorize = values => {
    const { email, password } = values;
    const { setLoggedInUser } = this.props.AuthStore;

    Axios.post(SIGNIN_API, {
      email,
      password,
    })
      .then(result => {
        setLoggedInUser(result.data);
        localStorage.setItem("AlpsUser", JSON.stringify(result.data));
        this.props.history.push("/");
      })
      .catch(() =>
        this.setState({
          loginError: "Email или пароль не верны.",
        }),
      );
  };

  validate = values => {
    let errors = {};
    if (!values.email) {
      errors.email = "Необходимо заполнить email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Неправильный формат электронной почты";
    }
    return errors;
  };

  render() {
    return (
      <Card className="auth">
        <div className="card__title">Войти</div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={this.validate}
          validateOnChange={false}
          onSubmit={this.authorize}
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
              {this.state.loginError && (
                <div className="auth__error">{this.state.loginError}</div>
              )}
            </Form>
          )}
        </Formik>
      </Card>
    );
  }
}
