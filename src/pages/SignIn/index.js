import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import logo from '~/assets/logo.svg';

function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}

export default SignIn;
