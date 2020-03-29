import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { LOGIN, SIGNUP, PROFILE_PAGE } from '../../constants/routing';
import AuthStore from '../../store/AuthStore';

import * as styles from './UserBar.module.css';

const UserBar = observer(() => {
    const store = useContext(AuthStore);
    const logout = () => {
        const { setLoggedInUser } = store;
        setLoggedInUser(null);
        localStorage.removeItem('AlpsUser');
    };

    return (
        <div className={styles.userBar}>
            {store.loggedInUser ? (
                <>
                    <div>{store.loggedInUser.email}</div>
                    <button className={styles.item} onClick={logout}>
                        Выйти
                    </button>
                    <Link className={styles.item} to={PROFILE_PAGE}>Мой профиль</Link>
                </>
            ) : (
                <>
                    <Link className={styles.item} to={LOGIN}>Войти</Link>
                    <Link className={styles.item} to={SIGNUP}>Зарегитрироваться</Link>
                </>
            )}
        </div>
    );
});

export default UserBar;
