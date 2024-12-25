import {getWeather} from './weatherInfo'
let newPlace
let locationForm = document.querySelector('#locationForm')
locationForm.addEventListener('submit', (event) => {
  event.preventDefault()
  newPlace = document.querySelector('#formLocation').value
  getWeather()
  locationForm.reset()
}
)

export {newPlace}