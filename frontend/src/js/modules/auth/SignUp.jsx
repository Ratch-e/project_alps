import React, { useContext, useState } from 'react';
import Axios from 'axios';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';

import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { SIGNUP_API } from '../../constants/routing';
import AuthStore from '../../store/AuthStore';
import FormInput from '../../components/Form/FormInput/FormInput';

import './auth.sass';

const SignUp = () => {
    const history = useHistory();
    const store = useContext(AuthStore);
    const [signupError, setSignupError] = useState('');

    const authorize = (values) => {
        const { email, password } = values;
        const { setLoggedInUser } = store;

        Axios.post(SIGNUP_API, {
            email,
            password,
        })
            .then((result) => {
                setLoggedInUser(result.data);
                localStorage.setItem('AlpsToken', JSON.stringify(result.data));
                history.push('/');
            })
            .catch(() => setSignupError('Такой пользователь уже существует'));
    };

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'This field is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address format';
        } else if (values.password !== values.password2) {
            errors.password = 'Пароли не совпадают';
        }
        return errors;
    };

    return (
        <Card className="auth">
            <div className="card__title">Регистрация</div>
            <Formik
                initialValues={{ email: '', password: '', password2: '' }}
                validate={validate}
                validateOnChange={false}
                onSubmit={authorize}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <FormInput name="email" type="email" label="email" />
                        <FormInput name="password" type="password" label="password" />
                        <FormInput name="password2" type="password" label="Retype the password" />
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
