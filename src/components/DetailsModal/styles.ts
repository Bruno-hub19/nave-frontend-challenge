import styled from 'styled-components';

interface DetailsModalProps {
  isVisible: boolean;
}

interface DeleteCardProps {
  deleteVisible: boolean;
}

export const DetailsModalOverlay = styled.section<DetailsModalProps>`
  width: 100%;
  height: 100vh;
  min-height: 100%;
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: flex-start;
  padding-top: 150px;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const DetailsCard = styled.div`
  width: 1000px;
  max-width: 1000px;
  height: 500px;
  display: flex;
  background: #ffff;
  position: relative;

  > button {
    position: absolute;
    top: 20px;
    right: 20px;
    border: 0;
    background: transparent;
    outline: none;
  }

  img {
    width: 50%;
    height: 100%;
    background: #323232;
  }

  > div {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;

    h3 {
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      margin-bottom: 10px;
    }

    h4 {
      font-size: 16px;
      line-height: 24px;
    }

    span {
      margin: 30px 0 5px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }

    div {
      margin-top: 80px;

      button {
        border: 0;
        background: transparent;
        outline: none;
      }

      button + button {
        margin-left: 10px;
      }
    }
  }
`;

export const DeleteCard = styled.div<DeleteCardProps>`
  width: 592px;
  background: #ffff;
  padding: 30px;
  display: ${props => (props.deleteVisible ? 'flex' : 'none')};
  flex-direction: column;

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

  div {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    button {
      border: 0;
      width: 176px;
      height: 40px;
      border: 2px solid #323232;
      background: transparent;
    }

    button + button {
      background: #323232;
      color: #ffff;
      margin-left: 10px;
    }
  }
`;
