import React from 'react'
import './Weather.css';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humid_icon from '../assets/humid.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/windy.png';

const Weather = () => {
  return (
    <div className='weather'>
    <div className="searchBar">
        <input type="text" placeholder='Search' />
        <box-icon name='search' color='#f7f5f5' className='searchIcon'></box-icon>
    </div>  
    <img src={clear_icon} alt=""  className='weather-icon'/>
    <p className='temperature'>16°c</p>
    <p className='location'>London</p>
    <div className='weather-data'>
        <div className="col">
            <img src={humid_icon} alt="" width='60px'/>
            <div>
                <p>91%</p>
                <span>Humidity</span>
            </div>
        </div>

        <div className="col">
            <img src={wind_icon} alt="" width='60px' />
            <div>
                <p>3.6 Km/h</p>
                <span>Wind Speed</span>
            </div>
        </div>
     </div>
</div>
  )
}

export default Weather