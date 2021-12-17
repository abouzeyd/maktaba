import React from 'react';

import Header from '../component/Header';
import Dourous from '../component/dourous/Dourous';

const Home = ({ dourous, conference, preche }) => {
  return (
    <div>
      <Header />
      <Dourous dourous={dourous} conference={conference} preche={preche} />
    </div>
  );
};

export default Home;
