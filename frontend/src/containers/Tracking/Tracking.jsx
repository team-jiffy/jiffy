import React from "react";
import { Row, Col } from 'antd'
import DefaultHeader from '../../components/Topnav/DefaultHeader'
import OrderTrackingProcess from '../../components/OrderTrackingProcess/OrderTrackingProcess'
import { Layout } from 'antd'
import SmallMap from "../../components/SmallMap/SmallMap";

const {Content} = Layout;
class Tracking extends React.Component {
  
  render() {
    return (
            <div>
                <DefaultHeader/>
                <div className="Tracking-body">
                <Row >
                    <Col  span={14} className="Tracking-status">
                        <OrderTrackingProcess/>
                    </Col>
                    <Col span={10} classNam="Tracking-map" >
                        {/* <Content className='right' style={{ padding: '50px 50px', minHeight: 549 }}> */}
                            <div className='map'>
                              <SmallMap />
                            </div>
                        {/* </Content> */}
                    </Col>
                </Row>
                </div>
            </div>);
  }
}

export default Tracking;