import styled from 'styled-components';

export const Container = styled.section`
  background: #ffff;
  padding: 0 0 50px;
  position: relative;
`;

export const Content = styled.div`
  padding: 50px 150px 0;

  > header {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h1 {
      font-size: 40px;
      font-weight: 600;
      letter-spacing: 2px;
      font-family: sans-serif;
      color: #323232;
    }

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

  > section {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    div:last-child {
      margin-right: 0;
    }

    > div {
      width: 280px;
      height: 420px;
      display: flex;
      margin-right: 20px;
      margin-bottom: 20px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      cursor: pointer;

      > img {
        width: 100%;
        height: 280px;
        background: #323232;
        margin-bottom: 20px;
      }

      h4 {
        margin-bottom: 5px;
        font-weight: bold;
        color: #323232;
        font-size: 16px;
      }

      p {
        color: #323232;
        font-size: 16px;
        margin-bottom: 20px;
      }

      div {
        button {
          background: transparent;
          border: 0;
          outline: none;
        }

        button + button {
          margin-left: 15px;
        }
      }
    }
  }
`;
