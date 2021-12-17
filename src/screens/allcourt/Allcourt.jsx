import React from 'react';
import { useParams } from 'react-router-dom';

const Allcourt = ({ dourous }) => {
  const { id } = useParams();

  let idData = dourous.find((x) => x.id === id);
  return (
    <div>
      {idData.title}
      <div>
        {idData.specifyCourt.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
              {item.sound}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Allcourt;
