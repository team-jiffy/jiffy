import React, {Component} from 'react';
import './OrderTrackingProcess.css';
import { Timeline, Row, Col, Button } from 'antd';



class OrderTrackingProcess extends Component {
    render() {
        return (
            <div className='container'>
                <Row className='orderStatus'>
                    <Col span={8} offset={4}>
                        <a style={{fontWeight: 'bold'}}>Order Status</a>
                    </Col>

                    <Col span={12}>
                        <Timeline>
                            <Timeline.Item dot={<div className='quan'/>}>Order placed</Timeline.Item>
                            <Timeline.Item dot={<div className='quan'/>}>Package picked up</Timeline.Item>
                            <Timeline.Item dot={<div className='quan-active'/>}><a style={{fontWeight: 'bold'}}>On delivery</a></Timeline.Item>
                            <Timeline.Item dot={<div className='quan'/>}>
                                <p>Estimated to deliver at</p>
                                <p>2:00 p.m, Friday, March 26, 2021</p>
                            </Timeline.Item>
                        </Timeline>
                    </Col>
                </Row>

                <Row className='line2'>
                    <Col span={8} offset={4}>
                        <a style={{fontWeight: 'bold'}}>Tracking Number</a>
                    </Col>
                    <Col>
                        Wasdflasd35dfas
                    </Col>
                </Row>

                <Row className='line3'>
                    <Col span={8} offset={4}>
                        <a style={{fontWeight: 'bold'}}>To </a>
                    </Col>

                    <Col>
                        <p>machs@zippy.com</p>
                        <p>987-654-3210</p>
                        <p>896 Drokro market, Los Angeles, CA, 96053</p>
                    </Col>
                </Row>

                <Row className='line4'>
                    <Col span={8} offset={4}>
                        <a style={{fontWeight: 'bold'}}>Your deliver pal</a>
                    </Col>
                    <Col>
                        Drodro(drone)
                    </Col>
                </Row>

                <Row>
                    <Col span={12} offset={8}>
                        <Button type="primary" className='button'>Request Delivery</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default OrderTrackingProcess;