import React, { useState } from 'react'
import lightrainbg from './assets/lightrain.jpg'
import defaultbg from './assets/default.jpeg'
import scatteredcloudsbg from './assets/scatteredclouds.jpg'
import overcastcloudbg from './assets/overcastclouds.jpg'
import brokencloudsbg from './assets/brokenclouds.jpg'
import hotbg from './assets/hot.jpg'
import clearskybg from './assets/clearsky.jpg'
import moderaterainbg from './assets/rainy.jpeg';
import fewcloudsbg from './assets/fewclouds.jpg';
import rainbg from './assets/rain.jpg';
import hazebg from './assets/haze.jpeg';
import dustbg from './assets/dust.jpeg';

import Description from './components/Description'
import { useEffect } from 'react'
import { getWeatherData } from './WeatherService'
const App = () => {
  const[city,setcity]=useState('lahore')
  const[bg,setbg]=useState(hotbg)
  const[weather,setweather]=useState(null)
  const[unit,setunit]=useState("metric")
  useEffect(()=>{
     const fetchWeatherData= async ()=>{
      const data=await getWeatherData(city,unit);
      setweather(data);
    const weatherDescription = data.description.toLowerCase();
    if (weatherDescription.includes('clear sky')) {
      setbg(clearskybg);
    } else if (weatherDescription.includes('scattered clouds')) {
      setbg(scatteredcloudsbg);
    }
    else if (weatherDescription.includes('overcast clouds')) {
      setbg(overcastcloudbg);
    }
    else if (weatherDescription.includes('broken clouds')) {
      setbg(brokencloudsbg);
    }
    else if (weatherDescription.includes('moderate rain')) {
      setbg(moderaterainbg);
    }
    else if (weatherDescription.includes('few clouds')) {
      setbg(fewcloudsbg);
    }
    else if (weatherDescription.includes('heavy intensity rain')) {
      setbg(rainbg);
    }
    else if (weatherDescription.includes('haze')) {
      setbg(hazebg);
    }
    else if (weatherDescription.includes('dust')) {
      setbg(dustbg);
    }
    else if (weatherDescription.includes('light rain')) {
      setbg(lightrainbg);
    }
    else setbg(defaultbg)
  };
     fetchWeatherData();
     
  },[unit,city]) 
  
  const enterkeypressed=(e)=>{
    if(e.keyCode===13){
      setcity(e.currentTarget.value)
      e.currentTarget.blur()
    }

  }
  const handleclick=(e)=>{
      const button =e.currentTarget;
      const currentUnit=button.innerText.slice(1)
      const isClesius=currentUnit==='C'
      button.innerText= isClesius ? '°F' : '°C'
      setunit(isClesius ? 'metric' : 'imperial')

  }
  return (
    <div className='app' style={{backgroundImage:`url(${bg})`}}>
    <div className="overlay">
    {
      weather && (
        <div className="container">
        <div className="section section_inputs">
              <input type="text" onKeyDown={enterkeypressed} name="city" placeholder='Enter City...' />
              <button onClick={(e)=>handleclick(e)}>°F</button>
        </div>

        <div className="section section_temperature">
        <div className="icon">
          <h3>{`${weather.name},${weather.country}`}</h3>
          <img src={weather.iconURL} alt="weatherIcon" />
          <h3>{weather.description}</h3>
        </div>
        <div className="temperature">
            <h1>{`${weather.temp.toFixed()}  ${unit==='metric' ? '°C' : '°F'}` }</h1> 
        </div>
        </div>

        <Description weather={weather}/>
      </div>
      )
    }
      
    </div>
    </div>
   
  )
}

export default App
