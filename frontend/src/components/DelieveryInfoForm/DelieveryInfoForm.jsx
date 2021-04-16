import React from "react";
import "./DelieveryInfoForm.css";
import { Form, Input, Row, Col, Select, Checkbox, Button } from 'antd';
import SwitchIcon from '../../assets/images/switch.svg';
import MinIcon from '../../assets/images/minIcon.svg'
import FromAutoComplete from "./FromAutoComplete";
import ToAutoComplete from "./ToAutoComplete";

const { Option } = Select;
function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
  
class DeliveryInfoForm extends React.Component {
    constructor (props){
        super(props);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        
        return(
            <div className="deliveryInfoForm">
                <Form> 
                    <Row>
                        <Col>
                            <Form.Item >
                                <span className="deliveryInfoForm-from-text">From</span>
                            </Form.Item>
                        </Col>
                        <Col>
                        < img className="min-icon" src={MinIcon} />
                        </Col>
                    </Row>
                    <Row> 
                        <Col>
                            <Form.Item >
                                {getFieldDecorator(' ', {
                                                rules: [{ required: false }],
                                                })(
                                                // <Input
                                                //     className="deliveryInfo-senderAutoComplete"
                                                //     prefix={<i className="position-icon"/>}
                                                //     placeholder="Enter pick up address"
                                                // />,
                                               
                                                <FromAutoComplete 
                                                settingPickupCoordinate={this.props.settingPickupCoordinate}
                                                    />
                                                  
                                                    ,
                                                 )}
                            </Form.Item>
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Item >
                                {getFieldDecorator(' ', {
                                                rules: [{ required: false }],
                                                })(
                                                <Input
                                                    className="deliveryInfo-senderEmail"      
                                                    placeholder="Enter sender's email"
                                                />,
                                                )}
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item >
                                {getFieldDecorator(' ', {
                                                rules: [{ required: false }],
                                                })(
                                                <Input
                                                    className="deliveryInfo-senderPhone"
                                                    placeholder="Enter sender's phone"
                                                />,
                                                )}
                                </Form.Item>
                            </Col>
                        </Row> 





                        <Row>
                        <Col>
                            <Form.Item >
                                <span className="deliveryInfoForm-to-text">To</span>
                            </Form.Item>
                        </Col>
                        <Col>
                             < img className="switch-icon" src={SwitchIcon} />
                        </Col>
                    </Row>
                    <Row> 
                        <Col>
                            <Form.Item >
                                {getFieldDecorator(' ', {
                                                rules: [{ required: false }],
                                                })(
                                                // <Input
                                                //     className="deliveryInfo-recipientAutoComplete"
                                                //     prefix={<i className="position-icon"/>}
                                                //     placeholder="Enter pick up address"
                                                // />,
                                                <ToAutoComplete 
                                                settingDeliveryCoordinate={this.props.settingDeliveryCoordinate}
                                                    />,
                                                 )}
                            </Form.Item>
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Item >
                                {getFieldDecorator(' ', {
                                                rules: [{ required: false }],
                                                })(
                                                <Input
                                                    className="deliveryInfo-recipientEmail"      
                                                    placeholder="Enter sender's email"
                                                />,
                                                )}
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item >
                                {getFieldDecorator(' ', {
                                                rules: [{ required: false }],
                                                })(
                                                <Input
                                                    className="deliveryInfo-recipientPhone"
                                                    placeholder="Enter sender's phone"
                                                />,
                                                )}
                                 </Form.Item>
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Item >
                                    <span className="deliveryInfoForm-package-text">Package Information</span>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Form.Item >
                                    <Select
                                        className="deliveryInfoForm-select-size"
                                        showSearch
                                        placeholder="Choose package size"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                        >
                                    <Option value="1" style={{background:'#F5F5F5'}}>Small (12 x 12 x 14 inches)</Option>
                                    <Option value="2" style={{background:'#F5F5F5'}}>Medium (15 x 15 x 18 inches)</Option>
                                    <Option value="3" style={{background:'#F5F5F5'}}>Large (18 x 18 x 20 inches)</Option>
                                    </Select>
                                </Form.Item>
                                </Col>
                                
                                <Col>
                                <Form.Item>
                                <Select
                                        className="deliveryInfoForm-select-weight"
                                        showSearch
                                        placeholder="Choose package weight"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                        >
                                    <Option value="1" style={{background:'#F5F5F5'}}> &lt; 5 lb </Option>
                                    <Option value="2" style={{background:'#F5F5F5'}}> &lt; 10 lb </Option>
                                    <Option value="3" style={{background:'#F5F5F5'}}> &lt; 25 lb </Option>
                                    </Select>
                                    </Form.Item>
                                </Col>
                                
                            </Row> 
                            <Row>
                                <Col>
                                    <Form.Item >
                                        {getFieldDecorator('agreement', {
                                         valuePropName: 'checked',
                                          })(
                                    <Checkbox className="deliveryInfoForm-checkbox">
                                        I have read and agree to the <a href="">terms of service</a>
                                    </Checkbox>,
                                     )}
                                     </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Item >
                                        <Button
                                        
                                            className="deliveryInfo-button" 
                                            type="primary" 
                                            htmlType="submit">
                                            Request Delivery
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>   
                    </Form>
                    
            </div>
        );
    }

}
const DeliveryInfoForm1 = Form.create({ name: 'deliveryInfo-form' })(DeliveryInfoForm);
export default DeliveryInfoForm1;

