import React from 'react';
import RequiresAuth from '../../helpers/RequiresAuth';

const Profile = () => (
    <RequiresAuth>
        <p>Это мой профиль!</p>
    </RequiresAuth>
);

export default Profile;
