let container=document.querySelector('#container') 
 let place='London'
 fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=9VW6V5TZUV62HFKHVM5C6RFHZ`, {mode: 'cors'})
 .then(function(response) {
  return response.json();
})
  .then(function(response) {
    console.log(response.currentConditions.conditions);
    console.log(response.currentConditions.humidity);
    console.log(response.currentConditions.temp);
    console.log(response.currentConditions.cloudcover);
    console.log(response.currentConditions.precip);
    
  });

  let locationForm = document.querySelector('#locationForm')
  locationForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    let newPlace=document.querySelector('#formLocation').value
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${newPlace}?key=9VW6V5TZUV62HFKHVM5C6RFHZ`, {mode: 'cors'})
    .then(function(response) {
     return response.json();
   })
     .then(function(response) {
       console.log(response.currentConditions.conditions);
       console.log(response.currentConditions.humidity);
       console.log(response.currentConditions.temp);
       console.log(response.currentConditions.cloudcover);
       console.log(response.currentConditions.precip);
       
     });
  }
  )

