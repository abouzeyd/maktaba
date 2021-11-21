import './Preche.css';
import Nav from '../../component/Nav';
import Footer from '../../component/Footer';
import preches from '../../data/prêches.json';
import preche from '../../assets/think-peaks-brands.svg';

const Preches = () => {
  return (
    <div>
      <Nav />
      <div className="title__choise">
        <div className="speak__container">
          <img src={preche} alt="h" width="20px" style={{ marginLeft: 35 }} />
          <span style={{ marginLeft: 18 }}> Prêches</span>
        </div>
        <div
          style={{
            fontSize: 19,
            color: '#ababab',
            fontWeight: 'bold',
            marginTop: 25,
          }}
          className="speak__news"
        >
          Nouveautés
        </div>
      </div>

      <div className="court__choise" style={{ border: '3px solid #84b856' }}>
        <div>
          {preches.map((item, index) => {
            return (
              <div className="speak__item">
                <div className="speak__div">
                  <h6 className="speak__title">{item.name}</h6>
                  <span style={{ fontSize: 14 }}>{item.date}</span>
                </div>
                <a href="/" className="speak__link">
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Preches;
