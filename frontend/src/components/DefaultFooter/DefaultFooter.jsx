import React from "react";
import "./DefaultFooter.css";

class DefaultFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <div className="default-footer">
            <div className="footer-message">
                ©2021 FlagCamp. All Rights Reserved. Made with 💙 by the Jiffy team.
            </div>
        </div>
    );
  }
}

export default DefaultFooter;