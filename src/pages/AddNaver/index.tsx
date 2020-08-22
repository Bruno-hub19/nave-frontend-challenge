import React, { useRef, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiChevronLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Container, Content } from './styles';
import { api } from '../../services/api';
import { Modal } from '../../components/Modal';

interface SubmitFormData {
  name: string;
  admission_date: string;
  job_role: string;
  project: string;
  birthdate: string;
  url: string;
}

const AddNaver: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [modalVisible, setModalVisible] = useState(false);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SubmitFormData) => {
      await api.post('/navers/create', { data });

      setModalVisible(true);

      setTimeout(() => {
        setModalVisible(false);

        history.goBack();
      }, 2000);
    },
    [history],
  );

  return (
    <Container>
      <Header />

      <Content>
        <Link to="/home">
          <FiChevronLeft size={30} color="#323232" />
          Adicionar Naver
        </Link>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <label>Nome</label>
            <Input name="name" type="text" placeholder="Nome" />

            <label>Idade</label>
            <Input name="birthdate" type="text" placeholder="Idade" />

            <label>Projetos que participou</label>
            <Input
              name="project"
              type="text"
              placeholder="Projetos que participou"
            />
          </div>

          <div>
            <label>Cargo</label>
            <Input name="job_role" type="text" placeholder="Cargo" />

            <label>Tempo de empresa</label>
            <Input
              name="admission_date"
              type="text"
              placeholder="Tempo de empresa"
            />

            <label>URL da foto do Naver</label>
            <Input name="url" type="text" placeholder="URL da foto do Naver" />
          </div>
        </Form>

        <section>
          <button type="button" onClick={() => formRef.current?.submitForm()}>
            Salvar
          </button>
        </section>
      </Content>

      <Modal
        isVisible={modalVisible}
        title="Naver criado"
        description="Naver criado com sucesso!"
        onClickBehavior={() => setModalVisible(false)}
      />
    </Container>
  );
};

export { AddNaver };
