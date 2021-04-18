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
import ChangeMyPickupAddress from './components/ChangeMyPickupAddress/ChangeMyPickupAddress.jsx';
import ChangeMyPayment from './components/ChangeMyPayment/ChangeMyPayment.jsx';

import DeliveryInfo from './containers/DeliveryInfo/DeliveryInfo';
import SignIn from './components/SignIn/SignIn';

import LandingPage from './containers/LandingPage/LandingPage';

ReactDOM.render(
  <BrowserRouter>
    <ReactRouter />
    {/* <DeliveryInfo /> */}
   {/* <ChangeMyDeliveryAddress /> */}
   {/* <ChangeMyDeliveryAddress />
   <ChangeMyPickupAddress />  */}
   {/* <ChangeMyPayment /> */}
   {/* <DeliveryInfo /> */}
    {/* <SignUp /> */}
    {/* <SignIn /> */}
    {/* <LandingPage /> */}
  </BrowserRouter>,
  document.getElementById('root')
);

