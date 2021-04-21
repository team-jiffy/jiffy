import React, {Component} from 'react';
import './OrderTrackingProcess.css';
import { Timeline, Row, Col, Button } from 'antd';



class OrderTrackingProcess extends Component {
    
    // addressHandler = () => {
    //     const addr = 
    //     return 
    // }
    orderStatusHandler = (status) => {
        if (status == "on delivery") {
            return (
                <Timeline>
                            
                <Timeline.Item dot={<div className='quan'/>}>Order placed</Timeline.Item>
                <Timeline.Item dot={<div className='quan'/>}>Package picked up</Timeline.Item>
                <Timeline.Item dot={<div className='quan-active'/>}><a style={{fontWeight: 'bold'}}>On delivery</a></Timeline.Item>
                <Timeline.Item dot={<div className='quan'/>}>
                    <p>Estimated to deliver at</p>
                    <p>2:00 p.m, Wen, Apr 22, 2021</p>
                </Timeline.Item>
            </Timeline>
            );
        } else if (status == "order placed") {
            return (
                <Timeline>
                            
                <Timeline.Item dot={<div className='quan-active'/>}><a style={{fontWeight: 'bold'}}>Order placed</a></Timeline.Item>
                <Timeline.Item dot={<div className='quan'/>}>Package picked up</Timeline.Item>
                <Timeline.Item dot={<div className='quan'/>}>On delivery</Timeline.Item>
                <Timeline.Item dot={<div className='quan'/>}>
                    <p>Estimated to deliver at</p>
                    <p>N/A</p>
                </Timeline.Item>
            </Timeline>
            );
        }
    }

    render() {
        // const today = new Date();
        // console.log(Date().toLocaleString())
        // console.log("month: ", today.getSeconds())
        console.log(this.props.Order)
        const address = this.props.Order.RecipientContactID.Address.Street1 + ", " + this.props.Order.RecipientContactID.Address.City + ", " +  this.props.Order.RecipientContactID.Address.State + ", " + this.props.Order.RecipientContactID.Address.Zip;
        return (
            <div className="status-container">
                <Row className='orderStatus'>
                    <Col span={8} offset={4}>
                        <a style={{fontWeight: 'bold'}}>Order Status</a>
                    </Col>

                    <Col span={12}>
                     {/* {this.orderStatusHandler(this.props.Order.OrderStatus)} */}
                     {this.orderStatusHandler("order placed")}
                    </Col>
                </Row>

                <Row className='line2'>
                    <Col span={8} offset={4}>
                        <a style={{fontWeight: 'bold'}}>Tracking Number</a>
                    </Col>
                    <Col>
                        {this.props.Order.TrackingNumber}
                    </Col>
                </Row>

                <Row className='line3'>
                    <Col span={8} offset={4}>
                        <a style={{fontWeight: 'bold'}}>To </a>
                    </Col>

                    <Col className="address-display">
                        <p>{this.props.Order.RecipientContactID.Email}</p>
                        <p>{this.props.Order.RecipientContactID.Phone}</p>
                        <p>{address}</p>
                    </Col>
                </Row>

                <Row className='line4'>
                    <Col span={8} offset={4}>
                        <a style={{fontWeight: 'bold'}}>Your deliver pal</a>
                    </Col>
                    <Col>
                       {this.props.Order.ADVType}
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