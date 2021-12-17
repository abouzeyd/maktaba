import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
              <Link to={item.link}>{item.title}</Link>
              {item.sound}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Allcourt;
