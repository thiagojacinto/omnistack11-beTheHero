import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/logo.svg'

import './register.css';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [stateUF, setStateUF] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();
    let state = stateUF
    const data = {
      name, email, phone, city, state,
    };

    try {
      const response = await api.post('ngos', data);
      alert(`Congrats. Your ID is: ${response.data.id}`);
      // redirects user to start page:
      history.push('/');
    } catch (err) {
      alert('Error: Something went wrong, try again.')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />

          <h1>Register</h1>

          <p>Register your NGO, enter this largest plataform and help people to find a way to help you.</p>

          <Link className="default-link" to="/">
            <FiArrowLeft size={20} color="#E02041" />
            Or login, if you already have one ID.
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            placeholder="NGO`s name" 
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="NGO`s email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            placeholder="NGO`s phone" 
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
      
          <div className="input-group">
            <input 
              placeholder="City" 
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input 
              placeholder="State" 
              style={{ width: 100 }} 
              value={stateUF}
              onChange={e => setStateUF(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Register
          </button>
        </form>

      </div>
    </div>
  );
}
