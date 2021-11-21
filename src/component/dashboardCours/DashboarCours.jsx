import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/sidebar';
import './DashboardCours.css';
import { Form, Button } from 'react-bootstrap';

const DashboarCours = () => {
  return (
    <div>
      <Topbar />
      <div className=" content">
        <Sidebar />
        <div className="dashboardCourt__container">
          <div className="dashboardCourt__form">
            <Form>
              <div className="card " style={{ border: '0px solid black ' }}>
                <input
                  type="text"
                  placeholder="titre du cour"
                  style={style.input}
                />
                <input type="date" placeholder="email" style={style.input} />
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
                  Poster le cour
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboarCours;
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
