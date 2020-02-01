import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { LOGIN } from "../../constants/routing";
import AuthStore from "../../store/AuthStore";

const UserBar = observer(() => {
  const store = useContext(AuthStore);
  const logout = () => {
    const { setLoggedInUser } = store;
    setLoggedInUser(null);
    localStorage.removeItem("AlpsUser");
  };

  return (
    <div className="user-bar">
      <div className="user-bar__name">
        {store.loggedInUser && store.loggedInUser.email}
      </div>
      <div className="user-bar__action">
        {store.loggedInUser ? (
          <div>
            <a onClick={logout} href="#">
              Выйти
            </a>
            <Link to="/profile/">Мой профиль</Link>
          </div>
        ) : (
          <Link to={LOGIN}>Войти</Link>
        )}
      </div>
    </div>
  );
});

export default UserBar;
