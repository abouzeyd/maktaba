import React from 'react';
import Footer from '../component/Footer';
import Nav from '../component/Navigation';
import dourous from '../data/dourous.json';
import conference from '../assets/headphones-solid.svg';

const Cours = () => {
  const audio = new Audio();
  const audioPlay = audio.play();
  const audioPause = audio.pause();
  console.log(audioPlay);
  console.log(audioPause);
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="titleChoise">
          <div
            style={{
              maxHeight: 300,
              overflow: 'scroll',
              backgroundColor: '#c25542',
              borderRadius: '6px',
              border: '3px solid #c25542',
              padding: 7,
              color: 'white',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={conference}
              alt="h"
              width="20px"
              style={{ marginLeft: 35 }}
            />
            <span style={{ marginLeft: 18 }}> Cours Audio</span>
          </div>
          <div style={{ fontSize: 19, color: '#ababab', fontWeight: 'bold' }}>
            Nouveautés
          </div>
        </div>
        <div className="courtChoise">
          <div>
            {dourous.map((item, index) => {
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
      </div>
      <Footer />
    </div>
  );
};

export default Cours;
