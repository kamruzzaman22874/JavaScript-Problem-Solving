function temperatureConverter(valNum) {
  const fahrenheit = (valNum - 32) * 5/9
  return fahrenheit;
}

let find = temperatureConverter(50)
console.log(find);