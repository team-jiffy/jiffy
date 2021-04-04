import React from "react";
import "./Header.css";


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
            HEADER/HOME
        </div>
    );
  }
}

export default Header;
