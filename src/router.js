import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Conferences from './screen/conferences/Conferences';
import Cours from './screen/cours/Cours';
import Preches from './screen/preches/Preches';
import Videos from './screen/videos/Videos';
import Dashboard from './screen/Dashboard';

const rout = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/preches" element={<Preches />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default rout;
