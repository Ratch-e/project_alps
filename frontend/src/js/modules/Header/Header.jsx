import React from 'react';
import { Link } from 'react-router-dom';
import UserBar from '../User/UserBar';

import styles from './header.module.css';
import { ROOT } from '../../constants/routing';

const Header = () => (
    <header className={styles.header}>
        <Link to={ROOT}>Лого</Link>
        <UserBar />
    </header>
);

export default Header;
