import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import logo from '~/assets/logo.svg';

function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}

export default SignUp;
