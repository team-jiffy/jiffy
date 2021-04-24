import React from "react";
import "./ChangeMyDeliveryAddress.css";
import Button from "react-bootstrap/Button";
import { Modal } from "antd";
import AddNewAddress from "../AddNewAddress/AddNewAddress";
import EditAddress from '../EditAddress/EditAddress';

class ChangeMyDeliveryAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1Visible: false,
      modal2Visible: false,
    };    
  }



  setModal1Visible=() =>{ 
    const isShow = this.state.modal1Visible;
    this.setState({
      modal1Visible: !isShow
    });

  }

  setModal2Visible=()=> {
    const isShow = this.state.modal2Visible;
    this.setState({
      modal2Visible: !isShow
    });
  
  }

  render() {
    return (
      <div className="change-address-or-payment">
        <div className="change-title">
          Change My Delivery Address
        </div>
        <hr id="line3"></hr>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <Button 
                    className="plus-btn"
                    onClick={() => this.setModal1Visible()}
                  >
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </Button>
                  <Modal
                    title="Add New Address"
                    visible={this.state.modal1Visible}
                    onCancel={() => this.setModal1Visible()}
                  >
                    <AddNewAddress setModal1Visible={this.setModal1Visible}/>
                  </Modal>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <hr id="line4"></hr>
                  <p class="card-text">
                    User Info
                  </p>
                  <p class="card-text">
                    User Info
                  </p>
                  <p class="card-text">
                    User Info
                  </p>
                  <a href="#" class="card-link"
                    onClick={() => this.setModal2Visible()}
                  >
                    Edit
                  </a>
                  <Modal
                    title="Edit Addresss"
                    centered
                    visible={this.state.modal2Visible}
                    // onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible()}
                  >
                    <EditAddress setModal2Visible={this.setModal2Visible}/>
                  </Modal>
                  <a href="#" class="card-link">
                    Remove
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <hr id="line4"></hr>
                  <p class="card-text">
                    User Info
                  </p>
                  <p class="card-text">
                    User Info
                  </p>
                  <p class="card-text">
                    User Info
                  </p>
                  <a href="#" class="card-link">
                    Edit
                  </a>
                  <a href="#" class="card-link">
                    Remove
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <hr id="line4"></hr>
                  <p class="card-text">
                    User Info
                  </p>
                  <p class="card-text">
                    User Info
                  </p>
                  <p class="card-text">
                    User Info
                  </p>
                  <a href="#" class="card-link">
                    Edit
                  </a>
                  <a href="#" class="card-link">
                    Remove
                  </a>
                </div>
              </div>
            </div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeMyDeliveryAddress;