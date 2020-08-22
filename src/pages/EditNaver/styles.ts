import styled from 'styled-components';

export const Container = styled.section`
  background: #ffff;
  padding: 0 0 50px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  a {
    text-decoration: none;
    color: #323232;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin-left: -9px;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 0.6;
    }
  }

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;

      & + div {
        margin-left: 40px;
      }

      label {
        margin: 20px 0 5px;
      }
    }
  }

  section {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 20px;

    button {
      width: 176px;
      height: 40px;
      background: #323232;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffff;
      border: 0;
    }
  }
`;
