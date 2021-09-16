import React from 'react';
import audio from '../assets/microphone-solid.svg';
import dourous from '../data/dourous.json';
import conferences from '../data/conferences.json';
import preches from '../data/prêches.json';

const Dourous = () => {
  return (
    <div style={{ margin: 'auto' }}>
      <div
        style={{
          maxHeight: 300,
          overflow: 'scroll',
          width: '20%',
          backgroundColor: '#c25542',
          borderRadius: '6px',
          border: '3px solid #c25542',
          margin: 'auto',
          padding: 7,
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img src={audio} alt="h" width="15px" style={{ marginLeft: 35 }} />
        <span style={{ marginLeft: 18 }}> Cours Audio</span>
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
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <h4>{item.name}</h4>
                  <span style={{ fontSize: 14 }}>{item.date}</span>
                </div>
                <a href="/" style={{ textDecoration: 'none' }}>
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
          maxHeight: 300,
          overflow: 'scroll',
          width: '20%',
          backgroundColor: '#65abc2',
          borderRadius: '6px',
          border: '3px solid #65abc2',
          margin: 'auto',
          padding: 7,
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          marginTop: 25,
        }}
      >
        <img src={audio} alt="h" width="15px" style={{ marginLeft: 35 }} />
        <span style={{ marginLeft: 18 }}> Conférences</span>
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
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <h4>{item.name}</h4>
                  <span style={{ fontSize: 14 }}>{item.date}</span>
                </div>
                <a href="/" style={{ textDecoration: 'none' }}>
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
          maxHeight: 300,
          overflow: 'scroll',
          width: '20%',
          backgroundColor: '#84b856',
          borderRadius: '6px',
          border: '3px solid #84b856',
          margin: 'auto',
          padding: 7,
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          marginTop: 25,
        }}
      >
        <img src={audio} alt="h" width="15px" style={{ marginLeft: 35 }} />
        <span style={{ marginLeft: 18 }}> Prêches</span>
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
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <h4>{item.name}</h4>
                  <span style={{ fontSize: 14 }}>{item.date}</span>
                </div>
                <a href="/" style={{ textDecoration: 'none' }}>
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
