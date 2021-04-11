import React from "react";
import "./TrackingNumberHeader.css";
import Button from "react-bootstrap/Button";

class DefaultHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
      </div>
    );
  }
}

export default DefaultHeader;
