import React, { useState } from "react";
import { useAuth } from '../../hooks/auth';

import logo from '../../assets/logo.png';

import { Container, Content } from "./styles";

const Logon: React.FC = () => {

  const [cpf, setCpf] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();

  return (
  <Container>
    <Content>
      <img src={logo} alt="logo" />

        <form onSubmit={async (e) => {
          e.preventDefault()
          await signIn(cpf, password)
        }}>
        <h1>Faça seu Logon</h1>

          <input
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        
        <button type="submit" >Acessar</button>
      </form>
    </Content>
    </Container>
  )};

export default Logon;