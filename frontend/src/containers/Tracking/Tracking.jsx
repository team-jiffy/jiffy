import React from "react";
import { Row, Col } from 'antd'
import DefaultHeader from '../../components/Topnav/DefaultHeader'
import OrderTrackingProcess from '../../components/OrderTrackingProcess/OrderTrackingProcess'
import { Layout } from 'antd'

const {Content} = Layout;
class Tracking extends React.Component {
  
  render() {
    return (
            <div>
                <DefaultHeader/>
                <Row>
                    <Col span={12}>
                        <OrderTrackingProcess/>
                    </Col>
                    <Col span={12}>
                        <Content className='right' style={{ padding: '50px 50px', minHeight: 549 }}>
                            <div className='map'>
                                MAP
                            </div>
                        </Content>
                    </Col>
                </Row>
            </div>);
  }
}

export default Tracking;