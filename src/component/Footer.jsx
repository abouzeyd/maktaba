import React from 'react';
import navigation from '../data/navigation.json';
import { Link } from 'react-router-dom';
import whatapp from '../assets/whatsapp 1.svg';
import telegram from '../assets/telegram 1.svg';
import './Slide.css';

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container">
        <div className="footerInformation">
          <div className="detail">
            <h5 style={{ color: 'white' }}>Nous contactez</h5>
            <div
              style={{ display: 'flex', flexDirection: 'column', width: 12 }}
            >
              {images.map((item) => {
                return (
                  <Link to={item.link} className="linkImage">
                    <img src={item.img} alt="images" width="25px" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h5 style={{ color: 'white' }}>Dourous</h5>
            {navigation.map((item, index) => {
              return (
                <div key={index}>
                  <Link to={item.link} className="link">
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="detail">
            <h5 style={{ color: 'white' }} className="titleQuisommenous">
              Qui sommes nous
            </h5>
            <p className="quisommesnous">
              nous sommes des freres qui oeuvrons dans la quete de la science
              religieuse et qui veulent faire profiter cette science a nos
              freres
            </p>
          </div>
        </div>
        <p
          style={{
            textAlign: 'center',
            paddingTop: 65,
            color: 'white',
            fontSize: 12,
            marginBottom: 0,
          }}
        >
          ©MaktabaTawhid, tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default Footer;

const images = [
  {
    img: whatapp,
    link: '/',
  },
  {
    img: telegram,
    link: '/',
  },
];
