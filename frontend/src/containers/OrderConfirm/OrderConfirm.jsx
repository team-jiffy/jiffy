import React from "react";
import DefaultHeader from "../../components/Topnav/DefaultHeader"
import { Row, Col } from 'antd';
import SmallMap from "../../components/SmallMap/SmallMap"
class OrderConfirm extends React.Component {
  
  render() {
    return (
            <div> 
              <DefaultHeader />
              <Row className="order-confirm-boday">
                <Col span={12} 
                      >Order Info</Col>
                <Col span={12}
                     className="order-confirm-map"
                >
                  <SmallMap />
                </Col>
               </Row>
           </div>);
  }
}

export default OrderConfirm;