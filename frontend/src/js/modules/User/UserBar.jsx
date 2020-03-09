import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { LOGIN } from '../../constants/routing';
import AuthStore from '../../store/AuthStore';

const UserBar = observer(() => {
    const store = useContext(AuthStore);
    const logout = () => {
        const { setLoggedInUser } = store;
        setLoggedInUser(null);
        localStorage.removeItem('AlpsUser');
    };

    return (
        <>
            <div>
                {store.loggedInUser && store.loggedInUser.email}
            </div>
            <div>
                {store.loggedInUser ? (
                    <div>
                        <button onClick={logout}>
                            Выйти
                        </button>
                        <Link to="/profile/">Мой профиль</Link>
                    </div>
                ) : (
                    <Link to={LOGIN}>Войти</Link>
                )}
            </div>
        </>
    );
});

export default UserBar;
