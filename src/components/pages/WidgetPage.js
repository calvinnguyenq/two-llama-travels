import React from 'react'
import '../../App.css'
import WeatherWidget from '../WeatherWidget'
import video from '../../images/llamawalking.mp4'
import FlightWidget from '../FlightWidget';
import Hotels from '../Hotels';
import Itinerary from '../Itinerary';
import { Button } from "@material-ui/core";


class WidgetPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: '', value2: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    console.log(e);
    e.preventDefault();
    this.setState({value: e.target.destination.value, value2: e.target.location.value});
  }
  
  stopVideo(){
    document.getElementById('vid').remove();
  }

  render(){
    return (
      <div className="widget-page">
        <br></br>
        <video id='vid' src={video} autoPlay loop muted/>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={this.handleChange}>
          <div>
            <label>
              <input type="text" name="destination" component="input" placeholder='Enter Your Destination...'/>
            </label>
            <label>
              <input type="text" name="location" component="input" placeholder='Enter Your Location...'/>
            </label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
        {this.state.value && <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0, 0, 0, 0.3)', border: '4px solid white', borderRadius: '3px', width: "80%", marginTop: "30px" }}>
            <div style={{ all: 'initial', width: "100%", marginTop: '20px' }}>{this.state.value && <h1 style={{ color: 'white', textAlign: 'center' }}>Weather</h1>}</div> 
            <div style={{ width: "80%", margin: '20px' }}>{this.state.value && <WeatherWidget destination={this.state.value}/>}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0, 0, 0, 0.3)', border: '4px solid white', borderRadius: '3px', width: "80%", marginTop: "30px" }}>
            <div style={{ all: 'initial', width: "100%", marginTop: '20px' }}>{this.state.value && <h1 style={{ color: 'white', textAlign: 'center' }}>Flights</h1>}</div> 
            <div style={{ width: "80%", margin: '20px' }}>{this.state.value && <FlightWidget destination={this.state.value} place={this.state.value2}/>}</div>
         </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0, 0, 0, 0.3)', border: '4px solid white', borderRadius: '3px', width: "80%", marginTop: "30px" }}>
            <div style={{ all: 'initial', width: "100%", marginTop: '20px' }}>{this.state.value && <h1 style={{ color: 'white', textAlign: 'center' }}>Hotels</h1>}</div>
            <div style={{ all: 'initial', width: "80%", margin: '20px' }}>{this.state.value && <Hotels destination={this.state.value} />}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0, 0, 0, 0.3)', border: '4px solid white', borderRadius: '3px', width: "80%", marginTop: "30px" }}>
            <div style={{ all: 'initial', width: "100%", marginTop: '20px' }}>{this.state.value && <h1 style={{ color: 'white', textAlign: 'center' }}>Itinerary</h1>}</div>
            <div style={{ all: 'initial', width: "100%" }}>{this.state.value && <Itinerary destination={this.state.value} />}</div>
          </div>
        </div>}
      </div>
    );
  }
}

export default WidgetPage;
