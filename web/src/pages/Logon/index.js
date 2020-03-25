import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './login.css';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        
        <img src={logo} alt="Be The Hero"/>

        <form action="">
          <h1>Welcome</h1>

          <input placeholder="Type desired NGO`s ID." />
          <button className="button" type="submit">Enter</button>

          <Link className="default-link" to="/register">
            <FiLogIn size={20} color="#E02041" />
            Or register here.
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes all togheter"/>
    </div>
  );
}