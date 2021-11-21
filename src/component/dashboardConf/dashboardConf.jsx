import './dashboardConf.css';
import { Form, Button } from 'react-bootstrap';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/sidebar';

const DashboardConf = () => {
  return (
    <div>
      <Topbar />
      <div className=" content">
        <Sidebar />
        <div className="dashboardConf__container">
          <div className="dashboardConf__form">
            <Form>
              <div className="card " style={{ border: '0px solid black ' }}>
                <input
                  type="text"
                  placeholder="theme de la conference"
                  style={style.input}
                />
                <input type="date" style={style.input} />
                <input
                  type="text"
                  placeholder="Nom du conferencier"
                  style={style.input}
                />
                <input type="file" style={style.input} />
                <Button className="btn btn-primary">
                  <span className="newUser__signe">+</span>
                  Poster la conference
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardConf;
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
