import React, { Component } from 'react'
import './MyOrderInfo.css';
import {List,Avatar} from 'antd';
import OrderInfoItem from './OrderInfoItem';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

class MyOrderInfo extends Component {

  render() {
      const data = [
        {
          TrackNumber: 123123,
          SenderName: "John",
          RecipientName:"John1",
          OrderDate: "Nov",
          ADVType: "Drone",
          ETA: "tomorrow",
          Status: "onProcessing"
        },
        {
          TrackNumber: 123123,
          SenderName: "tyler",
          RecipientName:"tyler2",
          OrderDate: "Nov",
          ADVType: "Drone",
          ETA: "tomorrow",
          Status: "onDeliver"
        },
        {
          TrackNumber: 123123,
          SenderName: "ann",
          RecipientName:"ann2",
          OrderDate: "Nov",
          ADVType: "Robot",
          ETA: "tomorrow",
          Status: "Delivered"
        }
      ]
      
    return (
      <div id="MyOrderInfo">
        <h2 id="title">
          My Orders
        </h2>
        <hr id="line3"/>
        <ul id="order-list-ul">
          {
            data.map(item=><OrderInfoItem key={item.TrackNumber} OrderInfo={item}/>)
          }
        </ul>
      </div>
    )
  }
}

export default MyOrderInfo;