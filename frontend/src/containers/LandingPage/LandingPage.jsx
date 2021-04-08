import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import React from "react";
import Header from '../../components/Header/Header';
import AddressBox from '../../components/Header/AddressBox';
import About from '../../components/About/About';


class LandingPage extends React.Component {
  
  render() {
    return (
            <div> 
                <Header />
                <AddressBox />
                <About />
           </div>);
  }
}

export default LandingPage;