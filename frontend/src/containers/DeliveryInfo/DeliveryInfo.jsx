import React from "react";
import "./DeliveryInfo.css";
import DefaultHeader from "../../components/Topnav/DefaultHeader";
import DeliveryInfoForm from "../../components/DelieveryInfoForm/DelieveryInfoForm";
import FullMap from "../../components/FullMap/FullMap";
import Button from "react-bootstrap/Button";
import UserHeader from "../../components/Topnav/UserHeader";


class DeliveryInfo extends React.Component {
  constructor() {
    super();
    this.state = {
        // userInfo: null,
        // Order: {
        //   ADVType: null,
        //   OrderDate: null,
        //   CardID: null,
        //   SameDay: true,
        //   Pickup: {
        //     Name: null,
        //     Email: null,
        //     Phone: null,
        //     Coordinate:{
        //       Longitude: '',
        //       Latitude: ''
        //     },
        //     Address: {
        //       Stree1: null,
        //       Stree2: null,
        //       City: null,
        //       State: null,
        //       Zip: null
        //     }
        //     },
        //   Deliver: { 
        //     Name: null,
        //     Email: null,
        //     Phone: null,
        //     Coordinate:{
        //       Longitude: '',
        //       Latitude: ''
        //     },
        //     Address: {
        //       Stree1: null,
        //       Stree2: null,
        //       City: null,
        //       State: null,
        //       Zip: null
        //     }  
        //   }
        //   },
          pickupCoordinate: {
            Coordinate: {
              lng: null,
              lat: null
            }
          },
          deliveryCoordinate: {
            Coordinate: {
              lng: null,
              lat: null
            }
          },
          isShowForm: true,
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

isShowFormHandler = () => {
  const isShow = this.state.isShowForm;
  this.setState({
    isShowForm: !isShow
  });
  console.log("click showForm")
}

settingPickupCoordinate = (value) => {
  this.setState({
  //   Order: {
  //     Pickup: {
  //     Coordinate:{
  //       Longitude: value.lng,
  //       Latitude: value.lat
  //     }
  //   }
    
  // }
  pickupCoordinate: {
    Coordinate: {
      lng: value.lng,
      lat: value.lat
    }
  }
  });
  const pCoordinate = this.state.pickupCoordinate;
  localStorage.setItem("PickupCoordinate", JSON.stringify(pCoordinate))
 
  console.log("state pickup = ", this.state.pickupCoordinate);
}
settingDeliveryCoordinate = (value, address) => {
  this.setState({ 
    // Order: { 
    //   Deliver: {
    //     Coordinate: {
    //       Longitude: value.lng,
    //       Latitude: value.lat
    //     }
    //   } 
    // }
    deliveryCoordinate: {
      Coordinate: {
        lng: value.lng,
        lat: value.lat
      }
    }

  });
  const dCoordinate = this.state.deliveryCoordinate; // change to lng and lat
  localStorage.setItem("DeliveryCoordinate", JSON.stringify(dCoordinate))
  
  console.log("state delivery = ", this.state.deliveryCoordinate);
}
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("current props in container: ", this.state)


  }

  render() {
    const {pickupCoordinate, deliveryCoordinate} = this.state;
    const pCoordinate = pickupCoordinate.Coordinate;
    const dCoordinate = deliveryCoordinate.Coordinate;
    // console.log("to transfer pickup into FullMap: ",pCoordinate )
    // console.log("to transfer delivery into FullMap: ",dCoordinate )
    console.log("isSHhow?: ",this.state.isShowForm)
    return (
            <div className="deliveryInfo-container"> 
              {localStorage.getItem("UID")?<UserHeader 
              showUserHeaderHandler={this.showUserHeaderHandler}
              />:
            <DefaultHeader 
            showUserHeaderHandler={this.showUserHeaderHandler}
            />}
            <FullMap 
             pickupCoordinate = {pCoordinate}
             deliveryCoordinate = {dCoordinate}
             />
             { this.state.isShowForm ? 
            <DeliveryInfoForm 
              id="my-form"
              settingPickupCoordinate={this.settingPickupCoordinate}
              settingDeliveryCoordinate={this.settingDeliveryCoordinate}
              isShowFormHandler={this.isShowFormHandler}
              /> :
               <Button className="map-plus-btn" onClick={()=>{this.isShowFormHandler()}}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </Button>
  }
           </div>);
  }
}

export default DeliveryInfo;