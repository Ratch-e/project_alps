import React from 'react';
import { Link } from 'react-router-dom';
import { ROOT } from '../../constants/routing';

const NoPage = () => (
    <div>
    Hi, there no page exist for you. Go
        {' '}
        <Link to={ROOT}>here</Link>
        !
    </div>
);

export default NoPage;
