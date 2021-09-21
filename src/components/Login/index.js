import axios from 'axios';
import { useState } from 'react';
import { Container } from './styles';

const Login = () => {
  const [userInputName, setInputUserName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  const handleClick = () => {
    axios
      .post('https://kenzieshop.herokuapp.com/sessions/', {
        username: userInputName,
        password: inputPassword,
      })
      .then((res) => {
        setIsLoggedIn(true);
        setUserNotFound(false);
        console.log(res);
      })
      .catch((err) => {
        setUserNotFound(true);
        setIsLoggedIn(false);
        console.log(err);
      });
  };

  return (
    <Container>
      <form>
        <input
          placeholder="User name"
          type="text"
          onChange={(e) => setInputUserName(e.target.value)}
        />
        <input
          placeholder="Senha"
          type="text"
          onChange={(e) => setInputPassword(e.target.value)}
        />
      </form>
      <button onClick={handleClick}>Login</button>

      {isLoggedIn && <span>Requisição completa!</span>}
      {userNotFound && <span>Requisição falhou!</span>}
    </Container>
  );
};

export default Login;
