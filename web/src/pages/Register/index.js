import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg'

import './register.css';

export default function Register() {
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

        <form>
          <input placeholder="NGO`s name" />
          <input type="email" placeholder="NGO`s email" />
          <input placeholder="NGO`s phone" />
      
          <div className="input-group">
            <input placeholder="City" />
            <input placeholder="State" style={{ width: 100 }} />
          </div>

          <button className="button" type="submit">
            Register
          </button>
        </form>

      </div>
    </div>
  );
}
