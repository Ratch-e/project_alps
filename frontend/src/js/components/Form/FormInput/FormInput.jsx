import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import classnames from 'classnames';

import styles from './formInput.module.css';

const FormInput = ({
    label, type, className, ...props
}) => {
    const [field, meta] = useField(props);
    return (
        <label className={classnames(styles.input, className)}>
            {label}
            <input
                type={type}
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <p>{meta.error}</p>
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
