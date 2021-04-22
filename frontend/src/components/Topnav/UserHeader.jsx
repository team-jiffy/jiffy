import React from "react";
import "./TrackingNumberHeader.css";
import Button from "react-bootstrap/Button";
import { Dropdown, Item } from "react-bootstrap";
import { Route, Switch, Link,withRouter } from 'react-router-dom';

class TrackingNumberHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   loading: true,
      currUser: ""
    };
  }
  logoutHandler= () => {
    localStorage.clear();
    this.props.showUserHeaderHandler();
    this.props.history.push("/")
  }


  // componentDidMount(){
  //   var logedinUser = localStorage.getItem('currUser').toUpperCase();
  //   console.log("curruser is: " + logedinUser);
  //   this.setState({currUser: logedinUser});
  // }

  render() {
    return (
      <div className="tracking-no-header">
        <nav class="navbar">
          <div class="container-fluid">
            <div class="row">
              <a class="navbar-brand" href="/">
                <div className="logo" alt="JIFFY" />
              </a>
              <div className="header-buttons">
                <div className="btns-row">
                <div class="myaccount-row">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="myDropdown.Toggle">
                      <b>Hello, {localStorage.getItem("FirstName")}</b>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/AccountAddress">My account</Dropdown.Item>
                      <Dropdown.Item href="/AccountOrders">My Orders</Dropdown.Item>
                      <Dropdown.Item href="#/Help">Help</Dropdown.Item>
                      <Dropdown.Item href="#" onClick={()=>{this.logoutHandler()}}>Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button className="userhead-order-button" style={{marginLeft: "-50px"}}>
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

export default withRouter(TrackingNumberHeader);
