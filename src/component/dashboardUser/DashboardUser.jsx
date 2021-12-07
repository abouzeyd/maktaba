import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/sidebar';
import './DashboardUser.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const DashboardUser = () => {
  const rows = [
    {
      id: 1,
      user: 'Abouzayd',
      email: 'mohoumouhamed01@gmail.com',
      passWord: 12345,
    },
    {
      id: 2,
      user: 'Abouzayd',
      email: 'mohoumouhamed01@gmail.com',
      passWord: 12345,
    },
    {
      id: 3,
      user: 'Abouzayd',
      email: 'mohoumouhamed01@gmail.com',
      passWord: 12345,
    },
    {
      id: 4,
      user: 'Abouzayd',
      email: 'mohoumouhamed01@gmail.com',
      passWord: 12345,
    },
    {
      id: 5,
      user: 'Abouzayd',
      email: 'mohoumouhamed01@gmail.com',
      passWord: 12345,
    },
  ];
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  console.log(handleDelete);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'user',
      width: 150,
      cell: (params) => {
        console.log(params.id);
      },
    },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'passWord',
      headerName: 'Mot de passe',
      type: 'password',
      width: 190,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.id}`}>
              <button className="user__list">Editer</button>
            </Link>
            <DeleteIcon
              className="user__delete"
              onClick={() => handleDelete(params.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div>
      <Topbar />
      <div className="content">
        <Sidebar />
        <div className="dash" style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};
export default DashboardUser;
