import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from './components/Router/ReactRouter';
import { BrowserRouter } from 'react-router-dom';
/* the following imports are used for testing pruposes @author xren935*/
// import TrackingNumberHeader from './components/Topnav/TrackingNumberHeader.jsx';
// import DefaultHeader from './components/Topnav/DefaultHeader.jsx';
// import LandingPage from './containers/LandingPage/LandingPage';
// import AddressBox from './containers/LandingPage/AddressBox';
// import DeliveryAddressHeader from './components/Topnav/DeliveryAddressHeader.jsx';
import ChangeMyDeliveryAddress from './components/ChangeMyDeliveryAddress/ChangeMyDeliveryAddress.jsx';

ReactDOM.render(
  <BrowserRouter>
   <ChangeMyDeliveryAddress />
  </BrowserRouter>,
  document.getElementById('root')
);

