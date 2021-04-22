import React, { Component } from "react";
import { Descriptions, Button, Row, Col } from "antd";
import '../../components/ConfirmInfo/ConfirmInfo.css';
import SmallMap from "../../components/SmallMap/SmallMap";
import UserHeader from "../../components/Topnav/UserHeader";

class SuccessInfo extends Component {

    render() {
        const pickupAddress = localStorage.getItem("PickupAddressStreet1") +
            ", " + localStorage.getItem("PickupAddressCity") +
            ", " + localStorage.getItem("PickupAddressState") +
            ", " + localStorage.getItem("PickupAddressZip");
        const deliveryAddress = localStorage.getItem("DeliveryAddressStreet1") +
            ", " + localStorage.getItem("DeliveryAddressCity") +
            ", " + localStorage.getItem("DeliveryAddressState") +
            ", " + localStorage.getItem("DeliveryAddressZip")
        return (
            <div className="successinfo">
                <UserHeader />
                <div style={{ marginTop: "70px", marginLeft: "74px" }}>
                    <h2>Congratulations! Your order has been succefully placed.</h2>
                    <h3>We will let you know once we delivered the package.</h3>
                </div>
                <div class="container" style={{ marginLeft: "74px" }}>
                    <div class="row">
                        <div className="left-category">Tracking No.</div>
                        <div>
                            <p id="right-col">XXJIF750A</p>
                        </div>
                    </div>
                    <div class="row">
                        <div className="left-category">From</div>
                        <div>
                            <p id="right-col">{localStorage.getItem("PickupEmail")}</p>
                            <p id="right-col">{localStorage.getItem("PickupPhone")}</p>
                            <p id="right-col">{pickupAddress}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div className="left-category">To </div>
                        <div>
                            <p id="right-col">{localStorage.getItem("DeliveryPhone")}</p>
                            <p id="right-col">{deliveryAddress}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div className="left-category">Package Information </div>
                        <div>
                            <p id="right-col">{localStorage.getItem("Size")}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div className="left-category">Estimated Delivery Time</div>
                        <div style={{ paddingLeft: "20px" }}>
                            <p id="right-col">{localStorage.getItem("ETA")}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div className="left-category">Your Delivery Pal</div>
                        <div>
                            <p id="right-col">{localStorage.getItem("ADVType")}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div className="left-category">Delivery Fee</div>
                        <div>
                            <p id="right-col">{localStorage.getItem("Price")}</p>
                        </div>
                        <div style={{marginLeft: "450px"}}>
           
                        <SmallMap span={12} className="place-order-map"
                        //   pickupCoordinate={pCoordinate}
                        //   deliveryCoordinate={dCoordinate}
                        />
       
                        </div>
                    </div>
                    {/* <div className="confirmInfo-title"></div>
                    <div className="confirmInfo-whole">
                        <p>
                            <h2>Congratulations! Your order has been succefully placed.</h2>
                        </p>
                        <p>
                            <h3>We will let you know once we delivered the package.</h3>
                        </p>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div className="confirmInfo-page">
                                <div>
                                    <Row className='line1'>
                                        <Col span={8} offset={4}>

                                            <a style={{ fontWeight: 'bold' }}>From </a>
                                        </Col>

                                        <Col>
                                            <p>{localStorage.getItem("PickupEmail")}

                                            </p>
                                            <p>{localStorage.getItem("PickupPhone")}</p>
                                            <p>{pickupAddress}</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row className='line2'>
                                        <Col span={8} offset={4}>

                                            <a style={{ fontWeight: 'bold' }}>To </a>
                                        </Col>

                                        <Col>

                                            <p>{localStorage.getItem("DeliveryPhone")}</p>
                                            <p>{deliveryAddress}</p>
                                        </Col>
                                    </Row>
                                </div> */}
                    {/*<div>*/}
                    {/*    <Descriptions >*/}
                    {/*        <Descriptions.Item label="Order tracking no.">Wfnn9FSJWcG873</Descriptions.Item>*/}
                    {/*    </Descriptions>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <Descriptions>*/}

                    {/*        <Descriptions.Item label="From">*/}
                    {/*            hayley@jiffy.com*/}
                    {/*            <br/>*/}
                    {/*            123-456-7890*/}
                    {/*            <br/>*/}
                    {/*            1264 Jiffy Ave., Los Angeles, CA, 90018<br/>*/}
                    {/*        </Descriptions.Item>*/}
                    {/*    </Descriptions>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <Descriptions>*/}

                    {/*        <Descriptions.Item label="To">*/}
                    {/*            macha@zippy.com*/}
                    {/*            <br/>*/}
                    {/*            987-654-3210*/}
                    {/*            <br/>*/}
                    {/*            896 Drodro market., Los Angeles, CA, 90053 <br/>*/}
                    {/*        </Descriptions.Item>*/}
                    {/*    </Descriptions>*/}

                    {/*</div>*/}
                    {/* <div>
                                    <Descriptions>
                                        <Descriptions.Item label="Package information">
                                            {localStorage.getItem("Size")}
                                        </Descriptions.Item>
                                    </Descriptions>
                                </div>
                                <div>
                                    <Descriptions>

                                        <Descriptions.Item label="Estimated delivery time">{localStorage.getItem("ETA")}</Descriptions.Item>
                                    </Descriptions>

                                </div>
                                <div>
                                    <Descriptions>

                                        <Descriptions.Item label="You deliver pal">{localStorage.getItem("ADVType")}</Descriptions.Item>
                                    </Descriptions>

                                </div>
                                <div>
                                    <Descriptions>

                                        <Descriptions.Item label="Delivery fee">{localStorage.getItem("Price")}</Descriptions.Item>
                                    </Descriptions>

                                </div>
                            </div>

                        </div>

                    </div> */}
        


                </div>



            </div>
        );
    }
}

export default SuccessInfo;


