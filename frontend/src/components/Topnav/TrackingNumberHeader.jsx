import React from "react";
import "./TrackingNumberHeader.css";
import Button from "react-bootstrap/Button";

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

export default TrackingNumberHeader;
