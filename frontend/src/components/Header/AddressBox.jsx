import React from "react";
import "./AddressBox.css";
import Button from "react-bootstrap/Button";

class AddressBox extends React.Component {
  state = {
    opacity: "0",
  };

  componentDidMount() {
      // if(typeof window !== "undefined"){
      //     window.onscroll = () => {
      //         let currentScrollPos = window.pageYOffset;
      //         let maxScroll = document.body.scrollHeight - window.innerHeight;
      //         // console.log(currentScrollPos);
      //         // console.log(window.innerHeight);
      //         if(currentScrollPos >= document.body.scrollHeight / 4){
      //             this.setState({ opacity: '1' });
      //             console.log(currentScrollPos);
      //         }else{
      //             this.setState({ opacity: '0' });
      //         }
      //     }

      // }
      window.onscroll = function() { showMiniSearch() };

      var header = document.getElementById('mini-search');
      var sticky = header.offsetTop;
  
      function showMiniSearch() {
        if (window.pageYOffset > sticky/4) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      }  
  }

  render() {
    // return <div className="address-box" style={{ opacity: `${this.state.opacity}`}}>ADDRESS BOX</div>;
    return (
      <div class="mini-search" id="mini-search">
      {/* <div class="row">
        <div class="col-3">
          <div class="logo-wrap">
            <div class="logo"></div>
          </div>
        </div>
        <div class="col-9 mt-4">
          <div class="input-group mb-3">
            <input type="text" class="form-control" name="q" placeholder="Enter Your Search Here" aria-label="Search Criteria" aria-describedby="search-addon" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i> Search</button>
            </div>
          </div>
        </div> 
      </div> */}
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
    </div>
    );
  }
}

export default AddressBox;
