import React from "react";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import MyOrderInfo from "../../components/MyOrderInfo/MyOrderInfo";

class Account extends React.Component {
  
  render() {
    return (
            <div className="container"> 
              <div className="row">
                <div class="col">
                  <AccountInfo />
              </div>
              <div class="col">
                <MyOrderInfo />
              </div>
              </div>
           </div>);
  }
}

export default Account;