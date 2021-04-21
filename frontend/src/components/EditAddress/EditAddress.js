import React, { Component } from 'react'
import './EditAddress.css';
import { Form, Input, Button, Row, Col } from 'antd';

class EditAddressForm extends Component {

    render() {

        return (
            <div>
                {/* <Form {...formItemLayout}> */}
                <Form>    
                    <Form.Item>
                        <p className="address"> Address</p>
                        <Input />
                    </Form.Item>


                    <Form.Item>
                        <Row>
                            <Col span = {8} >
                                <p className="city" >City</p>
                                <Input placeholder="San Francisco" className="city-input"/>
                            </Col>
                            <Col span = {8} >
                                <p className="state">State</p>
                                <Input placeholder="California" className="state-input" />
                            </Col>
                            <Col span = {8} >
                                <p className="zip">Zip Code</p>
                                <Input placeholder="Zip Code" className="zip-input"/>
                            </Col>
                        </Row>
                    </Form.Item>

                    
                    <Form.Item>
                        <p className="name">Full name</p>
                        <Input className="Fullname-input" />
                    </Form.Item>

                    
                    <Form.Item>
                        <p className="phone">Phone</p>
                        <Input className="Phone-input" />
                    </Form.Item>

                    
                    <Form.Item>
                        <p className="email">Email</p>
                        <Input className="Email-input" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="button">
                            Add Address
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        )
    }
}

const EditAddress = Form.create()(EditAddressForm);

export default EditAddress;