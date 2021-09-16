import React from 'react';
import audio from '../assets/microphone-solid.svg';
import conference from '../assets/headphones-solid.svg';
import preche from '../assets/think-peaks-brands.svg';
import dourous from '../data/dourous.json';
import conferences from '../data/conferences.json';
import preches from '../data/prêches.json';

const Dourous = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          margin: 'auto',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
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
        <div style={{ fontSize: 23, color: '#ababab', fontWeight: 'bold' }}>
          Nouveautés
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#fff',
          border: '3px solid  #c25542',
          borderRadius: 6,
          color: '#ababab',
          fontSize: 16,
          fontWeight: 600,
          padding: 12,
          margin: 'auto',
          width: '50%',
          overflow: 'auto',
          maxHeight: 300,
        }}
      >
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
                  <h4
                    style={{
                      backgroundColor: '#ababab',
                      border: '3px solid  #fff',
                      borderRadius: 6,
                      color: 'white',
                      padding: 12,
                    }}
                  >
                    {item.name}
                  </h4>
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          margin: 'auto',
          width: '50%',
          justifyContent: 'space-between',
          marginTop: 25,
        }}
      >
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
          <img src={audio} alt="h" width="20px" style={{ marginLeft: 35 }} />
          <span style={{ marginLeft: 18 }}> Conférences</span>
        </div>
        <div style={{ fontSize: 23, color: '#ababab', fontWeight: 'bold' }}>
          Nouveautés
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#fff',
          border: '3px solid  #65abc2',
          borderRadius: 6,
          color: '#ababab',
          fontSize: 16,
          fontWeight: 600,
          padding: 12,
          margin: 'auto',
          width: '50%',
          overflow: 'auto',
          maxHeight: 300,
        }}
      >
        <div>
          {conferences.map((item, index) => {
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
                  <h4
                    style={{
                      backgroundColor: '#ababab',
                      border: '3px solid  #fff',
                      borderRadius: 6,
                      color: 'white',
                      padding: 12,
                    }}
                  >
                    {item.name}
                  </h4>
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          margin: 'auto',
          width: '50%',
          justifyContent: 'space-between',
          marginTop: 25,
        }}
      >
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
            fontSize: 23,
            color: '#ababab',
            fontWeight: 'bold',
            marginTop: 25,
          }}
        >
          Nouveautés
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#fff',
          border: '3px solid  #84b856',
          borderRadius: 6,
          color: '#ababab',
          fontSize: 16,
          fontWeight: 600,
          padding: 12,
          margin: 'auto',
          width: '50%',
          overflow: 'auto',
          maxHeight: 300,
        }}
      >
        <div>
          {preches.map((item, index) => {
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
                  <h4
                    style={{
                      backgroundColor: '#ababab',
                      border: '3px solid  #fff',
                      borderRadius: 6,
                      color: 'white',
                      padding: 12,
                    }}
                  >
                    {item.name}
                  </h4>
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
