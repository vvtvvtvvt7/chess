import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import Header from '../../layout/header/header';
import { getUsers } from '../../../api/getUsers';
import { IUser } from '../../../models/User';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'имя',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'фамилия',
    dataIndex: 'lastName',
    key: 'lastName',
  },
];

const Top100:React.FC = () => {
  const [users, setUsers] = useState <IUser[] | undefined>();
  useEffect(() => {
    getUsers(25, 1)
      .then((result) => setUsers(result.users));
  }, []);

  return (
    <div>
      <Header />
      <h1>Топ 100!</h1>
      <Table
        columns={columns}
        dataSource={users}
        loading={!users}
        pagination={{
          pageSize: 10,
        }}
      />
    </div>
  );
};

export default Top100;
