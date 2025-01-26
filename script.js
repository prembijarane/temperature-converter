// Function to perform the temperature conversion
function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value.trim();
    const inputUnit = document.getElementById("unit").value;
    const resultDisplay = document.getElementById("converted-temperature");

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === "") {
        resultDisplay.textContent = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemp = "";
    let outputUnit = "";

    // Conversion logic
    if (inputUnit === "Celsius") {
        convertedTemp = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)}, Kelvin: ${(temperature + 273.15).toFixed(2)}`;
    } else if (inputUnit === "Fahrenheit") {
        convertedTemp = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)}, Kelvin: ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)}`;
    } else if (inputUnit === "Kelvin") {
        convertedTemp = `Celsius: ${(temperature - 273.15).toFixed(2)}, Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}`;
    }

    // Display the result
    resultDisplay.textContent = convertedTemp;
}

// Attach event listener to the button
document.getElementById("convert-button").addEventListener("click", convertTemperature);
