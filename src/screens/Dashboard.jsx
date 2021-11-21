import React from 'react';
import Topbar from '../component/topbar/Topbar';
import Sidebar from '../component/sidebar/sidebar';
import '../component/sidebar/sidebar.css';
import HomeDashboard from '../component/HomeDashboard/HomeDashboard';

const Dashboard = () => {
  return (
    <div>
      <Topbar />
      <div className=" content">
        <Sidebar />
        <HomeDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
