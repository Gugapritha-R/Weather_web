import React, { useEffect, useRef, useState } from 'react'
import './Weather.css';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humid_icon from '../assets/humid.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/windy.png';

const Weather = () => {

    const userInput=useRef()
    const [weatherDets,setWeatherDets]=useState(false);
    
    
    const Icons ={

        "01d":clear_icon,
        "01n":clear_icon,
        "02d":cloud_icon,
        "02n":cloud_icon,
        "03d":cloud_icon,
        "03n":cloud_icon,
        "04d":drizzle_icon,
        "04n":drizzle_icon,
        "09d":rain_icon,
        "09n":rain_icon,
        "10d":rain_icon,
        "10n":rain_icon,
        "13d":snow_icon,
        "13n":snow_icon,


    }
    
    
    
    
    const search= async(city)=>{


        if(city===""){

            alert("Enter a city/place name!");
            return;
        }

    try{
        const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;

        const response= await fetch(apiUrl);

        const data=await response.json();
        console.log(data);

        if(!response.ok){

            alert(data.message);
            return;
        }

        const currentWeatherIcon=Icons[data.weather[0].icon] || clear_icon;

        setWeatherDets({
            humidity: data.main.humidity,
            windspeed: data.wind.speed,
            temperature:Math.floor(data.main.temp),
            cityName:data.name,
            icon:currentWeatherIcon

        })
    }catch(error){

        setWeatherDets(false);
        console.error("Error in fetching weather data...");
    }
}


        useEffect(()=>{

            search("Bangalore");
        },[])

  return (
    <div className='weather'>

    <div className="searchBar">
        <input ref={userInput} type="text" placeholder='Search' />
        <box-icon name='search' color='#f7f5f5' className='searchIcon' onClick={()=>search(userInput.current.value)}></box-icon>
    </div> 
    {weatherDets ? <>
    

        <img src={weatherDets.icon} alt=""  className='weather-icon'/>
    <p className='temperature'>{weatherDets.temperature}°c</p>
    <p className='location'>{weatherDets.cityName}</p>
    <div className='weather-data'>
        <div className="col">
            <img src={humid_icon} alt="" width='60px'/>
            <div>
                <p>{weatherDets.humidity}%</p>
                <span>Humidity</span>
            </div>
        </div>

        <div className="col">
            <img src={wind_icon} alt="" width='60px' />
            <div>
                <p>{weatherDets.windspeed} Km/h</p>
                <span>Wind Speed</span>
            </div>
        </div>
     </div>

    </>:<></>} 


    
</div>
  )
}

export default Weather