import React from "react";
import DefaultHeader from "../../components/Topnav/DefaultHeader"
import { Row, Col } from 'antd';
import SmallMap from "../../components/SmallMap/SmallMap"
import ConfirmInfo from '../../containers/OrderConfirm/OrderConfirm';
import SuccessInfo from "../../components/SuccessInfo/SuccessInfo";
import UserHeader from "../../components/Topnav/UserHeader";


class OrderConfirm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        isShowUserHeader: false
    }}
    componentDidMount() {
        if (localStorage.getItem("UID")) {
            this.setState({
                isShowUserHeader: true
            })
        }
    }
    showUserHeaderHandler = () => {
        const isShow = this.state.isShowUserHeader;
        this.setState({
            isShowUserHeader: !isShow
        });  
    }
  render() {
    const pCoordinate = JSON.parse(localStorage.getItem("PickupCoordinate"));
    const dCoordinate = JSON.parse(localStorage.getItem("DeliveryCoordinate"));
    console.log("Pickip Co: ", pCoordinate.Coordinate)
    console.log("Delivery Co: ", dCoordinate.Coordinate)
    return (
            <div>   {localStorage.getItem("UID")?<UserHeader 
            showUserHeaderHandler={this.showUserHeaderHandler} />:
              <DefaultHeader 
              showUserHeaderHandler={this.showUserHeaderHandler} />}
              <Row className="order-confirm-boday">
                <Col span={12} 
                      ><SuccessInfo /></Col>
                <Col span={12}
                     className="order-confirm-map"
                >
                  <SmallMap 
                  pickupCoordinate = {pCoordinate.Coordinate}
                  deliveryCoordinate = {dCoordinate.Coordinate}
                  />
                </Col>
               </Row>
           </div>);
  }
}

export default OrderConfirm;