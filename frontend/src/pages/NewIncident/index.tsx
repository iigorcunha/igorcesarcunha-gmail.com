import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, Content, BackIcon, Button } from './styles';

import logoImg from '../../assets/logo.svg'

const NewIncident: React.FC = () => {

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [value, setValue] = useState<string>('');

  const ongId = localStorage.getItem('ongId')

  const history = useHistory()

  async function handleNewIncident(e: React.FormEvent<HTMLElement>) {
    
    e.preventDefault();

    const data = {
      title,
      description,
      value
    }

    try {
      
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })

      history.push('/profile')
    } catch (error) {
      alert('Erro ao cadastrar caso tente novamente!')
    }

  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="be the hero"/>
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar
            um herói para resolver isso.
          </p>

          <Link to="/profile"><BackIcon size={16} color='#E02041' />Voltar para home</Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
            />

          <Button type="submit"> Cadastrar </Button>

        </form>
      </Content>
    </Container>
  )
}

export default NewIncident;