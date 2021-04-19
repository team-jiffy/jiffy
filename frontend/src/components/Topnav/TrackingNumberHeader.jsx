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

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
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
                <Button className="button1" onClick={() => this.setModal1Visible(true)}>
                  <b>Log in</b>
                </Button>
                <Modal
                  visible={this.state.modal1Visible}
                  onCancel={() => this.setModal1Visible(false)}
                >
                  <SignIn />
                </Modal>
                <Button className="button1" onClick={() => this.setModal2Visible(true)}>
                  <b>Sign up</b>
                </Button>
                <Modal
                  centered
                  visible={this.state.modal2Visible}
                  onCancel={() => this.setModal2Visible(false)}
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
