import React from "react";
import Button from "react-bootstrap/Button";
import "./TrackingNumberHeader.css";

import { Modal } from "antd";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

class DeliveryAddressHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,

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

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        console.log(currentScrollPos);
        console.log(window.innerHeight);
        if (currentScrollPos >= document.body.scrollHeight / 4) {
          this.setState({ opacity: "1" });
          console.log(currentScrollPos);
        } else {
          this.setState({ opacity: "0" });
        }
      };
    }
  }

  render() {
    return (
      <div
        className="delivery-address-header"
        id="delivery-address-header"
        style={{ opacity: `${this.state.opacity}` }}
      >
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
                  placeholder="Enter your address"
                  aria-label="Search"
                />
                <a href="/Tracking">
                  <i
                    className="fa fa-map-marker fa-2x"
                    style={{ marginLeft: "-40px" }}
                  ></i>
                </a>
              </form>
              <div className="header-buttons">
                <Button
                  className="button1"
                  onClick={() => this.setModal1Visible(true)}
                >
                  <b>Log in</b>
                </Button>
                <Modal
                  visible={this.state.modal1Visible}
                  onCancel={() => this.setModal1Visible(false)}
                >
                  <SignIn 
                    showUserHeaderHandler={this.props.showUserHeaderHandler}
                  setModal1Visible= {this.setModal1Visible}
                  />
                </Modal>
                <Button
                  className="button1"
                  onClick={() => this.setModal2Visible(true)}
                >
                  <b>Sign up</b>
                </Button>
                <Modal
                  centered
                  visible={this.state.modal2Visible}
                  onCancel={() => this.setModal2Visible(false)}
                >
                  <SignUp 
                   setModal2Visible= {this.setModal2Visible}
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

export default DeliveryAddressHeader;
