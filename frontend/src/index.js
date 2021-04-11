import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from './components/Router/ReactRouter';
import { BrowserRouter } from 'react-router-dom';
// import TrackingNumberHeader from './components/Topnav/TrackingNumberHeader.jsx';
// import DefaultHeader from './components/Topnav/DefaultHeader.jsx';
import LandingPage from './containers/LandingPage/LandingPage';
import AddressBox from './containers/LandingPage/AddressBox';
import DeliveryAddressHeader from './components/Topnav/DeliveryAddressHeader.jsx';

ReactDOM.render(
  <BrowserRouter>
    {/* Use Router instead of <LandingPage /> */}
    <ReactRouter /> 
   
  </BrowserRouter>,
  document.getElementById('root')
);

