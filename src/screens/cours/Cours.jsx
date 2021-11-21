import './Cours.css';
import Footer from '../../component/Footer';
import Nav from '../../component/Nav';
import dourous from '../../data/dourous.json';
import conference from '../../assets/headphones-solid.svg';

const Cours = () => {
  const audio = new Audio();
  const audioPlay = audio.play();
  const audioPause = audio.pause();
  console.log(audioPlay);
  console.log(audioPause);
  return (
    <div>
      <Nav />
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
                  <a href="/" className="court__link">
                    {item.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cours;
