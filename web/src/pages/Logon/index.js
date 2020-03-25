import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import './login.css';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        
        <img src={logo} alt="Be The Hero"/>

        <form action="">
          <h1>Entrar</h1>

          <input placeholder="Digite a sua ID." />
          <button className="button" type="submit">Entrar</button>

          <a href="/register">
            <FiLogIn size={20} color="#E02041" />
            Ou cadastre-se aqui
          </a>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes all togheter"/>
    </div>
  );
}