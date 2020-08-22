import React from 'react';

import { useAuth } from '../../hooks/auth';
import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <img src={logoImg} alt="Nave logo" />

      <button type="button" onClick={signOut}>
        Sair
      </button>
    </Container>
  );
};

export { Header };
