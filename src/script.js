import"./styles.css";
import {getWeather} from"./getWeather.js"
import{displayWeather} from "./displayWeather.js"

let newPlace

let locationForm = document.querySelector('#locationForm')
locationForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  newPlace = document.querySelector('#formLocation').value
  let weather=await getWeather(newPlace)
 if (weather){displayWeather(weather)}
  locationForm.reset()
}
)

export{newPlace}



//<a target="_blank" href="https://icons8.com/icon/15352/sun">Sun</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/15360/rain">Rain</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/11871/cloud">Cloud</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/15359/partly-cloudy-day">Partly Cloudy Day</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/15356/snow">Snow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>