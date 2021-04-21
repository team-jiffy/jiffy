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
            items: null,
        };
    }

    componentDidMount() {
        const UID = { UID: "4" };
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
    placeOrderSubmitHandler = () => {
        const today = new Date();
        const pCoordinate = localStorage.getItem("PickupCoordinate");
        const dCoordinate = localStorage.getItem("DeliveryCoordinate");

        axios({
            method: "put",
            url: "http://localhost:8081/order/createOrder",
            data: {
                ADVType: localStorage.getItem("ADVType"),
                OrderDate:
                    today.getMonth() +
                    1 +
                    "/" +
                    today.getDate() +
                    "/" +
                    today.getFullYear,
                CardID: "string",
                SameDay: true,
                Pickup: {
                    Name: "Jim",
                    Email: localStorage.getItem("PickupEmail"),
                    Phone: localStorage.getItem("PickupPhone"),
                    Address: {
                        Street1: localStorage.getItem("PickupAddressStreet1"),

                        City: localStorage.getItem("PickupAddressCity"),
                        State: localStorage.getItem("PickupAddressState"),
                        Zip: localStorage.getItem("PickupAddressZip"),
                    },
                },
                Deliver: {
                    Name: "Lucy",
                    Email: localStorage.getItem("DeliveryEmail"),
                    Phone: localStorage.getItem("DeliveryPhone"),
                    Address: {
                        Street1: localStorage.getItem("DeliveryAddressStreet1"),

                        City: localStorage.getItem("DeliveryAddressCity"),
                        State: localStorage.getItem("DeliveryAddressState"),
                        Zip: localStorage.getItem("DeliveryAddressZip"),
                    },
                },
                DeliverCoordinates: {
                    Longitude: dCoordinate.Coordinate.lng,
                    Latitude: dCoordinate.Coordinate.lat,
                },
                PickupCoordinates: {
                    Longitude: pCoordinate.Coordinate.lng,
                    Latitude: pCoordinate.Coordinate.lat,
                },
                Price: localStorage.getItem("Price"),
            },
        })
            .then((response) => {
                console.log("submit success");
                console.log("reco ->", response);
                this.props.history.push("/confrimOrder");
            })
            .catch((err) => {
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

                <div className="successInfo-whole">
                    <div class="container">
                        <div class="row">
                            <div className="left-category">From</div>
                            <div>
                                <p>{localStorage.getItem("PickupEmail")}</p>
                                <p>{localStorage.getItem("PickupPhone")}</p>
                                <p>{pickupAddress}</p>
                            </div>
                            <Button className="btns-right">Change</Button>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div className="left-category">To </div>
                            <div style={{paddingLeft: "20px"}}>
                                <p>{localStorage.getItem("DeliveryEmail")}</p>
                                <p>{localStorage.getItem("DeliveryPhone")}</p>
                                <p>{deliveryAddress}</p>
                            </div>
                            <Button className="btns-right">Change</Button>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div className="left-category">Estimated Delivery Time</div>
                            <div>
                                <p>{localStorage.getItem("ETA")}</p>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div className="left-category">Your Deliver Pal</div>
                            <div>
                                <p>{localStorage.getItem("ETA")}</p>
                                <p>{localStorage.getItem("ADVType")}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div className="left-category">Delivery Fee</div>
                            <div>
                                <p>{localStorage.getItem("Price")}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div className="left-category">Payment</div>
                            <div>
                                <p>
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
                                        {items
                                            ? items.map((item) => (
                                                <Option key={item.cardNumber}>{item.cardNumber}</Option>
                                            ))
                                            : items}
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
