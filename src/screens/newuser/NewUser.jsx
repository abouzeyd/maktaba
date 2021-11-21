import Topbar from '../../component/topbar/Topbar';
import Sidebar from '../../component/sidebar/sidebar';
import './NewUser.css';
import { Button, Form } from 'react-bootstrap';

const NewUser = () => {
  return (
    <div>
      <Topbar />
      <div className=" content">
        <Sidebar />
        <div className="newUser__container">
          <div className="newUser__form">
            <Form>
              <div className="card " style={{ border: '0px solid black ' }}>
                <input
                  type="text"
                  placeholder="nom d'utilisateur"
                  style={style.input}
                />
                <input type="text" placeholder="email" style={style.input} />
                <input
                  type="text"
                  placeholder="mot de passe"
                  style={style.input}
                />
                <Button className="btn btn-primary">
                  <span className="newUser__signe">+</span>
                  Ajouter
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
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
