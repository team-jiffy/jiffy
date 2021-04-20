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
            Results: null,
            ETAList: null,
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
                    Results: responseResults,
                    ETAList: this.getETAList(responseResults),
                    isLoading: false
                });
                console.log(this.state);
            })
            .catch(err => {
                console.log('err in fetch recommendation list', err);
            });
    }

    getETAList = sourceList => {
        let ETAList = [];

        for (let i = 0; i < sourceList.length; i++) {
            console.log("sourceList", sourceList[i].eta)
            let ETA = sourceList[i].eta;
            console.log("ETA", ETA);
            if (ETA === null) {
                return ["same day", "next day"];
            }
            // assume stop working hours: 08:00 ~ 20:00
            if (ETA === "20:00") {
                return ["20:00"];
            }
            let hours = parseInt(ETA.substring(0, 2));
            let mins = parseInt(ETA.substring(3, 5));
            let currMins = hours * 60 + mins;

            for (let i = 0; i < 2; i++) {
                let nextMins = currMins + 30;
                if (nextMins < 480 || nextMins > 1200) return ETAList;
                hours = nextMins / 60;
                mins = nextMins % 60;
                const nextETA = hours + ":" + mins;
                ETAList = [...ETAList, nextETA];
            }
        }
        return ETAList;
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setChosenReco();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            localStorage.setItem("ADVType", this.state.ChosenReco.ADVType);
            localStorage.setItem("Price", this.state.ChosenReco.Price);
            localStorage.setItem("ETA", this.state.ChosenReco.ETA);
            this.props.history.push('/SignIn');
        })
    }

    setChosenReco = (item) => {
        this.setState({
            ChosenReco: {
                ADVType: item.ADVType,
                Price: item.Price,
                ETA: item.ETA
            }
        });
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

                                        <Form className="recommend-form"
                                              onSubmit={this.handleSubmit}>

                                            <Form.Item {...listItemLayout}>
                                                <img className="profile" alt="example"
                                                     src={item.ADVType === 'private drone' ? drone_profile : robot_profile}/>
                                            </Form.Item>

                                            <Form.Item {...listItemLayout}>
                                                <span className="ADVType">{item.ADVType}</span>
                                            </Form.Item>

                                            <Form.Item {...formItemLayout} label="Total delivery fee:">
                                                {item.price}
                                            </Form.Item>

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
                                                        value="default">{this.state.ETAList[0]}</Option>
                                                    {this.state.ETAList.length > 1 ?
                                                        <Option
                                                            value="opt1">{this.state.ETAList[1]}</Option> : console.log('no' +
                                                            ' options anymore')}
                                                    {this.state.ETAList.length > 2 ?
                                                        <Option
                                                            value="opt2">{this.state.ETAList[2]}</Option> : console.log('no' +
                                                            ' options anymore')}
                                                </Select>
                                            </Form.Item>

                                            <Form.Item  {...listItemLayout}>
                                                <Button className="request-delivery-btn"
                                                        htmlType="submit">
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
