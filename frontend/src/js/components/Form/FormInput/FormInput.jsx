import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import classnames from 'classnames';

import Input from '../../Input/Input';

import styles from './formInput.module.css';

const FormInput = ({
    label, type, className, ...props
}) => {
    const [field, meta] = useField(props);
    return (
        <label className={classnames(styles.wrapper, className)}>
            <span className={styles.label}>{label}</span>
            <Input
                type={type}
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}
        </label>
    );
};

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
};

FormInput.defaultProps = {
    type: 'text',
    className: null,
};

export default FormInput;
