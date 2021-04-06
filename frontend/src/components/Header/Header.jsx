import React from "react";
import "./Header.css";
import Button from 'react-bootstrap/Button';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   loading: true,
    };
  }

  render() {
    return (
        <div className="header">
            <div className="guest-header">
              <div class="row">
                <div class="col">
                  <div className="logo"></div>
                </div>
                <div class="col">
                  <div className="address-search-box">
                  <i className="fa fa-search fa-2x" aria-hidden="true"></i>
                </div>
                <div class="col">
                  <span>
                    <Button className="my-button">Log in</Button>
                    <Button className="my-button">Sign Up</Button>
                  </span>
                </div>
              </div>
              {/* <div className="logo"></div>
              <div className="address-search-box">
                  <i className="fa fa-search fa-2x" aria-hidden="true"></i>
              </div>
              {/* <div className="header-btns"> 
              <span style={{marginLeft: "800px"}}>
                  <Button>Log in</Button>
                  <Button>Sign Up</Button>
              {/* </div> 
              </span> */}
              </div>
            </div>
        </div>
    );
  }
}

export default Header;
