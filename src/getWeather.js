



let convertToCelsius = function (number) {
    let temperature = Number(number)
    let newTemperature = (((temperature) - 32) * (5 / 9))
    let result = newTemperature.toFixed(1)
    return (result)
  };

  export{ convertToCelsius}