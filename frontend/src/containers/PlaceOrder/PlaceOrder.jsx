import React from "react";
import { Row, Col } from 'antd';
import SmallMap from "../../components/SmallMap/SmallMap"
import ConfirmInfo from "../../components/ConfirmInfo/ConfirmInfo";
import DefaultHeader from "../../components/Topnav/DefaultHeader";
import "./PlaceOrder.css"

class PlaceOrder extends React.Component {
  render() {
    return(
    <div>
      <DefaultHeader />
              <Row className="place-order-boday">
                <Col span={12} 
                      >  <ConfirmInfo /></Col>
                <Col span={12}
                     className="place-order-map"
                >
                  <SmallMap />
                </Col>
               </Row>
    </div>)
    ;
  }
}

export default PlaceOrder;
