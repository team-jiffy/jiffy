import React, { Component } from 'react'
import './OrderInfoItem.css';
import {Avatar} from 'antd';
import miniDrone from './../../assets/images/miniDrone.svg';
import miniRobot from './../../assets/images/miniRobot.svg';
class OrderInfoItem extends Component {
  constructor() {
    super();
    
  }

  render() {
    const {OrderInfo} = this.props;
    const iconImg = OrderInfo.ADVType === "Drone" ? <img className = "drone" src={miniDrone} /> 
                                                  : <img className="robot" src={miniRobot}/>;
    return (
      <li className="OrderInfoItem">
        <div className="info">
          <div className="OrderPlaced">
            Order Placed
            <br/>
            {OrderInfo.orderDate}
          </div>
          <div className="TrackNumber">
            TrackNumber
            <br/>
            {OrderInfo.trackNumber}
          </div>
          <div className="From">
            From
            <br/>
            {OrderInfo.senderName}
          </div>
          <div className="To">
            To
            <br/>
            {OrderInfo.recipientName}
          </div>
        </div>
        <hr className="line4"/>
        <div className="status">
          <div className="imgContainer">
            {iconImg}
          </div>
          <div className="statusDisplay">{
            OrderInfo.Status === "onProcessing" ?
              <h2 className="processing">Order Processing</h2> 
              : 
              <div className="notProcessing">
                <h2 className="notProcessing-text">{OrderInfo.status}</h2>
                <h2 className="notProcessing-text">{OrderInfo.eta}</h2>
              </div>

          }</div>
          <a id="trackOrder">Tracking Order</a>
          <a id="orderDetail">Order Details</a>

        </div>
      </li>
    )
  }
}

export default OrderInfoItem;
