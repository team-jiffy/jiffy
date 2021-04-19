import React, { Component } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import './DelieveryInfoForm.css';
/**
 * Handle the pincode autocomplete text box.
 */
class FromAutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  // handleSelect = address => {
  //   geocodeByAddress(address)
  //     .then(results => {
  //       console.log("address: ", results[0]) 
  //       return getLatLng(results[0]);
      
  //   }
  //     )
  //     .then(latLng => {
  //       this.props.setLocation(latLng);
  //     })
  //     .catch(error => {
  //       console.error('Error', error);
  //       alert("Error Input")
  //     });
  //   this.setState({ address: '' });
  // };
  handleSelect = async value => {
    const results = await geocodeByAddress(value);
    console.log("autoComplete results: ", results);
    const coordinate = await getLatLng(results[0]);
   this.props.settingPickupAddress(results[0].address_components);
    console.log("autoComplete coordinate: ", coordinate);
    this.props.settingPickupCoordinate(coordinate);

  }
  
 
  render() {
    return (
      <div className="deliveryInfo-senderAutoComplete">
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        className="ps-pinBack"
        
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
            required="required"
              {...getInputProps({
                placeholder: 'Enter pick up address',
                className:'deliveryInfo-senderAutoComplete'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, i) => {
                const style = suggestion.active
                ? { backgroundColor: '#e7e5e5', cursor: 'pointer' }
                : { backgroundColor: '#fafafa', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion)}
                  key={i}
                  
                  style={style}
                >
                    <span className="main-autocomplete-list">{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </div>
    );
  }
}

export default FromAutoComplete;