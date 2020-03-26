import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/logo.svg'

import './profile.css';

export default function Profile() {

  // gets NGO info from localStorage:
  const ngoName = localStorage.ngoName;
  const ngoId = localStorage.ngoId;

  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  // load incidents: only happens once = `[]` at final (empty dependencies)
  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ngoId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ngoId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`,
        {
          headers: {
            Authorization: ngoId,
          }
        }
      );
        // updates incidents array, filtering that one that was deleted
      setIncidents(incidents.filter(incident => incident.id !== id));

    } catch (error) {
      alert('Error: DELETE was unsuccessful, try again.')
    }
  }

  function handleLogout() {
    localStorage.clear(); // erase all local storage;
    // redirects back to login
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span>Welcome, {ngoName}</span>

        <Link to="/incidents/new" className="button">Register a new incident</Link>
        <button type="button" onClick={ handleLogout }>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Incidents Dashboard:</h1>

      <ul>

        {incidents && incidents.map(incident => {
          return (
            <li key={incident.id}>
              <strong>CASE:</strong>
              <p>{incident.title}</p>

              <strong>DESCRIPTION:</strong>
              <p>{incident.description}</p>

              {/* Formatting with BRL value using a global lib */}
              <strong>VALUE:</strong>
              <p>{Intl.NumberFormat(
                'pt-BR', 
                { style: 'currency', 
                currency: 'BRL', 
                }).format(incident.value)}</p>

              <button type="button" onClick={ () => handleDeleteIncident(incident.id) }>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          )
        })}

      </ul>
    </div>
  );
}
