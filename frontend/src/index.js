import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import AddressBox from './components/Header/AddressBox';
import About from './components/About/About';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AddressBox />
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);

