import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import AddressBox from './components/AddressBox';
import About from './components/About';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AddressBox />
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);

