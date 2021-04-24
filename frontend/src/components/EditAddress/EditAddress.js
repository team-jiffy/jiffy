import React, { Component } from 'react'
import './EditAddress.css';
import { Form, Input, Button, Row, Col } from 'antd';

class EditAddressForm extends Component {

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
                        street1: Street1,
                        city: City,
                        zip: Zip, 
                        State: State,
                    },
                }
               
                console.log("Contact => ", Contact);
                  axios({
                        method: 'post',   
                        url: 'http://localhost:8081/contact/updateContact', 
                        data: {
                            UID: localStorage.getItem("UID"),
                            Contact: Contact,
                            ContactID: localStorage.getItem("ContactID")
                        }


                    }).then(
                        response => {
                            console.log('New Address reponse => ', response);
                            console.log('response.data => ', response.data.status);
    
                            if (response.data.status === "200" || response.data.message === "add contact to user succeed") {
                             alert("Edit address successful!")
                            //  this.setState( 
                            //      preState => {
                            //         console.log(preState);
                            //      } 
                            //  )
                            this.localStorage.Storage();

                             this.props.setModal1Visible();

                             
                            } else {
                                alert("Edit address failed!");
                                
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
                        <p className="address"> Address</p>
                        {getFieldDecorator('Street1', {
                            reule: [{ required: true, message: 'Please input your Street!' }]
                        })(
                            <Input 
                                style={{background: '#F5F5F5'}}
                                placeholder="Enter street"
                            />
                        )} 
                    </Form.Item>


                    <Form.Item>
                        <Row>
                            <Col span = {8} >
                                <p className="city" >City</p>

                                {getFieldDecorator('City', {
                                    reules: [{ required: true, message: 'Please input City!' }]
                                })(
                                    <Input 
                                        style={{background: '#F5F5F5'}}
                                        placeholder="San Francisco" 
                                        className="city-input"
                                    />
                                )}
                                
                            </Col>
                            <Col span = {8} >
                                <p className="state">State</p>
                                {getFieldDecorator('State', {
                                    rules: [{ required: true, message: 'Please input State!'}]
                                })(
                                    <Input 
                                        style={{background: '#F5F5F5'}}
                                        placeholder="California" 
                                        className="state-input" 
                                    />
                                )}
                                
                            </Col>
                            <Col span = {8} >
                                <p className="zip">Zip Code</p>
                                {getFieldDecorator('Zip', {
                                    rules: [{ required: true, message: 'Please input Zip code!' }]
                                })(
                                    <Input 
                                        style={{background: '#F5F5F5'}}
                                        placeholder="Zip Code" 
                                        className="zip-input"
                                    />
                                )}
                                
                            </Col>
                        </Row>
                    </Form.Item>

                    
                    <Form.Item>
                        <p className="name">Full name</p>
                        {getFieldDecorator('LastName', {
                            rules: [{ required: true, message: 'Please input fullname!' }]
                        })(
                            <Input 
                                style={{background: '#F5F5F5'}}
                                className="Fullname-input" 
                            />
                        )}
                        
                    </Form.Item>

                    
                    <Form.Item>
                        <p className="phone">Phone</p>
                        {getFieldDecorator('Phone',{
                            rules: [{ required: true, message: 'Please input Phone number!' }]
                        })(
                            <Input 
                                style={{background: '#F5F5F5'}}
                                className="Phone-input" 
                            />
                        )}
                        
                    </Form.Item>

                    
                    <Form.Item>
                        <p className="email">Email</p>
                        {getFieldDecorator('Email', {
                            rules: [{ required: true, message: 'Please input Email!' }]
                        })(
                            <Input 
                                style={{background: '#F5F5F5'}}
                                className="Email-input" 
                            />
                        )}
                        
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="button">
                            Edit Address
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        )
    }
}

const EditAddress = Form.create()(EditAddressForm);

export default EditAddress;