import React from 'react';
import './header.css';

function Header () {
  return (
    <header className="header container">
      <figure className="logo">
        <img src="../../assets/icons/logo.svg" alt="Logo" className="logo-pic"></img>
        <div className="logo-text">
          <h4>Klis4</h4>
          <h5>repairs</h5>
        </div>
      </figure>
      <ul className="nav-panel">
        <li><a className="services-link">Услуги</a></li>
        <li><a className="contacts-link">Контакты</a></li>
        <li><button type="button" className="order-btn">Заказать</button></li>
      </ul>
    </header>
  );
}

export default Header();