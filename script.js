let container = document.querySelector('#container')
let title=document.querySelector(`#title`)
let conditionsDiv = document.querySelector('#conditions')
let humidityDiv = document.querySelector('#humidity')
let tempDiv = document.querySelector('#temp')
let cloudCoverDiv = document.querySelector('#cloudcover')
let precipDiv = document.querySelector('#precip')
let buttonDiv=document.querySelector(`#buttonDiv`)
let newPlace



let convertToCelsius = function (number) {
  let temperature = Number(number)
  let newTemperature = (((temperature) - 32) * (5 / 9))
  let result = newTemperature.toFixed(1)
  return (result)
};

let convertToFahrenheit = function (number) {
  let temperature=Number(number)
  let newTemperature =((temperature) * (9 / 5)) + 32
  let result = newTemperature.toFixed(1)
  return (result)
};

let getWeather = function () {
  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${newPlace}?key=9VW6V5TZUV62HFKHVM5C6RFHZ`, { mode: 'cors' })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      
      conditionsDiv.textContent = `Conditions: ${response.currentConditions.conditions}`
      humidityDiv.textContent = `Humidity: ${response.currentConditions.humidity}`;
      tempDiv.textContent = `Temperature: ${response.currentConditions.temp}`;
      cloudCoverDiv.textContent = `Cloud Cover: ${response.currentConditions.cloudcover}`;
      precipDiv.textContent = `Precipitation: ${response.currentConditions.precip}`;
      title.textContent=`${newPlace}`
      while(buttonDiv.firstChild){
        buttonDiv.removeChild(buttonDiv.lastChild)
      }

      const celButton = document.createElement('button')
      celButton.classList.add('tempButton')
      celButton.textContent = 'Celsius'
      celButton.addEventListener('click', () => {
        tempDiv.textContent=`Temperature: ${(convertToCelsius(`${response.currentConditions.temp}`))}`
      })
      buttonDiv.appendChild(celButton)

      const farButton = document.createElement('button')
      farButton.classList.add('tempButton')
      farButton.textContent = 'Fahrenheit'
      farButton.addEventListener('click', () => {
        tempDiv.textContent=`Temperature: ${response.currentConditions.temp}`
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


