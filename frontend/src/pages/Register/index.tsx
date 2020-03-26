import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import { Container, Content, BackIcon, InputGroup, Button } from './styles';

import logoImg from '../../assets/logo.svg'

const Register: React.FC = () => {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ whatsapp, setWhatsapp ] = useState('')
  const [ cidade, setCidade ] = useState('')
  const [ uf, setUf ] = useState('')

  const history = useHistory()

  async function handleRegister (e: React.FormEvent<HTMLElement>) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      cidade,
      uf
    };

    try {
      const response = await api.post('ongs', data)

      alert(`Seu ID de Acesso: ${response.data.id}`)

      history.push('/')
    } catch (error) {
      alert('Erro no cadastro tente novamente!')
    }

    
    
  }
  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="be the hero"/>
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e
            ajude a pessoa a encontrarem os casos
            da sua ONG.
          </p>

          <Link to="/"><BackIcon size={16} color='#E02041' />Voltar para o logon</Link>
        </section>
        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome da Ong"
            value={name}
            onChange={e => setName(e.target.value)}
            />
          <input 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
          <input 
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            />

          <InputGroup>
            <input 
              placeholder="Cidade"
              value={cidade}
              onChange={e => setCidade(e.target.value)}
              />
            <input 
              placeholder="UF" 
              style={{ width: 80 }} 
              value={uf}
              onChange={e => setUf(e.target.value)}
              />
          </InputGroup>

          <Button type="submit"> Cadastrar </Button>

        </form>
      </Content>
    </Container>
  )
}

export default Register;