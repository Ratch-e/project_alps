import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AuthStore from '../store/AuthStore';

const RequiresAuth = ({ children }) => {
    const history = useHistory();
    const store = useContext(AuthStore);
    const shouldNavigateAway = () => {
        if (!store.loggedInUser) {
            history.push('/');
        }
    };

    useEffect(() => shouldNavigateAway(), []);

    return <>{children}</>;
};

RequiresAuth.propTypes = {
    children: PropTypes.element.isRequired,
};

export default RequiresAuth;
