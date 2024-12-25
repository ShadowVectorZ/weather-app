const greeting = "Hello, Odinite!";
const farewell = "Bye bye, Odinite!";

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
let img=document.querySelector('#img')

export { title, leftSide, rightSide, conditionsDiv, humidityDiv, 
    tempDiv, cloudCoverDiv, precipDiv, descripDiv, windSpeed, minTemp,
    maxTemp, buttonDiv, img };