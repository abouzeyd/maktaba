import './Preche.css';
import preches from '../../assets/think-peaks-brands.svg';
import { Link } from 'react-router-dom';

const Preches = ({ preche }) => {
  return (
    <div>
      <div className="title__choise">
        <div className="speak__container">
          <img src={preches} alt="h" width="20px" style={{ marginLeft: 35 }} />
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
          {preche.map((item) => {
            return (
              <div className="speak__item">
                <div className="speak__div">
                  <h6 className="speak__title">{item.name}</h6>
                  <span style={{ fontSize: 14 }}>{item.date}</span>
                </div>
                <Link
                  to={{ pathname: `/allpreches/${item.id}` }}
                  className="speak__link"
                >
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Preches;
