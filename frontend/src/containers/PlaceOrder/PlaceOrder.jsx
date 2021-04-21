import React from "react";
import { Row, Col } from 'antd';
import SmallMap from "../../components/SmallMap/SmallMap"
import ConfirmInfo from "../../components/ConfirmInfo/confirmInfo";
import DefaultHeader from "../../components/Topnav/DefaultHeader";
import "./PlaceOrder.css"

  
class PlaceOrder extends React.Component {
  
  render() {
    const pCoordinate = JSON.parse(localStorage.getItem("PickupCoordinate"));
    const dCoordinate = JSON.parse(localStorage.getItem("DeliveryCoordinate"));
    console.log("Pickip Co: ", pCoordinate)
    console.log("Delivery Co: ", dCoordinate)
    return(
    <div>
      <DefaultHeader />
              <Row className="place-order-boday">
                <Col span={12} 
                      >  <ConfirmInfo /></Col>
                <Col span={12}
                     className="place-order-map"
                >
                  <SmallMap 
                  pickupCoordinate = {pCoordinate}
                  deliveryCoordinate = {dCoordinate}
                  />
                </Col>
               </Row>
    </div>)
    ;
  }
}

export default PlaceOrder;
