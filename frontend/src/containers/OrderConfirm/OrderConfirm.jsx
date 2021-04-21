import React from "react";
import DefaultHeader from "../../components/Topnav/DefaultHeader"
import { Row, Col } from 'antd';
import SmallMap from "../../components/SmallMap/SmallMap"
import ConfirmInfo from "../../components/ConfirmInfo/ConfirmInfo";
import SuccessInfo from "../../components/SuccessInfo/SuccessInfo";
class OrderConfirm extends React.Component {
  
  render() {
    const pCoordinate = JSON.parse(localStorage.getItem("PickupCoordinate"));
    const dCoordinate = JSON.parse(localStorage.getItem("DeliveryCoordinate"));
    console.log("Pickip Co: ", pCoordinate.Coordinate)
    console.log("Delivery Co: ", dCoordinate.Coordinate)
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
                  pickupCoordinate = {pCoordinate.Coordinate}
                  deliveryCoordinate = {dCoordinate.Coordinate}
                  />
                </Col>
               </Row>
           </div>);
  }
}

export default OrderConfirm;