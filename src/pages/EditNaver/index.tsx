import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
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

interface CurrentNaverState {
  name: string;
  admission_date: string;
  job_role: string;
  project: string;
  birthdate: string;
  url: string;
}

interface LocationState {
  naver_id: string;
}

const EditNaver: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [currentNaver, setCurrentNaver] = useState<CurrentNaverState>(
    {} as CurrentNaverState,
  );
  const [modalVisible, setModalVisible] = useState(false);

  const { state } = useLocation<LocationState>();

  const history = useHistory();

  useEffect(() => {
    api.get(`navers/${state.naver_id}`).then(response => {
      setCurrentNaver(response.data);
    });
  }, [state.naver_id]);

  const handleSubmit = useCallback(
    async (data: SubmitFormData) => {
      try {
        await api.put(`/navers/${state.naver_id}`, {
          name: data.name,
          birthdate: data.birthdate,
          job_role: data.job_role,
          project: data.project,
          admission_date: data.admission_date,
          url: data.url,
        });

        setModalVisible(true);

        setTimeout(() => {
          setModalVisible(false);

          history.goBack();
        }, 2000);
      } catch (err) {
        alert('Preencha todos os campos');
      }
    },
    [history, state.naver_id],
  );

  return (
    <Container>
      <Header />

      <Content>
        <Link to="/home">
          <FiChevronLeft size={30} color="#323232" />
          Editar Naver
        </Link>

        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{
            name: currentNaver.name,
            birthdate: currentNaver.birthdate,
            job_role: currentNaver.job_role,
            project: currentNaver.project,
            admission_date: currentNaver.admission_date,
            url: currentNaver.url,
          }}
        >
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
        title="Naver atualizado"
        description="Naver atualizado com sucesso!"
        onClickBehavior={() => setModalVisible(false)}
      />
    </Container>
  );
};

export { EditNaver };
