import React from "react";
import { Row, Col } from "antd";
import SmallMap from "../../components/SmallMap/SmallMap";
import ConfirmInfo from "../../components/ConfirmInfo/ConfirmInfo";
import DefaultHeader from "../../components/Topnav/DefaultHeader";
import "./PlaceOrder.css";
import UserHeader from "../../components/Topnav/UserHeader";
import MyConfirmInfo from "../../components/ConfirmInfo/MyConfirmInfo"
class PlaceOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowUserHeader: false,
    };
  }
  componentDidMount() {
    if (localStorage.getItem("UID")) {
      this.setState({
        isShowUserHeader: true,
      });
    }
  }
  showUserHeaderHandler = () => {
    const isShow = this.state.isShowUserHeader;
    this.setState({
      isShowUserHeader: !isShow,
    });
  };

  render() {
    const pCoordinate = JSON.parse(localStorage.getItem("PickupCoordinate"));
    const dCoordinate = JSON.parse(localStorage.getItem("DeliveryCoordinate"));
    console.log("Pickip Co: ", pCoordinate);
    console.log("Delivery Co: ", dCoordinate);

    return (
      <div>
        {localStorage.getItem("UID") ? (
          <UserHeader showUserHeaderHandler={this.showUserHeaderHandler} />
        ) : (
          <DefaultHeader showUserHeaderHandler={this.showUserHeaderHandler} />
        )}
        <Row className="place-order-boday">
          <Col span={12}>
            {" "}
            <ConfirmInfo />
          </Col>
          <Col span={12} className="place-order-map">
            <SmallMap
              pickupCoordinate={pCoordinate}
              deliveryCoordinate={dCoordinate}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default PlaceOrder;
