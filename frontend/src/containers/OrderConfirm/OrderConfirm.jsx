import React from "react";
import DefaultHeader from "../../components/Topnav/DefaultHeader"
import { Row, Col } from 'antd';
import SmallMap from "../../components/SmallMap/SmallMap"
import ConfirmInfo from "../../components/ConfirmInfo/ConfirmInfo";
import SuccessInfo from "../../components/SuccessInfo/SuccessInfo";
class OrderConfirm extends React.Component {
  
  render() {
    const pCoordinate = localStorage.getItem("PickupCoordinate");
    const dCoordinate = localStorage.getItem("DeliveryCoordinate");
    return (
            <div> 
              <DefaultHeader />
              <Row className="order-confirm-boday">
                <Col span={12} 
                      ><SuccessInfo /></Col>
                <Col span={12}
                     className="order-confirm-map"
                >
                  <SmallMap 
                  pickupCoordinate = {pCoordinate}
                  deliveryCoordinate = {dCoordinate}
                  />
                </Col>
               </Row>
           </div>);
  }
}

export default OrderConfirm;