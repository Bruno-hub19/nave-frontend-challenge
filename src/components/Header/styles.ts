import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 85px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px;

  img {
    width: 145px;
  }

  button {
    background: transparent;
    padding: 5px;
    border: 0;
    color: #323232;
    transition: color 0.2s linear;
    font-weight: bold;

    &:hover {
      color: #424242;
    }
  }
`;
