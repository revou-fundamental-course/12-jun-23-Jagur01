// JavaScript logic for temperature conversion
document.getElementById("temperatureForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var temperature = parseFloat(document.getElementById("temperature").value);
  var unit = document.getElementById("unit").value;
  var result;

  if (unit === "celsius") {
      result = (temperature * 9/5) + 32;
      document.getElementById("result").innerHTML = temperature + " Celsius = " + result + " Fahrenheit";
  } else {
      result = (temperature - 32) * 5/9;
      document.getElementById("result").innerHTML = temperature + " Fahrenheit = " + result + " Celsius";
  }
});