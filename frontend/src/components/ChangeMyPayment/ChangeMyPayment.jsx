import React from "react";
import "../ChangeMyDeliveryAddress/ChangeMyDeliveryAddress.css";

class ChangeMyPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   loading: true,
    };
  }

  render() {
    return (
      <div className="change-address-or-payment">
        <div className="change-title">
          Change My Payment Info
        </div>
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
                  <p class="card-text">
                    User Info
                  </p>
                  <p class="card-text">
                    User Info
                  </p>
                  <p class="card-text">
                    User Info
                  </p>
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
                  <p class="card-text">
                    User Info
                  </p>
                  <p class="card-text">
                    User Info
                  </p>
                  <p class="card-text">
                    User Info
                  </p>
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
                  <p class="card-text">
                    User Info
                  </p>
                  <p class="card-text">
                    User Info
                  </p>
                  <p class="card-text">
                    User Info
                  </p>
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
