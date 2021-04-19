import React from "react";
import "./LandingPage.css";
import Button from "react-bootstrap/Button";
import LandingPageAbout from "../../components/LangdingPageAbout/LandingPageAbout";
import DefaultFooter from "../../components/DefaultFooter/DefaultFooter";

import DeliveryAddressHeader from "../../components/Topnav/DeliveryAddressHeader";
import AddressBox from "./AddressBox";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   loading: true,
    };
  }

  render() {
    return (
      <div>
        <div className="header">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <div class="row">
                <a class="navbar-brand" href="#">
                  <div className="logo" alt="JIFFY" />
                </a>
                <form>
                  <div class="row">
                  <input
                    className="address-search-box"
                    type="search"
                    placeholder="Enter your tracking number"
                    aria-label="Search"
                    href="/Tracking"
                  />
   
                    <a href="/Tracking">
                      <i
                        className="fa fa-search fa-2x"
                        aria-hidden="true"
                        style={{ marginTop: "10px", color:"black"}}
                      ></i>
                    </a>
        
                  </div>
                </form>
                <div className="header-buttons">
                  <a href="/SignIn">
                    <Button>
                      <b>Log in</b>
                    </Button>
                  </a>
                  <a href="/SignUp">
                    <Button>
                      <b>Sign up</b>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="catch-line">Fly your pack in a moment</div>
          <div>
            <div class="container">
              <div class="row">
                {/* <div class="input-group">
                <form>

                    <i
                      className="fa fa-search fa-2x"
                      aria-hidden="true"
                    ></i>
                    <input className="header-address" type="search" placeholder="Enter your address">
                    </input>
     
                </form>
              </div> */}
                <div className="header-address">
                  <div class="input-group">
                    {/* <div class="input-group-prepend"> */}
                      <div class="input-group-text">
                        <i class="fa fa-search"></i>
                      </div>
                    {/* </div> */}
                    <input
                      class="form-control py-2 border-right-0 border"
                      type="search"
                      placeholder="Enter your address here"
                    />
                    <div></div>
                  </div>
                  <div className="header-address-btn">
                    <a href="/DeliveryInfo">
                    <Button>
                      <b>Request Delivery</b>
                    </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DeliveryAddressHeader style={{position: "fixed"}}/>
        <LandingPageAbout />
        <DefaultFooter />
      </div>
    );
  }
}

export default LandingPage;
