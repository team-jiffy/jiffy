import React from 'react';
import './LandingPage.css';
import Button from 'react-bootstrap/Button';
import LandingPageAbout from '../../components/LangdingPageAbout/LandingPageAbout';
import DefaultFooter from '../../components/DefaultFooter/DefaultFooter';

import DeliveryAddressHeader from '../../components/Topnav/DeliveryAddressHeader';
import TrackingNumberHeader from '../../components/Topnav/TrackingNumberHeader';
import AddressBox from './AddressBox';
import UserHeader from "../../components/Topnav/UserHeader"

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   loading: true,
      isShowUserHeader: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem("UID")) {
        this.setState({
            isShowUserHeader: true
        })
    }
}
showUserHeaderHandler = () => {
    const isShow = this.state.isShowUserHeader;
    this.setState({
        isShowUserHeader: !isShow
    });  
}
  render() {
    return (
      <div>
        <div className="header">
          {localStorage.getItem("UID")? <UserHeader
          showUserHeaderHandler={this.showUserHeaderHandler} />:
          <TrackingNumberHeader 
          showUserHeaderHandler={this.showUserHeaderHandler}/>

  }
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
                    <Button className="request-delivery-btn">
                      <b>Request Delivery</b>
                    </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {localStorage.getItem("UID")?<UserHeader
        showUserHeaderHandler={this.showUserHeaderHandler} />:
        <DeliveryAddressHeader style={{position: "fixed"}}
        showUserHeaderHandler={this.showUserHeaderHandler}
        />}
        <LandingPageAbout />
        <DefaultFooter />
      </div>
    );
  }
}

export default LandingPage;
