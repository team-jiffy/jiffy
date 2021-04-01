import React from "react";
import "../static/css/addressbox.css";

class AddressBox extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //         opacity: '1'
  //     };
  //   }

  state = {
    opacity: "0",
  };

  componentDidMount() {
      if(typeof window !== "undefined"){
          window.onscroll = () => {
              let currentScrollPos = window.pageYOffset;
              let maxScroll = document.body.scrollHeight - window.innerHeight;
              // console.log(currentScrollPos);
              console.log(window.innerHeight);
              if(currentScrollPos >= document.body.scrollHeight / 4){
                  this.setState({ opacity: '1' });
                  console.log(currentScrollPos);
              }else{
                  this.setState({ opacity: '0' });
              }
          }

      }
  }

  render() {
    return <div className="address-box" style={{ opacity: `${this.state.opacity}`}}>ADDRESS BOX</div>;
  }
}

export default AddressBox;
