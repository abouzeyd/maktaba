import React from 'react';
import audio from '../assets/microphone-solid.svg';
import conference from '../assets/headphones-solid.svg';
import preche from '../assets/think-peaks-brands.svg';
import dourous from '../data/dourous.json';
import conferences from '../data/conferences.json';
import preches from '../data/prêches.json';
import './Slide.css';

const Dourous = () => {
  const conférence = conferences.slice(0, 5);
  const prêche = preches.slice(0, 5);
  const cours = dourous.slice(0, 5);

  return (
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
          {cours.map((item, index) => {
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
      {/* conferences */}
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
          {conférence.map((item) => {
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
      {/* Prêches */}
      <div className="titleChoise">
        <div
          style={{
            maxHeight: 300,
            overflow: 'scroll',
            backgroundColor: '#84b856',
            borderRadius: '6px',
            border: '3px solid #84b856',
            padding: 7,
            color: 'white',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            marginTop: 25,
          }}
        >
          <img src={preche} alt="h" width="20px" style={{ marginLeft: 35 }} />
          <span style={{ marginLeft: 18 }}> Prêches</span>
        </div>
        <div
          style={{
            fontSize: 19,
            color: '#ababab',
            fontWeight: 'bold',
            marginTop: 25,
          }}
        >
          Nouveautés
        </div>
      </div>

      <div className="courtChoise" style={{ border: '3px solid #84b856' }}>
        <div>
          {prêche.map((item, index) => {
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
  );
};

export default Dourous;
