import React, {Component} from 'react';
import {List, Spin, Select, Form, Button} from 'antd';
import drone_profile from '../../assets/images/drone_profile.svg';
import robot_profile from '../../assets/images/robot_profile.svg';
import "./RecommendForm.css";

class RecommendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            ETAOpts: []
        };
    }

    componentDidMount() {
        // get recommendData details from backend
        // recommendData is a list of objects, each data includes:
        // 1. string ADVType(privateDrone, privateRobot, sharedRobot)
        // 2. int price
        // 3. string ETA

        const {data} = this.props;        // list
        this.setState({
            // isLoading: true
            // ETAOpts: this.getETAList(data.map(item => item.ETA))
        })

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

    render() {
        // const {recommendData} = this.props.recommendInfo ? this.props.recommendInfo.above : [];
        const {isLoading} = this.state;

        // hard code test
        const recommendData = [
            {
                ADVType: 'private drone',
                price: '$ 15.03',
                ETA: '14:00'
            }, {
                ADVType: 'private robot',
                price: '$ 12.15',
                ETA: '14:30'
            }, {
                ADVType: 'shared robot',
                price: '$ 10.15',
                ETA: '14:50'
            }
        ];

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
                                // grid={{column: this.props.data.length}}
                                grid={{column: recommendData.length}}
                                size="default"
                                dataSource={recommendData}
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
                                                        value="default">{this.state.ETAOpts[0]}</Option>
                                                    {this.state.ETAOpts.length > 1 ?
                                                        <Option
                                                            value="opt1">this.state.ETAOpts[1]</Option> : console.log('no options anymore')}
                                                    {this.state.ETAOpts.length > 2 ?
                                                        <Option
                                                            value="opt2">this.state.ETAOpts[2]</Option> : console.log('no options anymore')}
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
