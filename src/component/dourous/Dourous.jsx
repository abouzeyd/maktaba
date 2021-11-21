import React from 'react';
import audio from '../../assets/microphone-solid.svg';
import conference from '../../assets/headphones-solid.svg';
import preche from '../../assets/think-peaks-brands.svg';
import dourous from '../../data/dourous.json';
import conferences from '../../data/conferences.json';
import preches from '../../data/prêches.json';
import './Dourous.css';

const Dourous = () => {
  const conférence = conferences.slice(0, 5);
  const prêche = preches.slice(0, 5);
  const cours = dourous.slice(0, 5);

  return (
    <div className="container">
      <div className="title__choise">
        <div className="name__court">
          <img
            src={conference}
            alt="conferences"
            width="20px"
            style={{ marginLeft: 35 }}
          />
          <span style={{ marginLeft: 18 }}> Cours Audio</span>
        </div>
        <div className="court__news">Nouveautés</div>
      </div>
      <div className="court__choise">
        <div>
          {cours.map((item, index) => {
            return (
              <div className="court__item">
                <div className="court__div">
                  <h6 className="court__title">{item.name}</h6>
                  <span style={{ fontSize: 14 }}>{item.date}</span>
                </div>
                <a href="/" className="court__link">
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {/* conferences */}
      <div className="title__choise">
        <div className="conference__name">
          <img src={audio} alt="h" width="15px" style={{ marginLeft: 35 }} />
          <span style={{ marginLeft: 18 }}> Conférences</span>
        </div>
        <div className="court__news">Nouveautés</div>
      </div>
      <div className="court__choise" style={{ border: '3px solid #65abc2' }}>
        <div>
          {conférence.map((item) => {
            return (
              <div className="court__item">
                <div className="court__div">
                  <h6 className="court__title">{item.name}</h6>
                  <span style={{ fontSize: 14 }}>{item.date}</span>
                </div>
                <a href="/" className="court__link">
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {/* Prêches */}
      <div className="title__choise">
        <div className="speak__name">
          <img src={preche} alt="h" width="20px" style={{ marginLeft: 35 }} />
          <span style={{ marginLeft: 18 }}> Prêches</span>
        </div>
        <div className="court__news">Nouveautés</div>
      </div>

      <div className="court__choise" style={{ border: '3px solid #84b856' }}>
        <div>
          {prêche.map((item, index) => {
            return (
              <div className="court__item">
                <div className="court__div">
                  <h6 className="court__title">{item.name}</h6>
                  <span style={{ fontSize: 14 }}>{item.date}</span>
                </div>
                <a href="/" className="court__link">
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