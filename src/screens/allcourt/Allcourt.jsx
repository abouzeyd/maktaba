import './Allcourt.css';
import { useParams } from 'react-router-dom';

const Allcourt = ({ dourous, conference, preche }) => {
  const { id } = useParams();

  let idData = dourous.find((x) => x.id === id);
  // let idConference = conference.find((x) => x.id === id);
  // let idPreche = preche.find((x) => x.id === id);

  return (
    <div className="container">
      <p className="title">{idData.title}</p>
      <p className="name__speaker">{idData.name}</p>
      <div className="audio__player">
        {idData.specifyCourt.map((item) => {
          return (
            <div key={item.id} className="sound">
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
                Publié le {idData.date}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allcourt;
