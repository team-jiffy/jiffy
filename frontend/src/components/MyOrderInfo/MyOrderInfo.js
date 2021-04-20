import React, { Component } from 'react'
import './MyOrderInfo.css';
import {List,Avatar} from 'antd';
import OrderInfoItem from './OrderInfoItem';
import axios from 'axios';
import {withRouter, Link, Redirect} from "react-router-dom";
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
  constructor(props) {
    super(props);
    this.state = {      data: [
    //   {
    //     TrackNumber: 123123,
    //     SenderName: "John",
    //     RecipientName:"John1",
    //     OrderDate: "Nov",
    //     ADVType: "Drone",
    //     ETA: "tomorrow",
    //     Status: "onProcessing"
    //   },
    //   {
    //     TrackNumber: 123123,
    //     SenderName: "tyler",
    //     RecipientName:"tyler2",
    //     OrderDate: "Nov",
    //     ADVType: "Drone",
    //     ETA: "tomorrow",
    //     Status: "onDeliver"
    //   },
    //   {
    //     TrackNumber: 123123,
    //     SenderName: "ann",
    //     RecipientName:"ann2",
    //     OrderDate: "Nov",
    //     ADVType: "Robot",
    //     ETA: "tomorrow",
    //     Status: "Delivered"
    //   },
    //   {
    //     TrackNumber: 123123,
    //     SenderName: "ann",
    //     RecipientName:"ann2",
    //     OrderDate: "Nov",
    //     ADVType: "Robot",
    //     ETA: "tomorrow",
    //     Status: "Delivered"
    //   }
    ]};
  }
  componentDidMount() {
  //   if (localStorage.getItem('UID')) {
  // //   const UID = {
  // //     UID: localStorage.getItem('UID'),
  // // }; 
  //   } else {
  //     alert("Please login first!");
  //     this.props.history.push("/");
  //   }
  const UID = {UID: "1"};
    axios.get('http://localhost:8081/order/getAllOrders', {params:{
      UID: UID.UID
    }}).then(response => {
      console.log("Order get success: ", response);
      this.setState({
        data:response.data.orders
      });
      
    }).catch(err => {
      console.log("Orders get failed!")
    })
  }
  render() {
  console.log(this.state.data);
      
    return (
      <div id="MyOrderInfo">
        <h2 id="title">
          My Orders
        </h2>
        <hr id="line3"/>
        <ul id="order-list-ul">
          {
            this.state.data.map(item=><OrderInfoItem key={item.trackNumber} OrderInfo={item}/>)
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(MyOrderInfo);