import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}
`;

export const Main = styled.main`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.section`
  width: 50%;
  max-width: 500px;
  text-align: center;

  h1 {
    font-size: 2.5em;
    margin-bottom: 16px;
  }
`;

export const Campo = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 85%;
    height: 5vh;
    outline: none;
    font-size: 1em;
    padding-left: 8px;
    border-radius: 5px;
    border: solid 2px #8a8a8a;
  }

  button {
    width: 10%;
    width: 5vh;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.2em;
    border-radius: 5px;
    font-weight: bolder;
    background-color: #5ea6ca;
  }

  button:hover {
    background-color: #66b2d8;
  }
`;

export const Lista = styled.div`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 15px;
    height: 15px;
    accent-color: black;
  }

  h3 {
    width: 80%;
    font-weight: 300;
    text-align: start;
  }

  button {
    width: 5%;
    border: none;
    display: flex;
    cursor: pointer;
    align-items: center;
    background-color: transparent;
  }

  img {
    width: 100%;
  }
`;
