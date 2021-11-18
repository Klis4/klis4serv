import React from 'react';
import './main.css'

function Main () {
  return (
    <main className="container"  id="main">
      <section className="main">
        <div className="main-logo">
          <h2>Klis4</h2>
          <h3>repairs</h3>
        </div>
        <p className="main-caption">Мастерская с многолетним стажем ремонта электроники, начиная от персональных компьютеров заканчивая носимой электроникой. Окажем быстрое и качественное обслуживание или ремонт ваших устройств.</p>
        <button type="button" className="order-btn">Заказать</button>
      </section>
      <section className="main-icons">
        <img src="../../assets/icons/laptop.svg" alt="laptop" className="laptop-icon"></img>
        <img src="../../assets/icons/pc.svg" alt="pc" className="pc-icon"></img>
        <img src="../../assets/icons/phone.svg" alt="phone" className="phone-icon"></img>
      </section>
    </main>
  )
}

export default Main();