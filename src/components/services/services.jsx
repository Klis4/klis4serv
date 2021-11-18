import React from 'react';
import './services.css';

function Services () {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="our-services" id="articles">
          <h2 className="our-services-header">Наши услуги</h2> 
          <div className="slider-images">
            <div className="slide">
              <img src="../../assets/icons/pc.svg" alt="Pic." className="slide-image"></img>
              <h4 className="slide-header">Ремонт компьютера</h4>  
            </div>
            <div className="slide">
              <img src="../../assets/icons/phone.svg" alt="Pic." className="slide-image"></img>
              <h4 className="slide-header">Ремонт телефона</h4>  
            </div>
            <div className="slide">
              <img src="../../assets/icons/laptop.svg" alt="Pic." className="slide-image"></img>
              <h4 className="slide-header">Ремонт ноутбука</h4>  
            </div>
          </div>
        </div>

        <div className="get-notified">
          <h3 className="get-notified-header">Оставить заявку на консультацию</h3>
          <div className="send-notification">
            <input type="text" placeholder="Фамилия и имя" className="name-field"></input>
            <input type="text" placeholder="+375 (XX) XXX-XX-XX" className="phone-field"></input>
            <button type="submit" className="send-btn">Отправить</button>
          </div>
        </div>
      </div>  
    </section>
  );
}

export default Services();