function convertTemperature(temp, fromUnit) {
    let result;
    
    if (fromUnit === "Celsius") {
        let fahrenheit = (temp * 9/5) + 32;
        let kelvin = temp + 273.15;
        result = `${fahrenheit.toFixed(2)} °F | ${kelvin.toFixed(2)} K`;
    } else if (fromUnit === "Fahrenheit") {
        let celsius = (temp - 32) * 5/9;
        let kelvin = celsius + 273.15;
        result = `${celsius.toFixed(2)} °C | ${kelvin.toFixed(2)} K`;
    } else if (fromUnit === "Kelvin") {
        let celsius = temp - 273.15;
        let fahrenheit = (celsius * 9/5) + 32;
        result = `${celsius.toFixed(2)} °C | ${fahrenheit.toFixed(2)} °F`;
    }
    
    return result;
}

document.getElementById('convertButton').addEventListener('click', function() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    
    if (isNaN(tempInput) || tempInput === '') {
        document.getElementById('result').innerText = 'Please enter a valid number';
    } else {
        const temperature = parseFloat(tempInput);
        const result = convertTemperature(temperature, unitInput);
        document.getElementById('result').innerText = `Result: ${result}`;
    }
});