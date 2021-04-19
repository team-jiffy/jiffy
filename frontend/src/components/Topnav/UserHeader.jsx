import React from "react";
import "./TrackingNumberHeader.css";
import Button from "react-bootstrap/Button";
import { Dropdown, Item } from "react-bootstrap";

class TrackingNumberHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   loading: true,
    };
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
              <div className="header-buttons">
                <div className="btns-row">
                <div class="row">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="myDropdown.Toggle">
                      <b>Hello, UserName!</b>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/Account">My account</Dropdown.Item>
                      <Dropdown.Item href="#/Order">My Orders</Dropdown.Item>
                      <Dropdown.Item href="#/Help">Help</Dropdown.Item>
                      <Dropdown.Item href="#">Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button>
                    <b>Orders</b>
                  </Button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default TrackingNumberHeader;
