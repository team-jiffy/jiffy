import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import AddressBox from './components/Header/AddressBox';
import About from './components/About/About';
import DefaultFooter from './components/DefaultFooter/DefaultFooter';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AddressBox />
    <About />
    <DefaultFooter />
  </React.StrictMode>,
  document.getElementById('root')
);

