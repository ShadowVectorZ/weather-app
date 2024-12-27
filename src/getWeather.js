import {newPlace, } from './script.js'

async function getWeather () {
  let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${newPlace}?key=9VW6V5TZUV62HFKHVM5C6RFHZ`, { mode: 'cors' })
  let weather=await response.json()
  console.log(weather)
  return weather  
}



let convertToCelsius = function (number) {
    let temperature = Number(number)
    let newTemperature = (((temperature) - 32) * (5 / 9))
    let result = newTemperature.toFixed(1)
    return (result)
  };

export{getWeather, convertToCelsius}