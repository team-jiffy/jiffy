import React from "react";
import { Row, Col } from 'antd'
import DefaultHeader from '../../components/Topnav/DefaultHeader'
import OrderTrackingProcess from '../../components/OrderTrackingProcess/OrderTrackingProcess'
import { Layout } from 'antd'
import SmallMap from "../../components/SmallMap/SmallMap";
import axios from "axios";
import UserHeader from "../../components/Topnav/UserHeader";



const {Content} = Layout;
class Tracking extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        Order: {
            SenderContactID: {
                FirstName: "Jim",
                LastName: "King",
                Phone:"(123)123-1234",
                Email:"123@gmail.com",
                Address:{
                    Street1: "10 Junipero Blv",
                    City: "San Francisco",
                    Zip:"94110",
                    State:"CA"

                }
            },
            RecipientContactID: {
                FirstName: "Joy",
                LastName: "Lee",
                Phone:"(222)222-1333",
                Email:"222@gmail.com",
                Address:{
                    Street1: "San Franciso International Airport",
                    City: "San Francisco",
                    Zip:"94221",
                    State:"CA"

                }
            }
            ,
            RecipientContact: {},
            TrackingNumber:"1",
            BuyerUserID:null,
            ADVType: "Drone",
            ETA:"13:30",
            SameDay: true,
            Price: "$19.90",
            OrderDate:"April 11",
            OrderStatus:"on delivery",
            PackageInfo:"small",
            PaymentCardID:null
        },
        pickupCoordinate: {
            Coordinate: {
              lng: null,
              lat: null
            }
          },
          deliveryCoordinate: {
            Coordinate: {
              lng: null,
              lat: null
            }
          },
          currentCoordinate: {
            Coordinate: {
                lng: null,
                lat: null
              }
          },
        isShowUserHeader: false

          
    }
}

showUserHeaderHandler = () => {
    const isShow = this.state.isShowUserHeader;
    this.setState({
        isShowUserHeader: !isShow
    });  
}

componentDidMount() {
    if (localStorage.getItem("UID")) {
        this.setState({
            isShowUserHeader: true
        })
    }

    const TrackNum = {trackNumber: "1"};
    axios.get('http://localhost:8081/order/getOrderHistory', {params:{
      trackNumber: TrackNum
    }}).then(response => {
      console.log("Order get success: ", response);
      this.setState({
        Order:response.data.order,
        pickupCoordinate: {
            Coordinate: {
              lng: response.data.order.position.pickup.longitude,
              lat: response.data.order.position.pickup.latitude
            }
          },
          deliveryCoordinate: {
            Coordinate: {
              lng: response.data.order.deliver.longitude,
              lat: response.data.order.deliver.latitude
            }
          },
          curr: {
            Coordinate: {
                lng: response.data.order.curr.longitude,
                lat: response.data.order.curr.latitude
              }  
          }
      });
      console.log(this.state.User)
      
    }).catch(err => {
      console.log("Order get failed!")
    })  
}


  render() {
    const {pickupCoordinate, deliveryCoordinate} = this.state;
    const pCoordinate = pickupCoordinate.Coordinate;
    const dCoordinate = deliveryCoordinate.Coordinate;
    return (
            <div>  {localStorage.getItem("UID")?<UserHeader 
            showUserHeaderHandler={this.showUserHeaderHandler}
            />:
                <DefaultHeader
                showUserHeaderHandler={this.showUserHeaderHandler}
                />}
                <div className="Tracking-body">
                <Row >
                    <Col  span={14} className="Tracking-status">
                        <OrderTrackingProcess Order ={this.state.Order}/>
                    </Col>
                    <Col span={10} classNam="Tracking-map" >
                        {/* <Content className='right' style={{ padding: '50px 50px', minHeight: 549 }}> */}
                            <div className='map'>
                              <SmallMap 
                              pickupCoordinate = {pCoordinate}
                              deliveryCoordinate = {dCoordinate}
                              />
                            </div>
                        {/* </Content> */}
                    </Col>
                </Row>
                </div>
            </div>);
  }
}

export default Tracking;