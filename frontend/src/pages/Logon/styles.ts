import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi'

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;

    form {
      margin-top: 100px;

      h1 {
        font-size: 32px;
        margin-bottom: 32px;
      }

      
    }
  }
`;


export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;

  &:hover {
    filter: brightness(90%);
  }

`;

export const LoginIcon = styled(FiLogIn)`
  margin-right: 8px;
`;