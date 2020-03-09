import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './preview.module.css';

const Preview = ({ imageURL }) => <img src={imageURL} alt="preview" className={styles.preview} />;

Preview.propTypes = {
    imageURL: PropTypes.string.isRequired,
};

export default Preview;
