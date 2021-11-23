import React from 'react';
import OurServices from './ourServices.jsx';
import SendOrder from './sendOrder.jsx';
import Requests from '../../modules/Requests';
import './services.css';


// function sendOrder () {
//   const data = Requests.getOne('619b5fb66f62ab081d850d5d');
//   console.log(data.args);
//   const all = data.then(response => response.name)
//   console.log("all: " + all);
//   // console.log(data.then(responce => {
//   //   console.log(responce.name)
//   // }));
// }


function Services () {
  return (
    <section className="services" id="services">
      <OurServices />
      <SendOrder />
    </section>
  );
}

export default Services();