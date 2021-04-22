
import React from "react"
import { compose, withProps, lifecycle } from "recompose";
import {withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
import './SmallMap.css';

//  defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };

const SmallMapComponent =   compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAb2fv1tmCYdP1vvN9s-g58QOCKog8R0LY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `93vh` }} />,
    mapElement: <div style={{ height: `500px` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({







    // componentDidUpdate(prevProps, prevState, snapshot) {
    
    //   console.log("now Props = ", this.props);
    //   if (
    //     prevProps.pickupCoordinate &&
    //     (prevProps.pickupCoordinate.lat 
    //     !== this.props.currentState.pickupCoordinate.lat)) {
    //     this.setState({
    //       pickupCoordinate : {
    //         lng: this.props.currentState.pickupCoordinate.lng,
    //         lat: this.props.currentState.pickupCoordinate.lat
    //     }
    //     });
    //   }
    //       if ( prevProps.deliveryCoordinate &&
    //         (prevProps.deliveryCoordinate.lat !== this.props.currentState.deliveryCoordinate.lat)) {
            
    //         this.setState({
    //           deliveryCoordinate : {
    //             lng: this.props.currentState.deliveryCoordinate.lng,
    //             lat: this.props.currentState.deliveryCoordinate.lat
    //         }
    //         });
    //   }
      
    //   if (this.props.currentState.pickupCoordinate.lat && this.props.currentState.deliveryCoordinate.lat) {
    //     console.log("pick onMap: ", this.props.currentState.pickupCoordinate)
    //     console.log("delievery onMap: ", this.props.currentState.deliveryCoordinate)
    //   const directionsService = new window.google.maps.DirectionsService();
    //   const origin = new window.google.maps.LatLng( 37.6, -122.2 );
    //   // const origin = new window.google.maps.LatLng(  this.state.pickupCoordinate.lat, this.state.pickupCoordinate.lng );
    //   const destination = new window.google.maps.LatLng( 37.5, -122.3 );
    //   // const destination = new window.google.maps.LatLng( this.state.deliveryCoordinate.lat, this.state.deliveryCoordinate.lng);
      
    //   directionsService.route(
    //     {
    //       origin: origin,
    //       destination: destination,
    //       travelMode: window.google.maps.TravelMode.DRIVING
    //     },
    //     (result, status) => {
    //       if (status === window.google.maps.DirectionsStatus.OK) {
    //         this.setState({
    //           directions: result
    //         });
    //          console.log(" result = ", result)
            
    //       } else {
    //         console.error(`error fetching directions ${result}`);
    //       }
    //     }
    //   );
    //   }
    // }
    
   componentDidUpdate(prevProps, prevState, snapshot) {

     console.log("didMount on lifecycle")
     console.log(this.props.pickupCoordinate)
     console.log(this.props.deliveryCoordinate)
     if (this.props.pickupCoordinate.Coordinate.lat && this.props.deliveryCoordinate.Coordinate.lat) 
     
    {
      const directionsService = new window.google.maps.DirectionsService();
       // const origin = new window.google.maps.LatLng( 37.7749, -122.4194 );
       const origin = new window.google.maps.LatLng(  this.props.pickupCoordinate.Coordinate.lat, this.props.pickupCoordinate.Coordinate.lng );
     // const destination = new window.google.maps.LatLng( 37.6213, -122.3789 );
       const destination = new window.google.maps.LatLng( this.props.deliveryCoordinate.Coordinate.lat, this.props.deliveryCoordinate.Coordinate.lng);
       const cCoordinate = this.props.centerCalculate(this.props.pickupCoordinate.Coordinate , this.props.deliveryCoordinate.Coordinate);
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
              centerCoordinate: {
                lng: cCoordinate.lng,
                lat: cCoordinate.lat
              }
            });
             console.log(" result = ", result)
            
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
   }
  }
}
  )
)((props) =>
  <GoogleMap
    style={{height: "100px"}}
    defaultZoom={10}
    defaultCenter={{ lat: 37.7, lng: -122.2 }}
    center={
       console.log("center1 ", props.centerCoordinate),
      // (!props.centerCoordinate.lat && !props.centerCoordinate.lng) ? 
      { lat: 37.8, lng: -122.4 } 
      //{ lat: props.centerCoordinate.lat, lng: props.centerCoordinate.lng }}
    }> 
  {/* {console.log("des =", dest)} */}
    {/* {props.isMarkerShown && <Marker position={{ lat: 37.7, lng: -122.4 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 37.5, lng: -122.3 }} onClick={props.onMarkerClick} />} */}
    {console.log("props in <GoogleMap> ", props)}
    {props.directions && <DirectionsRenderer
          directions={props.directions}
          position={{ lat: 37.7, lng: -122.7 }}
        />}
        {/* <DirectionsRenderer
          directions={dest}
        /> */}
  </GoogleMap>
)

class SmallMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
       pickupCoordinate: {
        lng: null,
        lat: null
    },
   deliveryCoordinate: {
        lng: null,
        lat: null
    },
    isMarkerShown: false,
    
    directions: null,
   centerCoordinate: {
      lng: null ,
      lat: null
    }


    }
  }
  
  componentDidMount() {
    this.delayedShowMarker()
 
  }
  // shouldComponentUpdate(nextProps, nextState ){
  //   console.log("should: ", nextProps)
  //   if (this.state.pickupCoordinate !== this.props.pickCoordinate) {
  //     return true
  //   } else false
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.pickupCoordinate !== this.props.pickupCoordinate ) {
      this.setState({
        pickupCoordinate: {
          lng: this.props.pickupCoordinate.lng,
          lat: this.props.pickupCoordinate.lat
      }
      });
    }
    if (prevProps.deliveryCoordinate !== this.props.deliveryCoordinate ) {
      this.setState({
        deliveryCoordinate: {
          lng: this.props.deliveryCoordinate.lng,
          lat: this.props.deliveryCoordinate.lat
      }
      });
    }
    // if (this.state.pickupCoordinate.lat && this.state.deliveryCoordinate.lat) {
    //   const cCoordinate = this.centerCalculate(this.state.pickupCoordinate, this.state.deliveryCoordinate)
    //   this.setState({
    //     centerCoordinate: {
    //       lng: cCoordinate.lng,
    //       lat: cCoordinate.lat
    //     }
    //   });
    // }
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  centerCalculate= (pickupCoordinate, deliveryCoordinate) => {
    const centerCoordinate = {
      lng: (pickupCoordinate.lng + deliveryCoordinate.lng) / 2 - 1,
      lat: (pickupCoordinate.lat + deliveryCoordinate.lat) / 2 
    }
    return centerCoordinate;

  }
  
  // componentDidUpdate(prevProps, prevState, snapshot) {
    
  //   console.log("now Props = ", this.props);
  //   if (prevProps.pickupCoordinate != this.props.pickupCoordinate) {
  //     this.setState({
  //       pickupCoordinate : {
  //         lng: this.props.pickupCoordinate.lng,
  //         lat: this.props.pickupCoordinate.lat
  //     }
  //     });
  //   }
  //       if (prevProps.deliveryCoordinate != this.props.deliveryCoordinate) {
          
  //         this.setState({
  //           deliveryCoordinate : {
  //             lng: this.props.deliveryCoordinate.lng,
  //             lat: this.props.deliveryCoordinate.lat
  //         }
  //         });
  //   }
    
  //   if (this.state.pickupCoordinate.lat && this.state.deliveryCoordinate.lat) {
  //     console.log("pick onMap: ", this.state.pickupCoordinate)
  //     console.log("delievery onMap: ", this.state.deliveryCoordinate)
  //   const directionsService = new window.google.maps.DirectionsService();
  //   const origin = new window.google.maps.LatLng( 37.6, -122.2 );
  //   // const origin = new window.google.maps.LatLng(  this.state.pickupCoordinate.lat, this.state.pickupCoordinate.lng );
  //   const destination = new window.google.maps.LatLng( 37.5, -122.3 );
  //   // const destination = new window.google.maps.LatLng( this.state.deliveryCoordinate.lat, this.state.deliveryCoordinate.lng);
    
  //   directionsService.route(
  //     {
  //       origin: origin,
  //       destination: destination,
  //       travelMode: window.google.maps.TravelMode.DRIVING
  //     },
  //     (result, status) => {
  //       if (status === window.google.maps.DirectionsStatus.OK) {
  //         this.setState({
  //           directions: result
  //         });
  //          console.log(" result = ", result)
          
  //       } else {
  //         console.error(`error fetching directions ${result}`);
  //       }
  //     }
  //   );
  //   }
  // }


  render() {
    console.log("Small Map state: ",this.state)
    const defaultCurrentCenter = {lat: 37.7, lng: -122.6}
    const currentCenter = this.state.centerCoordinate.lat ? this.state.centerCoordinate : defaultCurrentCenter;
    return (
        <div className="small-map-containter">
      <SmallMapComponent
        currentState = {this.state}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        centerCalculate= {this.centerCalculate}
        centerCoordinate={currentCenter}
        pickupCoordinate = {this.props.pickupCoordinate}
        deliveryCoordinate = {this.props.deliveryCoordinate}
      />
      </div>
    )
  }
}

export default SmallMap;
