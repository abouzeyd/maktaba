import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/sidebar';
import './DashBoardPreche.css';
import { Form, Button } from 'react-bootstrap';

const DashBoardPreche = () => {
  return (
    <div>
      <Topbar />
      <div className=" content">
        <Sidebar />
        <div className="dashboardPreche__container">
          <div className="dashboardPreche__form">
            <Form>
              <div className="card " style={{ border: '0px solid black ' }}>
                <input
                  type="text"
                  placeholder="titre du prêche"
                  style={style.input}
                />
                <input type="date" style={style.input} />
                <input
                  type="text"
                  placeholder="Nom du precheur"
                  style={style.input}
                />
                <input
                  type="file"
                  placeholder="Nom du precheur"
                  style={style.input}
                />
                <Button className="btn btn-primary">
                  <span className="newUser__signe">+</span>
                  Poster le prêche
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPreche;
const style = {
  container: {
    width: 500,
    backgroundColor: 'black',
    padding: 100,
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    marginTop: 152,
  },
  input: {
    marginBottom: 22,
    width: 300,
    height: 42,
  },
};
