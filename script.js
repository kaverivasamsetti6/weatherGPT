function updateWeather() {

    // Get values from inputs

    const city =
        document.getElementById("city").value;

    const temperature =
        document.getElementById("temperature").value;

    const feelsLike =
        document.getElementById("feelsLike").value;

    const humidity =
        document.getElementById("humidity").value;

    const wind =
        document.getElementById("wind").value;

    const rain =
        document.getElementById("rain").value;

    const condition =
        document.getElementById("condition").value;


    // Check location

    if (city === "") {

        alert("Please enter a city or location.");

        return;
    }


    // Update dashboard

    document.getElementById("displayCity").textContent =
        city;

    document.getElementById("displayTemperature").textContent =
        temperature || "--";

    document.getElementById("displayFeels").textContent =
        feelsLike || "--";

    document.getElementById("displayFeels2").textContent =
        feelsLike || "--";

    document.getElementById("displayHumidity").textContent =
        humidity || "--";

    document.getElementById("displayWind").textContent =
        wind || "--";

    document.getElementById("displayRain").textContent =
        rain || "--";

    document.getElementById("displayCondition").textContent =
        condition;


    // Change weather icon

    let icon = "☀️";

    if (condition === "Partly Cloudy") {
        icon = "🌤️";
    }

    if (condition === "Cloudy") {
        icon = "☁️";
    }

    if (condition === "Rainy") {
        icon = "🌧️";
    }

    if (condition === "Stormy") {
        icon = "⛈️";
    }

    document.getElementById("weatherIcon").textContent =
        icon;


    // Update forecast

    document.getElementById("forecastToday").textContent =
        temperature + "°C";

    document.getElementById("forecastTomorrow").textContent =
        temperature + "°C";


    // WeatherGPT message

    let message = "";

    if (temperature >= 35) {

        message =
            `WeatherGPT: ${city} is very hot today at ${temperature}°C. Stay hydrated and avoid prolonged exposure to direct sunlight.`;

    } else if (temperature >= 30) {

        message =
            `WeatherGPT: ${city} is warm today at ${temperature}°C. Keep hydrated and dress comfortably.`;

    } else if (temperature >= 20) {

        message =
            `WeatherGPT: ${city} has comfortable weather today at ${temperature}°C.`;

    } else {

        message =
            `WeatherGPT: ${city} is relatively cool today at ${temperature}°C.`;

    }


    if (condition === "Rainy") {

        message +=
            " Rain is expected, so consider carrying an umbrella.";

    }

    if (condition === "Stormy") {

        message +=
            " Stormy conditions are reported. Take appropriate precautions.";

    }


    document.getElementById("weatherMessage").textContent =
        message;
}


function clearWeather() {

    // Clear input fields

    document.getElementById("city").value = "";

    document.getElementById("temperature").value = "";

    document.getElementById("feelsLike").value = "";

    document.getElementById("humidity").value = "";

    document.getElementById("wind").value = "";

    document.getElementById("rain").value = "";


    // Reset dashboard

    document.getElementById("displayCity").textContent =
        "Enter Location";

    document.getElementById("displayTemperature").textContent =
        "--";

    document.getElementById("displayFeels").textContent =
        "--";

    document.getElementById("displayFeels2").textContent =
        "--";

    document.getElementById("displayHumidity").textContent =
        "--";

    document.getElementById("displayWind").textContent =
        "--";

    document.getElementById("displayRain").textContent =
        "--";

    document.getElementById("displayCondition").textContent =
        "Waiting for input...";

    document.getElementById("weatherIcon").textContent =
        "☀️";

    document.getElementById("weatherMessage").textContent =
        'Enter your weather information and click "Update Dashboard".';

    document.getElementById("forecastToday").textContent =
        "--";

    document.getElementById("forecastTomorrow").textContent =
        "--";
}


function showDashboard() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}