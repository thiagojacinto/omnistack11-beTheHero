import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logo from '../../assets/logo.svg'

import './profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be The Hero"/>
        <span>Welcome, NGO_NAME</span>

        <Link to="/incidents/new" className="button">Register a new incident</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Incidents:</h1>

      <ul>
        <li>
          <strong>CASE:</strong>
          <p>test test test</p>

          <strong>DESCRIPTION:</strong>
          <p>test test test test test</p>

          <strong>VALUE:</strong>
          <p>R$ test test test</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASE:</strong>
          <p>test test test</p>

          <strong>DESCRIPTION:</strong>
          <p>test test test test test</p>

          <strong>VALUE:</strong>
          <p>R$ test test test</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        
        <li>
          <strong>CASE:</strong>
          <p>test test test</p>

          <strong>DESCRIPTION:</strong>
          <p>test test test test test</p>

          <strong>VALUE:</strong>
          <p>R$ test test test</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        
        <li>
          <strong>CASE:</strong>
          <p>test test test</p>

          <strong>DESCRIPTION:</strong>
          <p>test test test test test</p>

          <strong>VALUE:</strong>
          <p>R$ test test test</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        
      </ul>
    </div>
  );
}
