import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from './components/Router/ReactRouter';
import { BrowserRouter } from 'react-router-dom';
// import TrackingNumberHeader from './components/Topnav/TrackingNumberHeader.jsx';
// import DefaultHeader from './components/Topnav/DefaultHeader.jsx';
// import DeliveryAddressHeader from './components/Topnav/DefaultHeader.jsx';

ReactDOM.render(
  <BrowserRouter>
    <ReactRouter />
  </BrowserRouter>,
  document.getElementById('root')
);

