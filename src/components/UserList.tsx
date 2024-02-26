// UserList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import DataTable, { TableColumn } from 'react-data-table-component';
import { User } from '../Redux/UserSlice';

const UserList: React.FC = () => {
  const users: User[] = useSelector((state: any) => state.users);

  const columns: TableColumn<User>[] = [
    { name: 'Name', selector: (row) => row.name, sortable: true },
    { name: 'Age', selector: (row) => row.age, sortable: true },
    // Add other columns based on your user data structure
  ];

  return (
    <DataTable
      title="User List"
      columns={columns}
      data={users}
      pagination
    />
  );
};

export default UserList;

