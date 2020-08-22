import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  background: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 448px;
  height: 408px;
  padding: 40px;
  border: 2px solid #323232;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  label {
    margin-top: 20px;
    margin-bottom: 5px;
  }

  button {
    margin-top: 30px;
    height: 40px;
    background: #323232;
    border: 0;
    border-radius: 5px;
    color: #ffff;
    transition: background 0.2s linear;

    &:hover {
      background: #424242;
    }
  }
`;
