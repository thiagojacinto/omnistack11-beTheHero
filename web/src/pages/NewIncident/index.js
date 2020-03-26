import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/logo.svg'

import './newIncident.css';

export default function NewIncident() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ngoId = localStorage.getItem('ngoId');

  const history = useHistory();

  function handleNewIncident(event) {
    event.preventDefault();

    const data = {
      title, description, value
    }

    try {

      api.post('/incidents', data, {
        headers: {
          Authorization: ngoId,
        }
      });

      history.push("/profile");

    } catch (error) {
      alert('Error: Incident not saved. Try again.')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />

          <h1>Register new incident</h1>

          <p>Register the incident with the information you want to share with volunteers.</p>

          <Link className="default-link" to="/profile">
            <FiArrowLeft size={20} color="#E02041" />
            Back
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Title" 
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <textarea 
            placeholder="Description" 
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
          <input 
            placeholder="Value (Brazillian R$)" 
            value={value}
            onChange={event => setValue(event.target.value)}
          />

          <button 
            className="button" 
            type="submit"
          >
            Register
          </button>
        </form>

      </div>
    </div>
  );
}
