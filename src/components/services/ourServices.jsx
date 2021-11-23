import React from 'react';
import './ourServices.css';

function ourServices () {
  return (
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
      </div> 
  )
}

export default ourServices;