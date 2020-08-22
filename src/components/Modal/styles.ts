import styled from 'styled-components';

interface OverlayProps {
  isVisible: boolean;
}

export const Overlay = styled.section<OverlayProps>`
  width: 100%;
  height: 100%;
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
`;

export const Card = styled.div`
  width: 592px;
  height: 160px;
  background: #ffff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  position: relative;

  button {
    position: absolute;
    border: 0;
    background: transparent;
    top: 20px;
    right: 20px;
    outline: none;
  }

  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #323232;
    margin-bottom: 10px;
  }

  p {
    color: #323232;
    font-size: 16px;
    line-height: 36px;
  }
`;
