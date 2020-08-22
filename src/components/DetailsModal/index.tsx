import React, { useState, useCallback, useMemo } from 'react';
import { FiTrash2, FiEdit2, FiX } from 'react-icons/fi';
import { parseISO, format } from 'date-fns';

import { DetailsModalOverlay, DetailsCard, DeleteCard } from './styles';

interface Naver {
  name: string;
  admission_date: string;
  job_role: string;
  project: string;
  birthdate: string;
  url: string;
}

interface ModalProps {
  isVisible: boolean;
  naver: Naver;
  closeBevahior: any;
  deleteBehavior: any;
  editBehavior: any;
}

const DetailsModal: React.FC<ModalProps> = ({
  isVisible,
  naver,
  closeBevahior,
  deleteBehavior,
  editBehavior,
}) => {
  const [deleteVisible, setDeleteVisible] = useState(false);

  const toggleDeleteModal = useCallback(() => {
    setDeleteVisible(deleteVisible === false);
  }, [deleteVisible]);

  const parsedNaverBithdate = useMemo(() => {
    const today = new Date();
    const todayYear = format(today, 'yyyy');

    const year = parseISO(naver.birthdate).getFullYear();

    return `${Number(todayYear) - year}`;
  }, [naver.birthdate]);

  const parsedJobTime = useMemo(() => {
    const today = new Date();

    const todayMonth = format(today, 'MM');

    const naverMonthTime = parseISO(naver.admission_date).getMonth();

    return `${Number(todayMonth) - naverMonthTime}`;
  }, [naver.admission_date]);

  return (
    <DetailsModalOverlay isVisible={isVisible}>
      {deleteVisible === false && (
        <DetailsCard>
          <button type="button" onClick={closeBevahior}>
            <FiX size={22} color="#323232" />
          </button>

          <img src={naver.url} alt={naver.name} />

          <div>
            <h3>{naver.name}</h3>
            <h4>{naver.job_role}</h4>

            <span>Idade</span>
            <p>{parsedNaverBithdate} anos</p>

            <span>Tempo de empresa</span>
            <p>
              {parsedJobTime} {parsedJobTime === '1' ? 'mês' : 'meses'}
            </p>

            <span>Projetos que participou</span>
            <p>{naver.project}</p>

            <div>
              <button type="button" onClick={toggleDeleteModal}>
                <FiTrash2 size={22} color="#323232" />
              </button>

              <button type="button" onClick={editBehavior}>
                <FiEdit2 size={22} color="#323232" />
              </button>
            </div>
          </div>
        </DetailsCard>
      )}

      <DeleteCard deleteVisible={deleteVisible}>
        <h3>Exluir naver</h3>
        <p>Tem certeza que deseja exluir esse naver?</p>

        <div>
          <button type="button" onClick={toggleDeleteModal}>
            Cancelar
          </button>

          <button type="button" onClick={deleteBehavior}>
            Excluir
          </button>
        </div>
      </DeleteCard>
    </DetailsModalOverlay>
  );
};

export { DetailsModal };
