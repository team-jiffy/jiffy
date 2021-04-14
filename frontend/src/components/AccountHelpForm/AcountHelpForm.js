import React, {Component} from 'react';
import {Form, Input, Button,Row, Col,} from 'antd';
import TextArea from 'antd/lib/input/TextArea';

class AcountHelpForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <div className="AcountHelpForm-whole">
                <Form {...formItemLayout} className="AccountHelpForm" >

                    <Row>
                        <Form.Item label="Your Name" style={{float:'left'}}>
                            {getFieldDecorator('YourName', {
                                rules: [{  message: 'Please input your note!' }],
                            })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="Your email" style={{float:'left'}}>
                            {getFieldDecorator('email', {
                                rules: [{  message: 'Please input your note!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Your phone" style={{float:'left'}}>
                            {getFieldDecorator('YourPhone', {
                                rules: [{  message: 'Please input your note!' }],
                            })(<Input />)}
                        </Form.Item>

                    </Row>
                <Col span={20} >
                    <Form.Item>
                        <label style={{float: "left" }}>Tell me how can we help?</label>
                        {getFieldDecorator('Message', {
                            rules: [
                                {
                                    required: true,
                                },
                            ],
                        })(<TextArea name="message" onChange={this.onChange}  autoSize={{ minRows: 16, maxRows: 100 }} />)}
                    </Form.Item>
                </Col>



                    {/*<Form.Item {...tailFormItemLayout}>*/}
                    {/*    <Button type="primary" htmlType="submit">*/}
                    {/*        Submit*/}
                    {/*    </Button>*/}
                    {/*</Form.Item>*/}
                    <Row>
                        <Col span={15} offset={20} >
                            <Button htmlType="submit">
                                <b>Submit</b>
                            </Button>
                        </Col>
                    </Row>

                </Form>
                
            </div>
        );
    }
}
const WrappedApp = Form.create({ name: 'coordinated' })(AcountHelpForm);
export default WrappedApp;