import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';
import { Input } from '../../components/Input';
import logoImage from '../../assets/logo.png';

import { Container, Content } from './styles';

interface SingInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SingInFormData) => {
      await signIn({
        email: data.email,
        password: data.password,
      });
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logoImage} alt="Nave logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <label>Email</label>
          <Input name="email" type="text" placeholder="E-mail" />

          <label>Senha</label>
          <Input name="password" type="password" placeholder="Senha" />

          <button type="button" onClick={() => formRef.current?.submitForm()}>
            Entrar
          </button>
        </Form>
      </Content>
    </Container>
  );
};

export { SignIn };
