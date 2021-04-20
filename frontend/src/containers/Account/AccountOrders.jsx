import React from "react";
import {Row, Col} from "antd";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import MyOrderInfo from "../../components/MyOrderInfo/MyOrderInfo";
import DeliveryAddressHeader from "../../components/Topnav/DeliveryAddressHeader";
import DefaultHeader from "../../components/Topnav/DefaultHeader";
import {Helmet} from "react-helmet";
//import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";
import './Account.css'

class AccountOrders extends React.Component {
  render() {
    return (
            <div className="Acount-container"> 
            <Helmet>
                <style>{'body { background-color: #F5F5F5; }'}</style>
            </Helmet>
              <DefaultHeader />
                <Row className="Account-row">

                  <Col className="Account-profile">
                  <AccountInfo />
                  </Col>

                  <Col className="Account-orders">
                  
                <MyOrderInfo />
                </ Col>
                </ Row>
           </div>
           );
  }
}

export default AccountOrders;