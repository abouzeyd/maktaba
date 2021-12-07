import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/sidebar';
import './DashBoardPreche.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import InputPreche from '../input/InputPreche';

const DashBoardPreche = () => {
  const [data, setData] = useState({
    titleCourt: '',
    dateCourt: '',
    name: '',
    fileCourt: '',
  });
  const handleChange = (e) => {
    const newPreche = { ...data };
    newPreche[e.target.id] = e.target.value;
    setData(newPreche);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(data);
    console.log(data);
    setData({
      titleCourt: '',
      dateCourt: '',
      name: '',
      fileCourt: '',
    });
  };
  return (
    <div>
      <Topbar />
      <div className=" content">
        <Sidebar />
        <div className="dashboardPreche__container">
          <div className="dashboardPreche__form">
            <Form onSubmit={handleSubmit}>
              <div className="card " style={{ border: '0px solid black ' }}>
                <InputPreche
                  handleChange={handleChange}
                  style={style}
                  data={data}
                />
                <Button className="btn btn-primary" type="submit">
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
