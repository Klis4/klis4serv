import React from 'react';
import './footer.css';

function Footer () {
  return (
    <footer class="footer-block" id="footer">
      <div className="container">
        <section class="footer-container">
          <figure className="logo">
            <img src="../../assets/icons/logo.svg" alt="Logo" className="logo-pic"></img>
            <div className="logo-text">
              <h4>Klis4</h4>
              <h5>repairs</h5>
            </div>
          </figure>
          <ul class="footer-navigation">
            <li><a href="#main" class="main-link link">Главная</a></li>
            <li><a href="#services" class="services-link link">Услуги</a></li>
          </ul>
          <ul class="footer-socials">
            <li><a class="facebook-link socials"></a></li>
            <li><a class="instagram-link socials"></a></li>
            <li><a class="telegram-link socials"></a></li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer();