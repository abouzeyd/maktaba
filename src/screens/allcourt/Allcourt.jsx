import React from 'react';
import './Allcourt.css';
import { useParams } from 'react-router-dom';

const Allcourt = ({ dourous }) => {
  const { id } = useParams();

  let idData = dourous.find((x) => x.id === id);

  const audioArray = [];
  idData.specifyCourt.map((a) =>
    audioArray.push({ id: a.id, title: a.title, sound: a.sound })
  );
  return (
    <div className="container">
      <p style={{ textAlign: 'center', fontSize: 23, fontWeight: 'bold' }}>
        {idData.title}
      </p>
      <div className="audio__player">
        {audioArray.map((item) => {
          return (
            <div key={item.id} className="sound">
              <div className="sound__title">{item.title}</div>
              <audio src={item.sound} controls>
                <code>audio</code>
              </audio>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allcourt;
