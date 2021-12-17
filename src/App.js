import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Router';
import data from './data/dourous';
import confData from './data/conferences';
import prechData from './data/prêches';
import Navigation from './component/Nav';
import Footer from './component/Footer';

function App() {
  const { dourous } = data;
  const { conference } = confData;
  const { preche } = prechData;

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes dourous={dourous} conference={conference} preche={preche} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
