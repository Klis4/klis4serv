import React from 'react';
import './sendOrder.css';

function SendOrder () {
  return (  
    <div className="container">
      <div className="send-order">
        <h3 className="send-order-header">Оставить заявку на консультацию</h3>
        <div className="send">
          <input type="text" placeholder="Фамилия и имя" className="name-field"></input>
          <input type="text" placeholder="+375 (XX) XXX-XX-XX" className="phone-field"></input>
          <button type="submit" className="send-btn">Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default SendOrder;