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
            recoList: null,
            ETAList: null,
            isLoading: false
        };
    }

    componentDidMount() {
        // get recommendData details from backend API
        // recommendData is a list of Reco objects, each data includes:
        // 1. string ADVType(privateDrone, privateRobot, sharedRobot)
        // 2. int price
        // 3. string ETA

        // get pickup address, delivery address and package weight from ???

        const url = `/Recommend`;

        this.setState({
            isLoading: true
        });

        axios
            .get(url)
            .then(response => {
                console.log('reco ->', response);
                this.setState({
                    recoList: response.data,
                    ETAList: this.getETAList(response.data.map(item => item.ETA)),
                    isLoading: false
                });
            })
            .catch(err => {
                console.log('err in fetch recommendation list', err);
            });
    }

    getETAList = ETA => {
        // case3: shared robot
        if (ETA === null) return ["same day", "next day"];

        // case1 & 2: private drone && private robot
        // assume stop working hours: 08:00 ~ 20:00
        let ETAList = [ETA];

        if (ETA === "20:00") return ETAList;

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

        return ETAList;
    }

    onSave = e => {
        e.preventDefault();
        // pass the chosen list to where?
    }

    render() {
        const {isLoading} = this.state.isLoading;

        const {recoList} = this.state.recoList;
        const {ETAList} = this.state.ETAList;

        // // hard code test
        // const recommendData = [
        //     {
        //         ADVType: 'private drone',
        //         price: '$ 15.03',
        //         ETA: '14:00'
        //     }, {
        //         ADVType: 'private robot',
        //         price: '$ 12.15',
        //         ETA: '14:30'
        //     }, {
        //         ADVType: 'shared robot',
        //         price: '$ 10.15',
        //         ETA: '14:50'
        //     }
        // ];

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
            
                {isLoading ?
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
                                grid={{column: recoList.length}}
                                size="default"
                                dataSource={recoList}
                                renderItem={item => (
                                    <List.Item>

                                        <Form className="recommend-form">

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
                                                        value="default">{ETAList[0]}</Option>
                                                    {ETAList.length > 1 ?
                                                        <Option
                                                            value="opt1">{ETAList[1]}</Option> : console.log('no' +
                                                            ' options anymore')}
                                                    {ETAList.length > 2 ?
                                                        <Option
                                                            value="opt2">{ETAList[2]}</Option> : console.log('no' +
                                                            ' options anymore')}
                                                </Select>
                                            </Form.Item>

                                            <Form.Item  {...listItemLayout}>
                                                <Button className="request-delivery-btn"
                                                        htmlType="submit"
                                                        onClick={this.onSave}>
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

    onSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        })
    }
}

const RecommendForm1 = Form.create({name: 'recommend-form'})(RecommendForm);
export default RecommendForm1;
