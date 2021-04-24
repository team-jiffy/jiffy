import React, { Component } from 'react'
import './AddNewAddress.css';
import { Form, Input, Button, Row, Col } from 'antd';
import axios from 'axios';


class AddNewAddressForm extends Component {

    constructor(props) {
        super(props);
        this.state = {

            UID: "",
            LastName: "",
            Phone: "",
            Email: "",

            Street1: "",
            City: "",
            State: "",
            Zip: "",

            status: ""
        
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.form.validateFields( (err, values) => {   
                if (!err) {   
                  console.log("values => ", values);

                const { LastName, Phone, Email, Street1, City, State, Zip } = values;

                const Contact= {
                    LastName: LastName,
                    Phone: Phone,
                    Email: Email,
            
                    Address: {
                        Street1: Street1,
                        City: City,
                        State: State,
                        Zip: Zip, 
                    },
                }
               
                console.log("Contact => ", Contact);
                // console.log("UID => ", localStorage.setItem("UID", response.data.user.uid));
                  axios({
                        method: 'put',   
                        url: 'http://localhost:8081/contact/updateContact', 
                        data: {
                            UID: localStorage.getItem("UID"),
                            Contact: Contact
                        }


                    }).then(
                        response => {
                            console.log('New Address reponse => ', response);
                            console.log('response.data => ', response.data.status);
    
                            if (response.data.status === "200" || response.data.message === "add contact to user succeed") {
                             alert("Submit successful!")
                             this.props.setModal1Visible();

                             
                            } else {
                                alert("Submit failed!");
                                
                            }
                        }
                    ).catch(
                        error => {
                            console.log('Add New Address error ->  ', error);
                        }
                    )
                }
        })      
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>    
                    <Form.Item>
                        <p className="street"> Address</p>

                        {getFieldDecorator('Street1', {
                            rules: [{ required: true, message: 'Please input your Street!' }],
                        })(
                            <Input
                                style={{background:'#F5F5F5'}}
                                placeholder="Enter street"
                            />,
                        )}
                    </Form.Item>


                    <Form.Item>
                        <Row>
                            <Col span = {8} >
                                <Form.Item>
                                    <p className="city"> City</p>

                                    {getFieldDecorator('City', {
                                        rules: [{ required: true, message: 'Please input City!' }],
                                    })(
                                        <Input
                                            style={{background:'#F5F5F5'}}
                                            placeholder="San Francisco" 
                                            className="city-input"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span = {8} >
                                <Form.Item>
                                    <p className="state">State</p>
                                    {getFieldDecorator('State', {
                                            rules: [{ required: true, message: 'Please input State!' }],
                                        })(
                                            <Input
                                                style={{background:'#F5F5F5'}}
                                                placeholder="California" 
                                                className="state-input"
                                            />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span = {8} >
                                <Form.Item>
                                    <p className="zip">Zip Code</p>
                                    {getFieldDecorator('Zip', {
                                            rules: [{ required: true, message: 'Please input Zip Code!' }],
                                        })(
                                            <Input
                                                style={{background:'#F5F5F5'}}
                                                placeholder="Zip Code" 
                                                className="zip-input"
                                            />,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form.Item>

                    
                    <Form.Item>
                        <p className="name">Full name</p>
                            {getFieldDecorator('LastName', {
                                rules: [{ required: true, message: 'Please input fullname!' }],
                                })(
                                <Input
                                    style={{background:'#F5F5F5'}}
                                    className="Fullname-input"
                                />,
                            )}
                    </Form.Item>

                    
                    <Form.Item>
                        <p className="phone">Phone</p>
                        {getFieldDecorator('Phone', {
                            rules: [{ required: true, message: 'Please input phone number!' }],
                            })(
                            <Input
                                style={{background:'#F5F5F5'}}
                                className="Phone-input"
                            />,
                        )}
                    </Form.Item>

                    
                    <Form.Item>
                        <p className="email">Email</p>
                        {getFieldDecorator('Email', {
                            rules: [{ required: true, message: 'Please input email!' }],
                            })(
                            <Input
                                style={{background:'#F5F5F5'}}
                                className="Email-input"
                            />,
                        )}
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

const AddNewAddress = Form.create({name:'add-new-address'})(AddNewAddressForm);

export default AddNewAddress;