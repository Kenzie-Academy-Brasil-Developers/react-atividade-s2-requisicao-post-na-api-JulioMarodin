import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  background-color: aquamarine;

  form {
    margin-top: 50px;
  }

  input {
    width: 250px;
    margin-left: 20px;
    margin-bottom: 5px;
    border: none;
    border-radius: 3px;
  }

  button {
    width: 50px;
    margin-left: 20px;
    background-color: #0077b6;
    border: none;
    border-radius: 3px;
  }

  button:hover {
    cursor: pointer;
  }

  span {
    margin-top: 10px;
    margin-left: 60%;
    transform: translateX(-60%);
  }
`;
