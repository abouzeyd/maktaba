import React from 'react';
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import preches from '../data/prêches.json';
import preche from '../assets/think-peaks-brands.svg';

const Preches = () => {
  return (
    <div>
      <Nav />
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

export default Preches;
