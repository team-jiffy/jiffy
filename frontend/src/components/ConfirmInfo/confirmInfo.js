import React, { Component } from "react";
import { Descriptions, Button, Select, Icon, Divider, Row, Col } from "antd";
import axios from "axios";
import "./ConfirmInfo.css";
import { Route, Switch, Link } from "react-router-dom";
const { Option } = Select;
import UserHeader from "../Topnav/UserHeader";
let index = 0;

class ConfirmInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        const UID = { UID: localStorage.getItem("UID") };
        axios
            .get("http://localhost:8081/billing/getPayments", {
                params: {
                    UID: UID.UID,
                },
            })
            .then((response) => {
                console.log("Payments get success: ", response);
                this.setState({
                    items: response.data.cards,
                });
                console.log(this.state.items);
            })
            .catch((err) => {
                console.log("Payments get failed");
            });
    }

    // addItem = () => {
    //     console.log('addItem');
    //     const { items } = this.state;
    //     this.setState({
    //         items: [...items, `New item ${index++}`],
    //     });
    // };
    paymentHander = (items) => {
        let i = 0;
        for(i; i< items.length; i++) {
        
            return <Option key={items[i].cardNumber}>{items[i].cardNumber}</Option>;
        }

    }

    placeOrderSubmitHandler = () => {
        const today = new Date();
        const pCoordinate = JSON.parse(localStorage.getItem("PickupCoordinate"));
        const dCoordinate = JSON.parse(localStorage.getItem("DeliveryCoordinate"));
        console.log("sssss", pCoordinate)
        axios({
            method: "put",
            url: "http://localhost:8081/order/createOrder",
            data: {
                ADVType: localStorage.getItem("ADVType"),
                orderDate:
                    today.getMonth() +
                    1 +
                    "/" +
                    today.getDate() +
                    "/" +
                    today.getFullYear,
                cardID: "246",
                sameDay: true,
                UID: localStorage.getItem("UID"),
                Price: parseDouble(localStorage.getItem("Price")) ,
                Pickup: {
                    Name: localStorage.getItem("FirstName"),
                    Email: localStorage.getItem("PickupEmail"),
                    Phone: localStorage.getItem("PickupPhone"),
                    Address: {
                        Street1: localStorage.getItem("PickupAddressStreet1"),
                        Street2: "",
                        City: localStorage.getItem("PickupAddressCity"),
                        State: localStorage.getItem("PickupAddressState"),
                        Zip: localStorage.getItem("PickupAddressZip"),
                        AptNo:""
                    },
                },
                Deliver: {
                    Name: "Lucy",
                    Email: localStorage.getItem("DeliveryEmail"),
                    Phone: localStorage.getItem("DeliveryPhone"),
                    Address: {
                        Street1: localStorage.getItem("DeliveryAddressStreet1"),
                        Street2: "",
                        City: localStorage.getItem("DeliveryAddressCity"),
                        State: localStorage.getItem("DeliveryAddressState"),
                        Zip: localStorage.getItem("DeliveryAddressZip"),
                        AptNo:""
                    },
                },
                DeliverCoordinates: {
                    Longitude: dCoordinate.Coordinate.lng,
                    Latitude: dCoordinate.Coordinate.lat,
                    Elevation:"32"
                },
                PickupCoordinates: {
                    Longitude: pCoordinate.Coordinate.lng,
                    Latitude: pCoordinate.Coordinate.lat,
                    Elevation:"32"
                },
                
            },
        })
            .then((response) => {
                console.log("submit success");
                console.log("reco ->", response);
                this.props.history.push("/confrimOrder");
            })
            .catch((err) => {
                alert("Service response err in Place Order")
                console.log("err in Place Order", err);
            });
    };

    render() {
        const { items } = this.state; 
        
        console.log(items);
        const pickupAddress =
            localStorage.getItem("PickupAddressStreet1") +
            ", " +
            localStorage.getItem("PickupAddressCity") +
            ", " +
            localStorage.getItem("PickupAddressState") +
            ", " +
            localStorage.getItem("PickupAddressZip");
        const deliveryAddress =
            localStorage.getItem("DeliveryAddressStreet1") +
            ", " +
            localStorage.getItem("DeliveryAddressCity") +
            ", " +
            localStorage.getItem("DeliveryAddressState") +
            ", " +
            localStorage.getItem("DeliveryAddressZip");
        return (
            <div>
                <Button
                    className="place-order-button"
                    onClick={() => {
                        this.placeOrderSubmitHandler();
                    }}
                >
                    Place Order
                </Button>
                <h2 style={{marginTop: "70px", marginLeft: "50px"}}>Please confirm your delivery information</h2>

                <div className="confirminfo">
                    <div class="container" style={{marginLeft: "74px"}}>
                        <div class="row">
                            <div className="left-category">From</div>
                            <div>
                                <p id="right-col">{localStorage.getItem("PickupEmail")}</p>
                                <p id="right-col">{localStorage.getItem("PickupPhone")}</p>
                                <p id="right-col">{pickupAddress}</p>
                            </div>
                            <Link to="/deliveryInfo"><Button className="btns-right">Change</Button> </Link>
                        </div>
                        <div class="row">
                            <div className="left-category">To </div>
                            <div>
                                <p id="right-col">{localStorage.getItem("DeliveryEmail")}</p>
                                <p id="right-col">{localStorage.getItem("DeliveryPhone")}</p>
                                <p id="right-col">{deliveryAddress}</p>
                            </div>
                            <Link to="/deliveryInfo"><Button className="btns-right">Change</Button> </Link>
                        </div>
                        <div class="row">
                            <div className="left-category">Estimated Delivery Time</div>
                            <div>
                                <p id="right-col">{localStorage.getItem("ETA")}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div className="left-category">Your Deliver Pal</div>
                            <div>
                            
                                <p id="right-col">{localStorage.getItem("ADVType")}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div className="left-category">Delivery Fee</div>
                            <div>
                                <p id="right-col">{localStorage.getItem("Price")}</p>
                            </div>
                        </div>
                    </div>
                    <div class="container" style={{marginLeft: "74px"}}>
                        <div class="row">
                            <div className="left-category">Payment</div>
                            <div>
                                <p id="right-col">
                                    <Select
                                        style={{ width: 240, marginLeft: "-45px"}}
                                        placeholder="visa - 1234"
                                        dropdownRender={(menu) => (
                                            <div>
                                                {menu}
                                                <Divider style={{ margin: "4px 0" }} />
                                                <div
                                                    style={{ padding: "4px 8px", cursor: "pointer" }}
                                                    onMouseDown={(e) => e.preventDefault()}
                                                    onClick={this.addItem}
                                                ></div>
                                            </div>
                                        )}
                                    >
                                        {/* {items
                                            ? this.state.items.map((item) => (
                                                <Option key={item.cardNumber}>{item.cardNumber}</Option>
                                            ))
                                            : this.state.items} */}
                                            {/* {this.paymentHander(items)} */}
                                    </Select>
                                    <Button><Icon type="plus"/>Add Payment Method</Button>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*        
                    <div>
                        <Descriptions>
                            <Descriptions.Item label="Estimated delivery time" className="left-category">
                                {localStorage.getItem("ETA")}
                            </Descriptions.Item>
                        </Descriptions>
                    </div> */}
                    {/* <div>
                        <Descriptions className="left-category">
                            <Descriptions.Item label="You deliver pal">
                                {localStorage.getItem("ADVType")}
                            </Descriptions.Item>
                        </Descriptions>
                    </div> */}
                    {/* <div>
                        <Descriptions className="left-category">
                            <Descriptions.Item label="Delivery fee">
                                {localStorage.getItem("Price")}
                            </Descriptions.Item>
                        </Descriptions>
                    </div> */}
                    {/* <div>
                        <a style={{ fontWeight: "bold" }}>Payment</a>

                        <p>
                            <Select
                                style={{ width: 240 }}
                                placeholder="visa - 1234"
                                dropdownRender={(menu) => (
                                    <div>
                                        {menu}
                                        <Divider style={{ margin: "4px 0" }} />
                                        <div
                                            style={{ padding: "4px 8px", cursor: "pointer" }}
                                            onMouseDown={(e) => e.preventDefault()}
                                            onClick={this.addItem}
                                        ></div>
                                    </div>
                                )}
                            >
                                {items
                                    ? items.map((item) => (
                                        <Option key={item.cardNumber}>{item.cardNumber}</Option>
                                    ))
                                    : items}
                            </Select>
                        </p>
                        <p>
                            <div
                                style={{ padding: "4px 8px", cursor: "pointer" }}
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={this.addItem}
                            ></div>
                            <Button>
                                <Icon type="plus" /> Add Payment Method
                            </Button>
                        </p>
                    </div> */}
                    {/*<div>*/}
                    {/*    <Descriptions>*/}

                    {/*        <Descriptions.Item label="Payment">*/}
                    {/*            <p>*/}

                    {/*                <Select*/}
                    {/*                    style={{ width: 240 }}*/}
                    {/*                    placeholder="visa - 1234"*/}
                    {/*                    dropdownRender={menu => (*/}
                    {/*                        <div>*/}
                    {/*                            {menu}*/}
                    {/*                            <Divider style={{ margin: '4px 0' }} />*/}
                    {/*                            <div*/}
                    {/*                                style={{ padding: '4px 8px', cursor: 'pointer' }}*/}
                    {/*                                onMouseDown={e => e.preventDefault()}*/}
                    {/*                                onClick={this.addItem}*/}
                    {/*                            >*/}

                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    )}*/}
                    {/*                >*/}
                    {/*                    {items.map(item => (*/}
                    {/*                        <Option key={item}>{item}</Option>*/}
                    {/*                    ))}*/}
                    {/*                </Select>*/}
                    {/*            </p>*/}
                    {/*            <p>*/}
                    {/*                <div*/}
                    {/*                    style={{ padding: '4px 8px', cursor: 'pointer' }}*/}
                    {/*                    onMouseDown={e => e.preventDefault()}*/}
                    {/*                    onClick={this.addItem}*/}
                    {/*                >*/}
                    {/*                    </div>*/}
                    {/*                <Button><Icon type="plus" /> Add Payment Method</Button>*/}
                    {/*            </p>*/}
                    {/*        </Descriptions.Item>*/}
                    {/*    </Descriptions>*/}

                    {/*</div>*/}

                </div>
            </div>
        );
    }
}

export default ConfirmInfo;
