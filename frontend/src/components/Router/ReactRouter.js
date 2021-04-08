import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../../containers/LandingPage/LandingPage';
import Account from '../../containers/Account/Account';
import DeliveryInfo from '../../containers/DeliveryInfo/DeliveryInfo';
import OrderConfirm from '../../containers/OrderConfirm/OrderConfirm';
import PlaceOrder from '../../containers/PlaceOrder/PlaceOrder';
import Recommend from '../../containers/Recommend/Recommend';
import SignPage from '../../containers/SignPage/SignPage';
import Tracking from '../../containers/Tracking/Tracking';



class ReactRouter extends Component {
    render() {
        return (
            <div> 
                
                    <Switch>
                        <Route path="/" component={LandingPage} exact />  
                        <Route path="/Account" component={Account} exact />
                        <Route path="/DeliveryInfo" component={DeliveryInfo} exact />
                        <Route path="/OrderConfirm" component={OrderConfirm} exact />
                        <Route path="/PlaceOrder" component={PlaceOrder} exact />
                        <Route path="/Recommend" component={Recommend} exact />
                        <Route path="/SignPage" component={SignPage} exact />
                        <Route path="/Tracking" component={Tracking} exact />
                    </Switch>
             
            </div>
        );
    }
}

export default ReactRouter;