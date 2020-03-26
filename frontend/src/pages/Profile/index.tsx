import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import { Container, ButtonLink, PowerIcon, CaseList } from './styles';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

interface Incidents {
  id: number;
  title: string;
  description: string;
  value: number;
}

const Profile = () => {

  const history = useHistory()

  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  const [incidents, setIncidents] = useState<Incidents[]>([])

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId])

  async function handleDeleteIncident(id: number) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      })

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (error) {
      alert('Erro ao deletar caso tente novamente!')
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/')
  }

  return (
    <Container>
      <header>
        <img src={logoImg} alt="be the hero"/>
  <span>Bem vinda, { ongName }</span>
        <ButtonLink to="/incidents/new">Cadastrar novo caso</ButtonLink>
        <button type="button" onClick={handleLogout}><PowerIcon size={18} color="#E02041"/></button>
      </header>

      <h1>Casos Cadastrados</h1>

      <CaseList>
        { incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO: </strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO: </strong>
            <p>{incident.description}</p>

            <strong>VALOR: </strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

          <button type="button" onClick={() => handleDeleteIncident(incident.id)}><FiTrash2 size={20} color="a8a8a3" /></button>
        </li>
        ))}
      </CaseList>
    </Container>
  );
}

export default Profile;