import React from "react";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import MyOrderInfo from "../../components/MyOrderInfo/MyOrderInfo";
import ChangeMyDeliveryAddress from "../../components/ChangeMyDeliveryAddress/ChangeMyDeliveryAddress";

class AccountEditAddress extends React.Component {
  render() {
    return (
            <div className="container"> 
              <div className="row">
                <div class="col">
                  <AccountInfo />
              </div>
              <div class="col">
                <ChangeMyDeliveryAddress />
              </div>
              </div>
           </div>);
  }
}

export default AccountEditAddress;