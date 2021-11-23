import React from 'react';
import './footer.css';

function Footer () {
  return (
    <footer className="footer-block" id="footer">
      <div className="container">
        <section className="footer-container">
          <figure className="logo">
            <img src="../../assets/icons/logo.svg" alt="Logo" className="logo-pic"></img>
            <div className="logo-text">
              <h4>Klis4</h4>
              <h5>repairs</h5>
            </div>
          </figure>
          <ul className="footer-navigation">
            <li key="1"><a href="#main" className="main-link link">Главная</a></li>
            <li key="2"><a href="#services" className="services-link link">Услуги</a></li>
          </ul>
          <ul className="footer-socials">
            <li key="1"><a className="facebook-link socials"></a></li>
            <li key="2"><a className="instagram-link socials"></a></li>
            <li key="3"><a className="telegram-link socials"></a></li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer();