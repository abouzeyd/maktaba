import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Login = () => {
  let history = useHistory();
  const login = () => {
    history.push('');
  };
  return (
    <div>
      <div style={style.main} className="container">
        <h3>Login</h3>
        <Form>
          <div className="card " style={{ border: '0px solid black ' }}>
            <input type="text" placeholder="admin" style={style.input} />
            <input type="text" placeholder="mot de passe" style={style.input} />
            <Button className="btn btn-primary" onClick={login}>
              Connexion
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
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
    // width: 500,
    // backgroundColor: 'white',
    // paddingBottom: 52,
    marginTop: 152,
  },
  input: {
    marginBottom: 22,
    width: 300,
    height: 42,
  },
};
