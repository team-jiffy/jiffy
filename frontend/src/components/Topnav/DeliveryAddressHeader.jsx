import React from "react";
import Button from "react-bootstrap/Button";
import "./TrackingNumberHeader.css";

class DeliveryAddressHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
    };
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
      </div>
    );
  }
}

export default DeliveryAddressHeader;
