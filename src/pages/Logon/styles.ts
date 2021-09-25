import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;

  img {
    width: 250px;
    height: 250px;
  }

  background-color: #f3e07f;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
  }

  input {
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;

    & + input {
      margin-top: 8px;
    }
  }

  button {
    background: #d93662;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.9s;

    color: #fff;

    &:hover {
      cursor: pointer;
      background-color: #d93662;
    }
  }
`;
