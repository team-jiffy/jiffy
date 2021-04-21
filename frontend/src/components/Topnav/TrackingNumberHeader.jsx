import React from "react";
import "./TrackingNumberHeader.css";
import Button from "react-bootstrap/Button";

import { Modal } from "antd";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

class TrackingNumberHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   loading: true,

      // Modal initialize
      modal1Visible: false,
      modal2Visible: false,
    };
  }

  setModalVisible=() =>{
    
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
      <div className="tracking-no-header">
        <nav class="navbar">
          <div class="container-fluid">
            <div class="row">
              <a class="navbar-brand" href="#">
                <div className="logo" alt="JIFFY" />
              </a>
              <form>
                <input
                  className="address-search-box"
                  type="search"
                  placeholder="Enter your tracking number"
                  aria-label="Search"
                />
                <i
                  className="fa fa-search fa-2x"
                  style={{ marginLeft: "-40px" }}
                ></i>
              </form>
              <div className="header-buttons">
                <Button className="button1" onClick={() => this.setModalVisible()}>
                  <b>Log in</b>
                </Button>
                <Modal
                  visible={this.state.modal1Visible}
                  onCancel={() => this.setModalVisible()}
                >
                  <SignIn 
                  setModalVisible = {this.setModalVisible}
                  />
                </Modal>
                <Button className="button1" onClick={() => this.setModal2Visible()}>
                  <b>Sign up</b>
                </Button>
                <Modal
                  centered
                  visible={this.state.modal2Visible}
                  onCancel={() => this.setModal2Visible()}
                >
                  <SignUp />
                </Modal>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default TrackingNumberHeader;
