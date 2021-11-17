import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import './style.css';

console.log(Header);
ReactDOM.render(
  [
    Header, 
    Main
  ],
  document.querySelector('#root'),
);
