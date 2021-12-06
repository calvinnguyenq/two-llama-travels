import React from 'react';
import '../App.css';

function WeatherWidget(props){

  function s(e){
    var location = props.destination;
    window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
    window.weatherWidgetConfig.push({
      selector:".weatherWidget",
      apiKey:"XGX5QTAJ8S85CYHLFNKXL4MT5", //Sign up for your personal key
      location: location, //Enter an address
      unitGroup:"us", //"us" or "metric"
      forecastDays:7, //how many days forecast to show
      title: location, //optional title to show in the 
      showTitle:true, 
      showConditions:true
    });
    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
        s.setAttribute('data-timestamp', + new Date());
        (d.head || d.body).appendChild(s);
    })();

  }
  return (
    <div class="weatherWidget">
      <button onClick={s}>
        SHOW ME THE WEATHER!!!
      </button>
        
      
      
    </div>
  )
}

export default WeatherWidget;


