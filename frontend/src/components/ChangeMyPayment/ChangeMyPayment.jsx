import React from "react";
import "../ChangeMyDeliveryAddress/ChangeMyDeliveryAddress.css";
import Button from "react-bootstrap/Button";
import axios from "axios";

class ChangeMyPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: "4",
      Response: {
        Card: {
          FourDigits: "1234",
          CardType: "Visa",
          CardLabel: "CardLabel",
          HolderName: "HName",
          CardAddress: {
            StreetOne: "streetone",
            StreetTwo: "streettwo",
            City: "city",
            State: "state",
            Zip: "V3W",
            AptNo: "5",
          },
          BillingAddress: {
            StreetOne: "streetone",
            StreetTwo: "streettwo",
            City: "city",
            State: "state",
            Zip: "V3W",
            AptNo: "5",
          },
          CardID: "cardid",
          Default: true,
        },
      },
      Results: [] 
      
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:8081/billing/getPayments",
      data: {
        UID: this.state.UID,
      },
    })
      .then((response) => {
        console.log("response: ", response.data);
        // const responseResults = response.data.recos;
        // console.log(responseResults);
        // this.setState({
        //     Results: this.
        // });

        console.log(this.state);
      })
      .catch((err) => {
        console.log("errrr", err);
      });
  }

  setPayments = sourceList => {
    // let 
  }

  render() {
    return (
      <div className="change-address-or-payment">
        <div className="change-title">Change My Payment Info</div>
        <hr id="line3"></hr>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <Button className="plus-btn">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <hr id="line4"></hr>
                  <p class="card-text">User Info</p>
                  <p class="card-text">User Info</p>
                  <p class="card-text">User Info</p>
                  <a href="#" class="card-link">
                    Edit
                  </a>
                  <a href="#" class="card-link">
                    Remove
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <hr id="line4"></hr>
                  <p class="card-text">User Info</p>
                  <p class="card-text">User Info</p>
                  <p class="card-text">User Info</p>
                  <a href="#" class="card-link">
                    Edit
                  </a>
                  <a href="#" class="card-link">
                    Remove
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <hr id="line4"></hr>
                  <p class="card-text">User Info</p>
                  <p class="card-text">User Info</p>
                  <p class="card-text">User Info</p>
                  <a href="#" class="card-link">
                    Edit
                  </a>
                  <a href="#" class="card-link">
                    Remove
                  </a>
                </div>
              </div>
            </div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeMyPayment;
