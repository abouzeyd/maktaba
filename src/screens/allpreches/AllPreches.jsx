import React from 'react';
import { useParams } from 'react-router-dom';
import './AllPreches.css';
const AllPreches = ({ preche }) => {
  const { id } = useParams();

  let idPreche = preche.find((x) => x.id === id);

  return (
    <div className="container">
      <p className="title">{idPreche.title}</p>
      <p className="allpreches">{idPreche.name}</p>
      <div className="audio__player">
        {idPreche.specifyCourt.map((item) => {
          return (
            <div key={item.id} className="sound__allpreches">
              <div className="count">{item.id}</div>
              <div className="sound__title">{item.title}</div>
              <audio
                src={item.sound}
                controls
                className="audio__sound"
                preload="none"
                id={item.id}
              />
              <span style={{ paddingTop: 12, fontSize: 14, color: 'white' }}>
                Publié le {idPreche.date}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPreches;
