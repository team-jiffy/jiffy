import React, {Component} from 'react';
import {List, Spin, Select, Form, Button} from 'antd';
import drone_profile from '../../assets/images/drone_profile.svg';
import robot_profile from '../../assets/images/robot_profile.svg';
import "./RecommendForm.css";
import axios from "axios"

class RecommendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Request: {
                deliver: {
                    Street1: localStorage.getItem('DeliveryAddressStreet1'),
                    Street2: null,
                    City: localStorage.getItem('DeliveryAddressCity'),
                    State: localStorage.getItem('DeliveryAddressState'),
                    Zip: localStorage.getItem('DeliveryAddressZip'),
                    AptNo: null
                },
                pickup: {
                    Street1: localStorage.getItem('PickupAddressStreet1'),
                    Street2: null,
                    City: localStorage.getItem('PickupAddressCity'),
                    State: localStorage.getItem('PickupAddressState'),
                    Zip: localStorage.getItem('PickupAddressZip'),
                    AptNo: null
                },
                weight: null
            },
            Results: [],
            isLoading: true,
            ChosenReco: {
                ADVType: null,
                Price: null,
                ETA: null
            }
        };
        console.log(this.state);
    }

    componentDidMount() {
        axios({
            method: 'post',
            url: "http://localhost:8081/order/getReco",
            data: {
                Deliver: this.state.Request.deliver,
                Pickup: this.state.Request.pickup,
                Weight: this.state.Request.weight
            }
        })
            .then(response => {
                console.log('reco ->', response);
                console.log('reco data ->', response.data);
                const responseResults = response.data.recos;
                console.log(responseResults);
                this.setState({
                    Results: this.setSettings(responseResults),
                    isLoading: false
                });
                console.log(this.state);
            })
            .catch(err => {
                console.log('err in fetch recommendation list', err);
            });
    }

    setSettings = sourceList => {

        const newList = sourceList;
        console.log("newList", newList);

        let ETAList = [];
        for (let i = 0; i < newList.length; i++) {

            const object = newList[i];

            const ETA = newList[i].eta;
            console.log("ETA", ETA);

            let list = [];
            if (ETA === null) {
                list = ["same day", "next day"];
                const key = "ETAList";
                object[key] = list;
                newList[i] = object;
                continue;
            }

            // assume stop working hours: 08:00 ~ 20:00
            if (ETA === "20:00") {
                list = ["20:00"];
                const key = "ETAList";
                object[key] = list;
                newList[i] = object;
                continue;
            }

            list.push(ETA);

            let hours = parseInt(ETA.substring(0, 2));
            let mins = parseInt(ETA.substring(3, 5));
            let currMins = hours * 60 + mins;
            let nextMins;

            for (let i = 0; i < 2; i++) {
                nextMins = currMins + 30;
                if (nextMins < 480 || nextMins > 1200) return ETAList;
                hours = Math.floor(nextMins / 60);
                mins = nextMins % 60;
                let nextETA;
                if (mins < 10) {
                    nextETA = hours + ": 0" + mins;
                } else {
                    nextETA = hours + ":" + mins;
                }
                list.push(nextETA);
                currMins = nextMins;
            }
            const key = "ETAList";
            object[key] = list;
            newList[i] = object;
        }

        return newList;
    }

    clickHandler = (item, e) => {
        e.preventDefault();
        this.setChosenReco(item);
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            localStorage.setItem("ADVType", this.state.ChosenReco.ADVType);
            localStorage.setItem("Price", this.state.ChosenReco.Price);
            localStorage.setItem("ETA", this.state.ChosenReco.ETA);
            // this.props.history.push('/SignIn');
        })
    }

    setChosenReco = (item) => {
        console.log("item", item);
        this.setState({
            ChosenReco: {
                ADVType: item.advtype,
                Price: item.price,
                ETA: item.eta
            }
        });
        console.log("chosen", this.state.ChosenReco);
    }

    render() {

        const formItemLayout = {
            labelCol: {span: 12},
            wrapperCol: {span: 4}
        }

        const listItemLayout = {
            wrapperCol: {offset: 6, span: 8}
        }

        const {Option} = Select;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        function isEqual(object1) {
            const object2 = {
                advtype: 'private drone'
            }
            const res = object1.advtype === object2.advtype;
            console.log(object1.advtype);
            console.log(res);
            return res;
        }

        return (
            <div className="recommendContainer">
                {this.state.isLoading ?
                    <div className="spin-box">
                        <Spin tip="Loading..." size="large"/>
                    </div>
                    :
                    <div className="recommend-form-container">
                        <div className="recommend-form-message">
                            Our robots are ready to deliver the packs for you!
                        </div>
                        <div className="recommend-item">
                            <List
                                grid={{column: this.state.Results.length}}
                                size="default"
                                dataSource={this.state.Results}
                                renderItem={item => (
                                    <List.Item>
                                        <Form className="recommend-form">

                                            <Form.Item {...listItemLayout}>
                                                <img className="profile" alt="example"
                                                     src={isEqual(item) ? drone_profile : robot_profile}/>
                                            </Form.Item>
                                            <br />
                                            <Form.Item {...listItemLayout}>
                                                <span className="ADVType">{item.advtype}</span>
                                            </Form.Item>
                                            <Form.Item {...formItemLayout} label="Total delivery fee:"><div id="delivery-fee" style={{justifySelf:"baseline", marginTop: "17px"}}>{item.price}</div></Form.Item>
                                            <Form.Item {...formItemLayout} label="Estimated delivery time:"
                                                       rules={[{
                                                           required: true,
                                                           message: 'Please choose a delivery time'
                                                       }]}>
                                                <Select defaultValue="default"
                                                        style={{width: 120}}
                                                        onChange={handleChange}
                                                        showArrow={true}>
                                                    <Option
                                                        value="default">{item.ETAList[0]}</Option>
                                                    {item.ETAList.length > 1 ?
                                                        <Option
                                                            value="opt1">{item.ETAList[1]}</Option> : console.log('no' +
                                                            ' options anymore')}
                                                    {item.ETAList.length > 2 ?
                                                        <Option
                                                            value="opt2">{item.ETAList[2]}</Option> : console.log('no' +
                                                            ' options anymore')}
                                                </Select>
                                            </Form.Item>

                                            <Form.Item  {...listItemLayout}>
                                                <Button className="request-delivery-btn"
                                                        htmlType="submit"
                                                        onClick={this.clickHandler.bind(this, item)}>
                                                    Request Delivery
                                                </Button>
                                            </Form.Item>
                                        </Form>

                                    </List.Item>)}
                            />
                        </div>
                    </div>
                }

            </div>

        )
    }

}

const RecommendForm1 = Form.create({name: 'recommend-form'})(RecommendForm);
export default RecommendForm1;
