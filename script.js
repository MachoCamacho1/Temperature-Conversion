const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

//convert function to check temperature
function convert() {
    if(toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32; //equation to convert to fahrenheit
        result.textContent = temp.toFixed(1) + "F";
    } else if(toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9); //equation to convert to celsius
        result.textContent = temp.toFixed(1) + "C";
    } else {
        result.textContent = "Select a unit"; //message when no button was selected
    }
}