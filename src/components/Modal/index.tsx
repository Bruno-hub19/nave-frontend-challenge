import React from 'react';
import { FiX } from 'react-icons/fi';

import { Overlay, Card } from './styles';

interface ModalProps {
  isVisible: boolean;
  title: string;
  description: string;
  onClickBehavior: any;
}

const Modal: React.FC<ModalProps> = ({
  isVisible,
  title,
  description,
  onClickBehavior,
}) => {
  return (
    <Overlay isVisible={isVisible}>
      <Card>
        <button type="button" onClick={onClickBehavior}>
          <FiX size={22} color="#323232" />
        </button>

        <h3>{title}</h3>
        <p>{description}</p>
      </Card>
    </Overlay>
  );
};

export { Modal };
