import React from "react";
import "./TrackingNumberHeader.css";
import Button from "react-bootstrap/Button";

import { Modal } from "antd";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

class DefaultHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      // Modal initialize
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
      <div className="default-header">
        <nav class="navbar">
          <div class="container-fluid">
            <div class="row">
              <a class="navbar-brand" href="#">
                <div className="logo" alt="JIFFY" />
              </a>
              <Button className="back-button">
                <i
                  id="back-icon"
                  className="fa fa-chevron-left"
                ></i>
              </Button>
              <form style={{visibility: "hidden"}}>
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
                <Button className="button1" onClick={() => this.setModal1Visible(true)}>
                  <b>Log in</b>
                </Button>
                <Modal
                  visible={this.state.modal1Visible}
                  onCancel={() => this.setModal1Visible(false)}
                >
                  <SignIn 
                  showUserHeaderHandler={this.props.showUserHeaderHandler}
                   setModal1Visible = {this.setModal1Visible}
                  />
                </Modal>

                <Button className="button2" onClick={() => this.setModal2Visible(true)}>
                  <b>Sign up</b>
                </Button>
                <Modal
                  centered
                  visible={this.state.modal2Visible}
                  onCancel={() => this.setModal2Visible(false)}
                >
                  <SignUp 
                  setModal2Visible={this.setModal2Visible}
                  />
                </Modal>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default DefaultHeader;
