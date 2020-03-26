import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './login.css';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon() {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('session', { id });

      console.log(response.data.name);  // debug: NGO`s name

      // saves that info into browser local storage:
      localStorage.setItem('ngoId', id);
      localStorage.setItem('ngoName', response.data.name);
      
      // redirects into profile route:
      history.push('/profile');

    } catch (error) {
      alert('Error: ID not found.')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        
        <img src={logo} alt="Be The Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Welcome</h1>

          <input 
            placeholder="Type desired NGO`s ID." 
            value={id}
            onChange={e => setId(e.target.value)}
          />
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