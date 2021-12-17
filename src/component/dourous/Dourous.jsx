import React from 'react';
import audio from '../../assets/microphone-solid.svg';
import conferences from '../../assets/headphones-solid.svg';
import preches from '../../assets/think-peaks-brands.svg';
import './Dourous.css';
import { Link } from 'react-router-dom';

const Dourous = ({ dourous, conference, preche }) => {
  console.log(dourous);
  const conférence = conference.slice(0, 5);
  const prêche = preche.slice(0, 5);
  const cours = dourous.slice(0, 5);

  return (
    <div className="container">
      <div className="title__choise">
        <div className="name__court">
          <img
            src={conferences}
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
                <Link
                  to={{ pathname: `/allcourt/${item.id}` }}
                  className="court__link"
                >
                  {item.title}
                </Link>
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
                <Link
                  to={{ pathname: `/allcourt/${item.id}` }}
                  className="court__link"
                >
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {/* Prêches */}
      <div className="title__choise">
        <div className="speak__name">
          <img src={preches} alt="h" width="20px" style={{ marginLeft: 35 }} />
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
                <Link to="/" className="court__link">
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dourous;
