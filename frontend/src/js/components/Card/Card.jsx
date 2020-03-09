import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './card.module.css';

const Card = ({ children, className }) => (
    <div className={classnames(styles.card, className)}>{children}</div>
);

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.string,
    ]),
    className: PropTypes.string,
};

Card.defaultProps = {
    children: null,
    className: null,
};

export default Card;
