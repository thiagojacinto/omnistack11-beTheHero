import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg'

import './newIncident.css';

export default function NewIncident() {
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

        <form>
          <input placeholder="Title" />
          <textarea placeholder="Description" />
          <input placeholder="Value (Brazillian R$)" />

          <button className="button" type="submit">
            Register
          </button>
        </form>

      </div>
    </div>
  );
}
