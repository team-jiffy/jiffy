import React from "react";
import "./Header.css";
import Button from "react-bootstrap/Button";

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
                  aria-hidden="true"
                  style={{ marginLeft: "-40px" }}
                ></i>
              </form>
              <div className="header-buttons">
                <Button>
                  <b>Log in</b>
                </Button>
                <Button>
                  <b>Sign up</b>
                </Button>
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
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i class="fa fa-search"></i>
                    </div>
                  </div>
                  <input
                    class="form-control py-2 border-right-0 border"
                    type="search"
                    placeholder="Enter your address here"
                  />
                  <div></div>
                </div>
                <div className="header-address-btn">
                  <Button><b>Request Delivery</b></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
