import React from 'react'
import '../../App.css'
import WeatherWidget from '../WeatherWidget'
import video from '../../images/llamawalking.mp4'
import FlightWidget from '../FlightWidget';
import Hotels from '../Hotels';



class WidgetPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.state = {value2: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }
  handleChange2(e){
    this.setState({value2: e.target.value});
  }
  
  stopVideo(){
    document.getElementById('vid').remove();
    
  }

  render(){
    return (
      <div className="widget-page">
        <br></br>
        <video id='vid' src={video} autoPlay loop muted/>
        <form>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Enter Your Destination...'/>
          </label>
        </form>
        <form>
          <label>
            <input type="text" value={this.state.value2} onChange={this.handleChange2} placeholder='Enter Your Location...'/>
          </label>
        </form>
          <WeatherWidget destination={this.state.value}/>
          <FlightWidget destination={this.state.value} place={this.state.value2}/>
          <Hotels/>

          <button type="button" onClick={this.stopVideo}>
            No Background
          </button>
            
      </div>
    );
  }
}

export default WidgetPage;
