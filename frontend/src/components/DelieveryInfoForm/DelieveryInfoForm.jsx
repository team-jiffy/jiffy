import React from "react";
import "./DelieveryInfoForm.css";
import { Form, Input, Row, Col, Select, Checkbox, Button } from "antd";
import SwitchIcon from "../../assets/images/switch.svg";
import MinIcon from "../../assets/images/minIcon.svg";
import FromAutoComplete from "./FromAutoComplete";
import ToAutoComplete from "./ToAutoComplete";
import "./DelieveryInfoForm.css";
import { withRouter, Link, Redirect } from "react-router-dom";

const { Option } = Select;
// function onChange(value) {
//     console.log(`selected ${value}`);
//   }

//   function onBlur() {
//     console.log('blur');
//   }

//   function onFocus() {
//     console.log('focus');
//   }

//   function onSearch(val) {
//     console.log('search:', val);
//   }

class DeliveryInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Pickup: {
        Address: {
          Street1: null,
          City: null,
          State: null,
          Zip: null,
        },
        Delivery: {
          Address: {
            Stree1: null,
            City: null,
            State: null,
            Zip: null,
          },
        },
      },
    };
  }

  settingPickupAddress = (address) => {
    // when the address.length < 5, it will appear an err
    this.setState({
      Pickup: {
        Address: {
          Street1: address[0].long_name + " " + address[1].long_name,
          City: address[address.length - 5].long_name,
          State: address[address.length - 3].long_name,
          Zip: address[address.length - 1].long_name,
        },
      },
    });

    console.log("Pick up Address: ", this.state.Pickup);
  };
  settingDeliveryAddress = (address) => {
    this.setState({
      Delivery: {
        Address: {
          Street1: address[0].long_name + " " + address[1].long_name,
          City: address[address.length - 5].long_name,
          State: address[address.length - 3].long_name,
          Zip: address[address.length - 1].long_name,
        },
      },
    });

    console.log("Delivery Address: ", this.state.Delivery);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }

      localStorage.setItem(
        "DeliveryAddressStreet1",
        this.state.Delivery.Address.Street1
      );
      localStorage.setItem(
        "DeliveryAddressCity",
        this.state.Delivery.Address.City
      );
      localStorage.setItem(
        "DeliveryAddressState",
        this.state.Delivery.Address.State
      );
      localStorage.setItem(
        "DeliveryAddressZip",
        this.state.Delivery.Address.Zip
      );
      localStorage.setItem("DeliveryEmail", values.recipientEmail);
      localStorage.setItem("DeliveryPhone", values.recipientPhone);

      localStorage.setItem(
        "PickupAddressStreet1",
        this.state.Pickup.Address.Street1
      );
      localStorage.setItem("PickupAddressCity", this.state.Pickup.Address.City);
      localStorage.setItem(
        "PickupAddressState",
        this.state.Pickup.Address.State
      );
      localStorage.setItem("PickupAddressZip", this.state.Pickup.Address.Zip);
      localStorage.setItem("PickupEmail", values.senderEmail);
      localStorage.setItem("PickupPhone", values.senderPhone);

      localStorage.setItem("Weight", values.packageWeight);
      localStorage.setItem("Size", values.packageSize);

      localStorage.setItem();

      console.log("Storage");
      console.log(localStorage.getItem("DeliveryAddressStreet1"));
      console.log(localStorage.getItem("PickupAddressStreet1"));
      console.log(localStorage.getItem("PickupEmail"));
      console.log(localStorage.getItem("Weight"));

      this.props.history.push("/Recommend");
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="deliveryInfoForm">
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Item>
                <span
                  className="min-button"
                  className="deliveryInfoForm-from-text"
                >
                  From
                </span>
              </Form.Item>
            </Col>
            <Col>
              <img
                className="min-icon"
                src={MinIcon}
                onClick={() => {
                  this.props.isShowFormHandler();
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item id="my-delivery-info">
                {getFieldDecorator("pickupAddress", {
                  rules: [{ required: true, message: "*" }],
                })(
                  // <Input
                  //     className="deliveryInfo-senderAutoComplete"
                  //     prefix={<i className="position-icon"/>}
                  //     placeholder="Enter pick up address"
                  // />,

                  <FromAutoComplete
                    settingPickupCoordinate={this.props.settingPickupCoordinate}
                    settingPickupAddress={this.settingPickupAddress}
                    // Style={{marginTop: "-15px"}}
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item>
                {getFieldDecorator("senderEmail", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    { required: true, message: "*" },
                  ],
                })(
                  <Input
                    className="deliveryInfo-senderEmail"
                    placeholder="Enter sender's email"
                    style={{marginLeft: "-300px", marginTop: "-6px"}}
                  />
                )}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                {getFieldDecorator("senderPhone", {
                  rules: [{ required: true, message: "*" }],
                })(
                  <Input
                    className="deliveryInfo-senderPhone"
                    placeholder="Enter sender's phone"
                    style={{marginLeft: "-300px", marginTop: "6px"}}
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
 
          <Row>
            <Col>
              <Form.Item>
                <span className="deliveryInfoForm-from-text" style={{marginTop: "-80px"}}>To</span>
              </Form.Item>
            </Col>
            <Col>
              <img className="switch-icon" src={SwitchIcon} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item>
                {getFieldDecorator("deliveryAddress", {
                  rules: [{ required: true, message: "*" }],
                })(
                  // <Input
                  //     className="deliveryInfo-recipientAutoComplete"
                  //     prefix={<i className="position-icon"/>}
                  //     placeholder="Enter pick up address"
                  // />,
                  <ToAutoComplete
                    Style={{marginTop: "-10px"}}
                    settingDeliveryAddress={this.settingDeliveryAddress}
                    settingDeliveryCoordinate={
                      this.props.settingDeliveryCoordinate
                    }
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item>
                {getFieldDecorator("recipientEmail", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    { required: true, message: "*" },
                  ],
                })(
                  <Input
                    className="deliveryInfo-recipientEmail"
                    placeholder="Enter recipient's email"
                    style={{marginLeft: "-300px"}}
                  />
                )}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                {getFieldDecorator("recipientPhone", {
                  rules: [{ required: true, message: "*" }],
                })(
                  <Input
                    className="deliveryInfo-recipientPhone"
                    placeholder="Enter recipient's phone"
                    style={{marginLeft: "-300px",marginTop: "6px"}}
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item>
                <span className="deliveryInfoForm-from-text" style={{marginTop: "-180px"}}>
                  Package Information
                </span>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item>
                {getFieldDecorator("packageSize", {
                  rules: [{ required: true, message: "*" }],
                })(
                  <Select
                    className="deliveryInfoForm-select-size"
                    // showSearch
                    placeholder="Choose package size"
                    style={{marginLeft: "-300px"}}
                    //   optionFilterProp="children"
                    //   onChange={onChange}
                    //   onFocus={onFocus}
                    //   onBlur={onBlur}
                    //   onSearch={onSearch}
                    //   filterOption={(input, option) =>
                    //                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    //             }
                  >
                    <Option value="Small" style={{ background: "#F5F5F5" }}>
                      Small (12 x 12 x 14 inches)
                    </Option>
                    <Option value="Medium" style={{ background: "#F5F5F5" }}>
                      Medium (15 x 15 x 18 inches)
                    </Option>
                    <Option value="Large" style={{ background: "#F5F5F5" }}>
                      Large (18 x 18 x 20 inches)
                    </Option>
                  </Select>
                )}
              </Form.Item>
            </Col>

            <Col>
              <Form.Item>
                {getFieldDecorator("packageWeight", {
                  rules: [{ required: true, message: "*" }],
                })(
                  <Select
                    className="deliveryInfoForm-select-weight"
                    //  showSearch
                    placeholder="Choose package weight"
                    optionFilterProp="children"
                    style={{marginLeft: "-300px", marginTop: "6px"}}
                    // onChange={onChange}
                    // onFocus={onFocus}
                    // onBlur={onBlur}
                    // onSearch={onSearch}
                    // filterOption={(input, option) =>
                    //                 option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    //             }
                  >
                    <Option value="5" style={{ background: "#F5F5F5" }}>
                      {" "}
                      &lt; 5 lb{" "}
                    </Option>
                    <Option value="10" style={{ background: "#F5F5F5" }}>
                      {" "}
                      &lt; 10 lb{" "}
                    </Option>
                    <Option value="25" style={{ background: "#F5F5F5" }}>
                      {" "}
                      &lt; 25 lb{" "}
                    </Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item>
                {getFieldDecorator("agreement", {
                  valuePropName: "checked",
                })(
                  <Checkbox className="deliveryInfoForm-checkbox">
                    I have read and agree to the <a href="">terms of service</a>
                  </Checkbox>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item>
                <Button
                  className="deliveryInfo-button"
                  type="primary"
                  htmlType="submit"
                >
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
const DeliveryInfoForm1 = Form.create({ name: "deliveryInfo-form" })(
  DeliveryInfoForm
);
export default withRouter(DeliveryInfoForm1);
