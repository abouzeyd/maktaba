import React from 'react';
import cours from '../../data/dourous.json';
import { Route as router } from 'react-router-dom';
// import conference from '../../data/conferences.json';

const Allcourt = () => {
  const id = router.query;
  console.log(id);

  // const idData = cours.find((x) => x.id !== id);
  return (
    <div>
      {cours.map((item) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
};

export default Allcourt;
