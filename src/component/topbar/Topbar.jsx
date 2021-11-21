import React from 'react';
import './Topbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__wraper">
        <div className="topbar__left">
          <span className="logo">Maktabatawhid</span>
        </div>
        <div className="topbar__right">
          <div className="user">
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
