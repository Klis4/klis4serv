import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import Services from './components/services/services.jsx';
import Footer from './components/footer/footer.jsx';
import './style.css';

console.log(Header);
ReactDOM.render(
  [
    Header, 
    Main, 
    Services,
    Footer,
  ],
  document.querySelector('#root'),
);
