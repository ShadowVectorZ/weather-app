import"./styles.css";
import cloudyImage from "./images/cloudy.png"
import partCloudyImage from "./images/partly-cloudy.png"
import rainImage from "./images/rain.png"
import snowImage from "./images/snow.png"
import sunImage from "./images/sun.png"

let container = document.querySelector('#container')
let title=document.querySelector(`#title`)
let leftSide=document.querySelector(`#left-side`)
let rightSide=document.querySelector(`#right-side`)
let conditionsDiv = document.querySelector('#conditions')
let humidityDiv = document.querySelector('#humidity')
let tempDiv = document.querySelector('#temp')
let cloudCoverDiv = document.querySelector('#cloudcover')
let precipDiv = document.querySelector('#precip')
let descripDiv=document.querySelector('#description')
let windSpeed=document.querySelector('#wind-speed')
let minTemp=document.querySelector('#min-temp')
let maxTemp=document.querySelector('#max-temp')
let buttonDiv=document.querySelector(`#buttonDiv`)
let newPlace
let img=document.querySelector('#img')

let convertToCelsius = function (number) {
  let temperature = Number(number)
  let newTemperature = (((temperature) - 32) * (5 / 9))
  let result = newTemperature.toFixed(1)
  return (result)
};

let getWeather = function () {
  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${newPlace}?key=9VW6V5TZUV62HFKHVM5C6RFHZ`, { mode: 'cors' })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      switch(response.currentConditions.conditions){
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
      title.textContent=`${newPlace}`
      conditionsDiv.textContent = `Conditions: ${response.currentConditions.conditions}`
      descripDiv.textContent=`Description: ${response.description}`
      tempDiv.textContent = `Temperature: ${response.currentConditions.temp} F`;
      minTemp.textContent=`Min Temp: ${response.days[0].tempmin} F`
      maxTemp.textContent=`Max Temp: ${response.days[0].tempmax} F`

      cloudCoverDiv.textContent = `Cloud Cover: ${response.currentConditions.cloudcover}`;
      precipDiv.textContent = `Precipitation: ${response.currentConditions.precip}`;
      humidityDiv.textContent = `Humidity: ${response.currentConditions.humidity}`;
      windSpeed.textContent=`Wind Speed: ${response.currentConditions.windspeed}`
     
      leftSide.setAttribute('style','width:500px;')
      rightSide.setAttribute('style','width:500px;')
      
      while(buttonDiv.firstChild){
        buttonDiv.removeChild(buttonDiv.lastChild)
      }

      const celButton = document.createElement('button')
      celButton.classList.add('tempButton')
      celButton.textContent = 'Celsius'
      celButton.addEventListener('click', () => {
        tempDiv.textContent=`Temperature: ${(convertToCelsius(`${response.currentConditions.temp}`))} C`
        minTemp.textContent=`Min Temp: ${(convertToCelsius(`${response.days[0].tempmin}`))} C`
        maxTemp.textContent=`Max Temp: ${(convertToCelsius(`${response.days[0].tempmax}`))} C`
      })
      buttonDiv.appendChild(celButton)

      const farButton = document.createElement('button')
      farButton.classList.add('tempButton')
      farButton.textContent = 'Fahrenheit'
      farButton.addEventListener('click', () => {
        tempDiv.textContent=`Temperature: ${response.currentConditions.temp} F`
        minTemp.textContent=`Min Temp: ${response.days[0].tempmin} F`
        maxTemp.textContent=`Max Temp: ${response.days[0].tempmax} F`
      })
      buttonDiv.appendChild(farButton)


    })
}

let locationForm = document.querySelector('#locationForm')
locationForm.addEventListener('submit', (event) => {
  event.preventDefault()
  newPlace = document.querySelector('#formLocation').value
  getWeather()
  locationForm.reset()
}
)


//<a target="_blank" href="https://icons8.com/icon/15352/sun">Sun</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/15360/rain">Rain</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/11871/cloud">Cloud</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/15359/partly-cloudy-day">Partly Cloudy Day</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/15356/snow">Snow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>