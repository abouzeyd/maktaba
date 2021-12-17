import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Allcourt from '../screens/allcourt/Allcourt';
import Home from '../screens/Home';
import Cours from '../screens/cours/Cours';
import Preches from '../screens/preches/Preches';
import Conferences from '../screens/conferences/Conferences';
import Login from '../screens/Login';
import Audio from '../screens/audioPlayer/AudioPlayer';

const Rout = ({ dourous, conference, preche }) => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home dourous={dourous} conference={conference} preche={preche} />
          }
        />
        <Route path="/cours" element={<Cours dourous={dourous} />} />
        <Route path="/preches" element={<Preches preche={preche} />} />
        <Route
          path="/conferences"
          element={<Conferences conference={conference} />}
        />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/userslist" element={UsersList} /> */}
        <Route path="/allcourt/:id/" element={<Allcourt dourous={dourous} />} />
        <Route path="/audio" element={<Audio dourous={dourous} />} />
      </Routes>
    </div>
  );
};

export default Rout;
