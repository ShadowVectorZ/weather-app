import"./styles.css";



import{displayWeather} from "./displayWeather.js"




let newPlace
async function getWeather () {
  let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${newPlace}?key=9VW6V5TZUV62HFKHVM5C6RFHZ`, { mode: 'cors' })
  let dataset=response.json()
  console.log(dataset)
  return await dataset
   
}


let locationForm = document.querySelector('#locationForm')
locationForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  newPlace = document.querySelector('#formLocation').value
  let weather= await getWeather(newPlace)
  displayWeather(weather)
  console.log(newPlace)
  locationForm.reset()
}
)

export{getWeather}



//<a target="_blank" href="https://icons8.com/icon/15352/sun">Sun</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/15360/rain">Rain</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/11871/cloud">Cloud</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/15359/partly-cloudy-day">Partly Cloudy Day</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/15356/snow">Snow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>