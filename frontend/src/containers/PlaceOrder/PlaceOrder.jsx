import React from "react";
import ConfirmInfo from "../../components/ConfirmInfo/confirmInfo";
import DefaultHeader from "../../components/Topnav/DefaultHeader";

class PlaceOrder extends React.Component {
  render() {
    return(
    <div>
      <DefaultHeader />
      <ConfirmInfo />
    </div>)
    ;
  }
}

export default PlaceOrder;
