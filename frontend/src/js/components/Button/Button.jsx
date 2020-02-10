import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './button.module.css';

const Button = ({
    children, onClick, className, type,
}) => (
    <button
        className={classnames(styles.button, className)}
        onClick={onClick}
        type={type}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
};

Button.defaultProps = {
    onClick: null,
    type: 'button',
    className: null,
};

export default Button;
