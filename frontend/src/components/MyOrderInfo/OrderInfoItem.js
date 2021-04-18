import React, { Component } from 'react'
import './OrderInfoItem.css';
import {Avatar} from 'antd';
import miniDrone from './miniDrone.svg';
import miniRobot from './miniRobot.svg';
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
            {OrderInfo.OrderDate}
          </div>
          <div className="TrackNumber">
            TrackNumber
            <br/>
            {OrderInfo.TrackNumber}
          </div>
          <div className="From">
            From
            <br/>
            {OrderInfo.SenderName}
          </div>
          <div className="To">
            To
            <br/>
            {OrderInfo.RecipientName}
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
                <h2>{OrderInfo.Status}</h2>
                <h2>{OrderInfo.ETA}</h2>
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
