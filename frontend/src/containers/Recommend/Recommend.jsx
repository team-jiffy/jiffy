import React, {Component} from 'react';
import {List, Spin, Button, Select, Form} from 'antd';
import drone_profile from '../../assets/images/drone_profile.svg';
import robot_profile from '../../assets/images/robot_profile.svg';
import "./Recommend.css";
import axios from "axios";
import { RECO_URL } from "../../constants"

class Recommend extends Component {
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
        axios
            .get(RECO_URL)
            .then(res => {
                const {data}  = res;        // list
                this.setState( {
                    isLoading: true,
                    ETAOpts: this.getETAList(data.map(item => item.ETA))
                })

            })
            .catch(e => {
                console.log("err in fetch recommendation data ", e.message);
            });
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
                price: '$ 7.98'
            }
        ];

        const formItemLayout = {
            // responsive
            labelCol: {
                xs: {span: 24},
                sm: {span: 11},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 13},
            }
        }

        const {Option} = Select;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        return (
            <div className="recommend-box">
                <div className="recommend-msg">
                    Our robots are ready to deliver the package for you!
                </div>
                <br/>
                <br/>

                {
                    isLoading ?
                        <div className="spin-box">
                            <Spin tip="Loading..." size="large"/>
                        </div>
                        :
                        <div className="recommend-form-box">
                            <List
                                // grid={{gutter: 4, column: this.props.data.length}}
                                grid={{gutter: 4, column: recommendData.length}}
                                size="large"
                                dataSource={recommendData}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item>
                                            <img className="profile" alt="example"
                                                 src={item.ADVType === 'private drone' ? drone_profile : robot_profile}/>
                                        </List.Item>

                                        <br/>
                                        <br/>

                                        <List.Item>
                                            <span className="ADVType">{item.ADVType}</span>
                                        </List.Item>

                                        <br/>

                                        <List.Item>
                                            <Form
                                                {...formItemLayout}
                                                className="recommend-form"
                                                onSubmit={this.onSubmit}
                                            >
                                                <Form.Item label="Total delivery fee:"
                                                           wrapperCol={{ span: 12, offset: 0 }}>
                                                    {item.price}
                                                </Form.Item>

                                                <Form.Item label="Estimated delivery time:"
                                                           rules={[{
                                                               required: true,
                                                               message: 'Please choose a delivery time'
                                                           }]}>
                                                    <Select defaultValue="default" style={{ width: 150 }} onChange={handleChange} showArrow={true}>
                                                        <Option value="default">{this.state.ETAOpts[0]}</Option>
                                                        {this.state.ETAOpts.length > 1 ? <Option value="opt1">this.state.ETAOpts[1]</Option> : console.log('no options anymore')}
                                                        {this.state.ETAOpts.length > 2 ? <Option value="opt2">this.state.ETAOpts[2]</Option> : console.log('no options anymore')}
                                                    </Select>
                                                </Form.Item>

                                                <br/>
                                                <br/>

                                            </Form>
                                            <List.Item>
                                                <Button className="request-delivery-btn"
                                                        htmlType="submit">
                                                    Request Delivery
                                                </Button>
                                            </List.Item>
                                            <br/>
                                            <br/>
                                        </List.Item>
                                    </List.Item>
                                )}
                            />
                        </div>
                }
            </div>
        )
    }

}

export default Recommend;
