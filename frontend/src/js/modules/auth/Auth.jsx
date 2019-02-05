import React, { Component } from 'react';
import Axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { SIGNIN_API } from '../../constants/routing';
import './style/Auth.css';

export default class Auth extends Component {
  authorize = values => {
    const { email, password } = values;
    Axios.post(SIGNIN_API, {
      email,
      password,
    });
  };

  validate = values => {
    let errors = {};
    if (!values.email) {
      errors.email = 'This field is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address format';
    }
    return errors;
  };

  render() {
    return (
      <Card className="auth">
        <Formik 
          initialValues={{ email: '', password: '' }}
          validate={this.validate}
          validateOnChange={false}
          onSubmit={this.authorize}
        >
        {
          ({ handleSubmit, isSubmitting, errors }) => (
            <Form onSubmit={handleSubmit}>
              <label className="auth__field">
                Email
                <Field 
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
                Password
                <Field 
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
              <Button 
                type="submit"
                disabled={isSubmitting}
              >
                Войти
              </Button>
            </Form>
          )
        }
        </Formik>
      </Card>
    );
  }
}
