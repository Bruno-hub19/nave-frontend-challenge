import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: transparent;
  padding: 16px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #323232;
  color: #323232;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #845ec7;
      border-color: #845ec7;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    outline: none;
    color: #323232;
  }
`;
