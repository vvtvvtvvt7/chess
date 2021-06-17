import React, { useState, useEffect } from 'react';
import { getUser } from '../../../api/getUser';
import { IUser } from '../../../models/User';

const Header:React.FC = () => {
  const [user, setUser] = useState<IUser | undefined>();
  useEffect(() => {
    getUser().then(setUser);
  }, []);
  return (
    <header>
      { user ? (
        <p>
          Привет,
          {user.firstName}
          {' '}
          {user.lastName}
        </p>
      ) : <div>Загрузка</div> }
    </header>
  );
};

export default Header;
