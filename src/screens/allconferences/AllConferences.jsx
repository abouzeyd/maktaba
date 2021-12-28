import React from 'react';
import { useParams } from 'react-router-dom';
import './AllConferences.css';

const AllConferences = ({ conference }) => {
  const { id } = useParams();

  let idConference = conference.find((x) => x.id === id);

  return (
    <div className="container">
      <p className="title">{idConference.title}</p>
      <p className="allconferences">{idConference.name}</p>
      <div className="audio__player">
        {idConference.specifyCourt.map((item) => {
          return (
            <div key={item.id} className="sound__allconferences">
              <div className="sound__title">{item.title}</div>
              <div className="count">{item.id}</div>
              <audio
                src={item.sound}
                controls
                className="audio__sound"
                preload="none"
              />
              <span style={{ paddingTop: 12, fontSize: 14, color: 'white' }}>
                Publié le {idConference.date}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllConferences;
