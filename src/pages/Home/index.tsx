import React, { useState, useEffect, useCallback } from 'react';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { DetailsModal } from '../../components/DetailsModal';
import { Modal } from '../../components/Modal';

import { Container, Content } from './styles';

interface NaversState {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  user_id: string;
  project: string;
  birthdate: string;
  url: string;
}

const Home: React.FC = () => {
  const [navers, setNavers] = useState<NaversState[]>([]);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [detailsNaver, setDetailsNaver] = useState<NaversState>(
    {} as NaversState,
  );
  const [messageModal, setMessageModal] = useState(false);

  const history = useHistory();

  const handleDeleteNaver = useCallback(async (id: string) => {
    await api.delete(`/naver/${id}`);

    setDetailsVisible(false);
    setMessageModal(true);

    setTimeout(() => {
      setMessageModal(false);
    }, 2000);
  }, []);

  useEffect(() => {
    api
      .get('/navers')
      .then(response => {
        setNavers(response.data);
      })
      .catch(err => {
        console.log('[ERR_LOADING_NAVERS]: ', err);
      });
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <header>
          <h1>Navers</h1>
          <button type="button" onClick={() => history.push('/add-naver')}>
            Adicionar Naver
          </button>
        </header>

        <section>
          {navers &&
            navers.map(naver => (
              <div
                key={naver.id}
                onClick={() => {
                  setDetailsNaver(naver);
                  setDetailsVisible(true);
                }}
              >
                <img src={naver.url} alt={naver.name} />

                <h4>{naver.name}</h4>
                <p>{naver.job_role}</p>

                <div>
                  <button type="button">
                    <FiTrash2 size={20} color="#323232" />
                  </button>

                  <button type="button">
                    <FiEdit2 size={20} color="#323232" />
                  </button>
                </div>
              </div>
            ))}
        </section>
      </Content>

      <DetailsModal
        isVisible={detailsVisible}
        naver={detailsNaver}
        deleteBehavior={() => handleDeleteNaver(detailsNaver.id)}
        editBehavior={
          () =>
            history.push('edit-naver', {
              naver_id: detailsNaver.id,
            })
          // eslint-disable-next-line react/jsx-curly-newline
        }
        closeBevahior={() => setDetailsVisible(false)}
      />

      <Modal
        title="Naver excluído"
        description="Naver excluído com sucesso!"
        isVisible={messageModal}
        onClickBehavior={() => setMessageModal(false)}
      />
    </Container>
  );
};

export { Home };
