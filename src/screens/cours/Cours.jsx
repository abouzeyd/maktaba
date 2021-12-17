import './Cours.css';
import conference from '../../assets/headphones-solid.svg';
import { Link } from 'react-router-dom';

const Cours = ({ dourous }) => {
  const audio = new Audio();
  const audioPlay = audio.play();
  const audioPause = audio.pause();
  console.log(audioPlay);
  console.log(audioPause);
  return (
    <div>
      <div className="container">
        <div className="title__choise">
          <div className="court__container">
            <img
              src={conference}
              alt="cours"
              width="20px"
              className="court__image"
            />
            <span style={{ marginLeft: 18 }}> Cours Audio</span>
          </div>
          <div className="court__news">Nouveautés</div>
        </div>
        <div className="court__choise">
          <div>
            {dourous.map((item, index) => {
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
      </div>
    </div>
  );
};

export default Cours;
