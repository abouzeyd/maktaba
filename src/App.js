import React from 'react';
import Nav from './component/navigation';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <div
        style={{
          minHeight: 30,
          maxHeight: 300,
          overflow: 'scroll',
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: '6px',
          border: '3px solid #c25542',
        }}
      >
        <div> hh</div>
        <div> hh</div>
        <div> hh</div>
        <div> hh</div>
      </div>
    </div>
  );
}

export default App;
