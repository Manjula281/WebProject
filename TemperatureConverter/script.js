function convertFromCelsius() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;
        document.getElementById('result').innerText = `
            ${celsius} °C is ${fahrenheit.toFixed(2)} °F and ${kelvin.toFixed(2)} K`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid Celsius temperature.';
    }
}

function convertFromFahrenheit() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        const kelvin = celsius + 273.15;
        document.getElementById('result').innerText = `
            ${fahrenheit} °F is ${celsius.toFixed(2)} °C and ${kelvin.toFixed(2)} K`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid Fahrenheit temperature.';
    }
}

function convertFromKelvin() {
    const kelvin = parseFloat(document.getElementById('kelvin').value);
    if (!isNaN(kelvin)) {
        const celsius = kelvin - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('result').innerText = `
            ${kelvin} K is ${celsius.toFixed(2)} °C and ${fahrenheit.toFixed(2)} °F`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid Kelvin temperature.';
    }
}
