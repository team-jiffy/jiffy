import React from "react";
import "./DeliveryInfo.css";
import DefaultHeader from "../../components/Topnav/DefaultHeader";
import DeliveryInfoForm from "../../components/DelieveryInfoForm/DelieveryInfoForm";


class DeliveryInfo extends React.Component {
  
  render() {
    return (
            <div className="deliveryInfo-container"> 
            <DefaultHeader />
            <DeliveryInfoForm />
            <div> delivery</div>
           </div>);
  }
}

export default DeliveryInfo;