import {convertToCelsius,getWeather,} from './getWeather.js'
import cloudyImage from "./images/cloudy.png"
import partCloudyImage from "./images/partly-cloudy.png"
import rainImage from "./images/rain.png"
import snowImage from "./images/snow.png"
import sunImage from "./images/sun.png"
import { title, leftSide, rightSide, conditionsDiv, humidityDiv, 
  tempDiv, cloudCoverDiv, precipDiv, descripDiv, windSpeed, minTemp,
  maxTemp, buttonDiv, img } from "./variables.js";


  
async function displayWeather(weather){
    switch(weather.currentConditions.conditions){
      case 'Partially cloudy':
        img.src=partCloudyImage;
        break;
        case 'Overcast':
        img.src=cloudyImage;
        break;
        case 'Clear':
        img.src=sunImage;
        break;
        case 'Rain':
        img.src=rainImage;
        break;
        case 'Rain, Partially cloudy':
        img.src=rainImage;
        break;
        case 'Rain, Overcast':
        img.src=rainImage;
        break;
        case 'Snow, Overcast':
        img.src=snowImage;
        break;
        case 'Snow, Partially cloudy':
        img.src=snowImage;
        break;
        case 'Snow':
        img.src=snowImage;
        break;

    }
    title.textContent=document.querySelector('#formLocation').value
    conditionsDiv.textContent = `Conditions: ${weather.currentConditions.conditions}`
    descripDiv.textContent=`Description: ${weather.description}`
    tempDiv.textContent = `Temperature: ${weather.currentConditions.temp} F`;
    minTemp.textContent=`Min Temp: ${weather.days[0].tempmin} F`
    maxTemp.textContent=`Max Temp: ${weather.days[0].tempmax} F`

    cloudCoverDiv.textContent = `Cloud Cover: ${weather.currentConditions.cloudcover}`;
    precipDiv.textContent = `Precipitation: ${weather.currentConditions.precip}`;
    humidityDiv.textContent = `Humidity: ${weather.currentConditions.humidity}`;
    windSpeed.textContent=`Wind Speed: ${weather.currentConditions.windspeed}`
   
    leftSide.setAttribute('style','width:500px;')
    leftSide.setAttribute("style", "padding:10px;")
    rightSide.setAttribute('style','width:500px;')
    
    while(buttonDiv.firstChild){
      buttonDiv.removeChild(buttonDiv.lastChild)
    }

    const celButton = document.createElement('button')
    celButton.classList.add('tempButton')
    celButton.textContent = 'Celsius'
    celButton.addEventListener('click', () => {
      tempDiv.textContent=`Temperature: ${(convertToCelsius(`${weather.currentConditions.temp}`))} C`
      minTemp.textContent=`Min Temp: ${(convertToCelsius(`${weather.days[0].tempmin}`))} C`
      maxTemp.textContent=`Max Temp: ${(convertToCelsius(`${weather.days[0].tempmax}`))} C`
    })
    buttonDiv.appendChild(celButton)

    const farButton = document.createElement('button')
    farButton.classList.add('tempButton')
    farButton.textContent = 'Fahrenheit'
    farButton.addEventListener('click', () => {
      tempDiv.textContent=`Temperature: ${weather.currentConditions.temp} F`
      minTemp.textContent=`Min Temp: ${weather.days[0].tempmin} F`
      maxTemp.textContent=`Max Temp: ${weather.days[0].tempmax} F`
    })
    buttonDiv.appendChild(farButton)


  }

export {displayWeather}