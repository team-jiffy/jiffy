import React from "react";
import "./ChangeMyDeliveryAddress/ChangeMyDeliveryAddress.css";

class ChangeMyPickupAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="change-address-or-payment">
          <div className="change-title">
            Change My Pickup Address
            
          </div>
          <hr className="line3"></hr>
      </div>
    );
  }
}

export default ChangeMyPickupAddress;
