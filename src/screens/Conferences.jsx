import React from 'react';
import conferences from '../data/conferences.json';
import audio from '../assets/microphone-solid.svg';
import Nav from '../component/Nav';
import Footer from '../component/Footer';

const Conferences = () => {
  return (
    <div>
      <Nav />
      <div className="titleChoise">
        <div
          style={{
            maxHeight: 300,
            overflow: 'scroll',
            backgroundColor: '#65abc2',
            borderRadius: '6px',
            border: '3px solid #65abc2',
            padding: 2,
            color: 'white',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img src={audio} alt="h" width="15px" style={{ marginLeft: 35 }} />
          <span style={{ marginLeft: 18 }}> Conférences</span>
        </div>
        <div style={{ fontSize: 19, color: '#ababab', fontWeight: 'bold' }}>
          Nouveautés
        </div>
      </div>
      <div className="courtChoise" style={{ border: '3px solid #65abc2' }}>
        <div>
          {conferences.map((item) => {
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderBottom: '1px solid black',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <h6
                    style={{
                      backgroundColor: '#ababab',
                      border: '3px solid  #fff',
                      borderRadius: 6,
                      color: 'white',
                      padding: 12,
                    }}
                  >
                    {item.name}
                  </h6>
                  <span style={{ fontSize: 14 }}>{item.date}</span>
                </div>
                <a
                  href="/"
                  style={{ textDecoration: 'none', marginBottom: 12 }}
                >
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Conferences;
