import './Conferences.css';
import conferences from '../../data/conferences.json';
import audio from '../../assets/microphone-solid.svg';
import Nav from '../../component/Nav';
import Footer from '../../component/Footer';

const Conferences = () => {
  return (
    <div>
      <Nav />
      <div style={{ marginTop: 35 }}>
        <div className="conference__choise">
          <div className="conference__container">
            <img
              src={audio}
              alt="audio"
              width="15px"
              className="conference__image"
            />
            <span style={{ marginLeft: 18 }}> Conférences</span>
          </div>
          <div className="conference__news">Nouveautés</div>
        </div>
        <div
          className="conference__choise"
          style={{ border: '3px solid #65abc2' }}
        >
          <div>
            {conferences.map((item) => {
              return (
                <div className="conference__item">
                  <div className="conference__div">
                    <h6 className="conference__title">{item.name}</h6>
                    <span style={{ fontSize: 14 }}>{item.date}</span>
                  </div>
                  <a href="/" className="conference__link">
                    {item.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Conferences;
