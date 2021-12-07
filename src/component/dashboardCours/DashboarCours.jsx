import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/sidebar';
import './DashboardCours.css';
import { Form, Button } from 'react-bootstrap';
import InputCourt from '../input/InputCourt';
import { useState } from 'react';

const DashboarCours = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState({
    titleCourt: '',
    name: '',
    fileCourt: '',
    dateCourt: '',
  });

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData(data);
    await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: data,
    });
    console.log(data);
    setData({
      titleCourt: '',
      name: '',
      fileCourt: '',
      dateCourt: '',
    });
  };
  return (
    <div>
      <Topbar />
      <div className=" content">
        <Sidebar />
        <div className="dashboardCourt__container">
          <div className="dashboardCourt__form">
            <Form onSubmit={handleSubmit}>
              <div className="card " style={{ border: '0px solid black ' }}>
                <InputCourt
                  handleChange={handleChange}
                  data={data}
                  style={style}
                />
                <Button className="btn btn-primary" type="submit">
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
