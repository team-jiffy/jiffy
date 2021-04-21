


import React, {Component} from 'react';
import { Descriptions, Button, Select, Icon, Divider,Row, Col} from 'antd';
import axios from "axios"
import "./ConfirmInfo.css"
import { Route, Switch, Link } from 'react-router-dom';
const { Option } = Select;
let index = 0;


class ConfirmInfo extends Component {
    constructor(props) {
        super(props);
    this.state = {
        items: null
    };
}

componentDidMount() {
    const UID = {UID: "4"};
    axios.get('http://localhost:8081/billing/getPayments', {params:{
        UID: UID.UID
      }}).then(response => {
        console.log("Payments get success: ", response);
        this.setState({
          items:response.data.cards
        });
        console.log(this.state.items)
        
      }).catch(err => {
        console.log("Payments get failed")
      });
}

    // addItem = () => {
    //     console.log('addItem');
    //     const { items } = this.state;
    //     this.setState({
    //         items: [...items, `New item ${index++}`],
    //     });
    // };

    render() {
        const { items } = this.state;
        console.log(items);
        const pickupAddress = localStorage.getItem("PickupAddressStreet1") + 
        ", " +  localStorage.getItem("PickupAddressCity") + 
        ", " +  localStorage.getItem("PickupAddressState") + 
        ", " +  localStorage.getItem("PickupAddressZip");
        const deliveryAddress = localStorage.getItem("DeliveryAddressStreet1") + 
        ", " +  localStorage.getItem("DeliveryAddressCity") + 
        ", " +  localStorage.getItem("DeliveryAddressState") + 
        ", " +  localStorage.getItem("DeliveryAddressZip")  
        return (
            <div>
                <Link to="/OrderConfirm"className="place-order-button">Place Order </Link>
                <div className="successInfo-whole">
                    <div className="successInfo-title">
                        <h2>Please confirm your delivery information</h2>
                    </div>
                    <div className="profile-page">
                        <div>
                            <Row className='line1'>
                                <Col span={8} offset={4}>

                                    <a style={{fontWeight: 'bold'}}>From </a>
                                </Col>

                                <Col>
                                    <p>{localStorage.getItem("PickupEmail")}
                                        <span className= "change">
                                           <Button>Change</Button>
                                    </span>
                                    </p>
                                    <p>{localStorage.getItem("PickupPhone")}</p>
                                    <p>{pickupAddress}</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className='line2'>
                                <Col span={8} offset={4}>

                                    <a style={{fontWeight: 'bold'}}>To </a>
                                </Col>

                                <Col>
                                    <p>{localStorage.getItem("DeliveryEmail")}
                                        <span className= "change">
                                           <Button>Change</Button>
                                    </span>
                                    </p>
                                    <p>{localStorage.getItem("DeliveryPhone")}</p>
                                    <p>{deliveryAddress}</p>
                                </Col>
                            </Row>
                        </div>

                        {/*<div>*/}
                        {/*    <Descriptions>*/}
                        {/*        <Descriptions.Item label="From">*/}
                        {/*            <span>*/}
                        {/*                hayley@jiffy.com*/}
                        {/*            <span className= "change">*/}
                        {/*                   <Button>Change</Button>*/}
                        {/*            </span>*/}
                        {/*            </span>*/}

                        {/*            <br/>*/}
                        {/*            123-456-7890*/}
                        {/*            <br/>*/}
                        {/*            1264 Jiffy Ave., Los Angeles, CA, 90018<br/>*/}
                        {/*        </Descriptions.Item>*/}
                        {/*    </Descriptions>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <Descriptions>*/}
                        {/*    <Descriptions.Item label="To">*/}
                        {/*        macha@zippy.com*/}
                        {/*        <span className= "change">*/}
                        {/*                   <Button>Change</Button>*/}
                        {/*            </span>*/}
                        {/*        <br/>*/}
                        {/*        987-654-3210*/}
                        {/*        <br/>*/}
                        {/*        896 Drodro market., Los Angeles, CA, 90053<br/>*/}
                        {/*    </Descriptions.Item>*/}
                        {/*</Descriptions>*/}
                        {/*</div>*/}
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
                        <div>
                            <Row className='line3'>
                                <Col span={8} offset={4}>

                                    <a style={{fontWeight: 'bold'}}>Payment</a>
                                </Col>

                                <Col>
                                    <p>
                                        <Select
                                            style={{ width: 240 }}
                                            placeholder="visa - 1234"
                                            dropdownRender={menu => (
                                                <div>
                                                    {menu}
                                                    <Divider style={{ margin: '4px 0' }} />
                                                    <div
                                                        style={{ padding: '4px 8px', cursor: 'pointer' }}
                                                        onMouseDown={e => e.preventDefault()}
                                                        onClick={this.addItem}
                                                    >

                                                    </div>
                                                </div>
                                            )}
                                        >
                                            {items? items.map(item => (
                                                <Option key={item.cardNumber}>{item.cardNumber}</Option> 
                                            )): items}
                                        </Select>
                                    </p>
                                    <p><div
                                        style={{ padding: '4px 8px', cursor: 'pointer' }}
                                        onMouseDown={e => e.preventDefault()}
                                        onClick={this.addItem}
                                    >
                                    </div>
                                        <Button><Icon type="plus" /> Add Payment Method</Button></p>

                                </Col>
                            </Row>
                        </div>
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

            </div>
        );
    }
}

export default ConfirmInfo;


