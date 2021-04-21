import React from "react";
import {Row, Col} from "antd";
import AccountInfo from "../../components/AccountInfo/AccountInfo";

import DefaultHeader from "../../components/Topnav/DefaultHeader";
import {Helmet} from "react-helmet";
//import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";
import './Account.css'
import ChangeMyDeliveryAddress from "../../components/ChangeMyDeliveryAddress/ChangeMyDeliveryAddress";
import ChangeMyPayment from "../../components/ChangeMyPayment/ChangeMyPayment";
import UserHeader from "../../components/Topnav/UserHeader";
class AccountPayment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowUserHeader: false
        }}
        componentDidMount() {
            if (localStorage.getItem("UID")) {
                this.setState({
                    isShowUserHeader: true
                })
            }
        }
        showUserHeaderHandler = () => {
            const isShow = this.state.isShowUserHeader;
            this.setState({
                isShowUserHeader: !isShow
            });  
        }

  render() {
    return (
            <div className="Acount-container"> 
            <Helmet>
                <style>{'body { background-color: #F5F5F5; }'}</style>
            </Helmet>
            {localStorage.getItem("UID")?<UserHeader 
            showUserHeaderHandler={this.showUserHeaderHandler}
            />:
              <DefaultHeader 
              showUserHeaderHandler={this.showUserHeaderHandler}
              />}
                <Row className="Account-row">

                  <Col className="Account-profile">
                  <AccountInfo />
                  </Col>

                  <Col className="Account-orders">
                  <ChangeMyPayment />
                
                </ Col>
                </ Row>
           </div>
           );
  }
}

export default AccountPayment;