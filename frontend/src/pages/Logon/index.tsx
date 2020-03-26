import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, Button, LoginIcon } from './styles';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';

const Logon: React.FC = () => {
  const [ id, setId ] = useState('')
  const history = useHistory()

  async function handleLogin(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile')
    } catch (error) { 
      alert('Falha no Login tente novamente!')
    }

  }
  return (
    <Container>
      <section>
        <img src={logoImg} alt="Be the hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
            />
          <Button type="submit">Entrar</Button>

          <Link to="/register"><LoginIcon size={16} color='#E02041' />Não tenho cadastro</Link>
        </form>
      </section>

      <img src={heroesImg} alt="Logo"/>
    </Container>
  );
}

export default Logon;