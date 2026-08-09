document.addEventListener("DOMContentLoaded",()=>{
    let cityInput = document.getElementById("city-input")
    let getWeatherBtn = document.getElementById("get-weather-btn")
    let weatherInfo = document.getElementById("weather-info")
    let cityNameDisplay = document.getElementById("city-name")
    let temperatureDisplay = document.getElementById("temperature")
    let descriptionDisplay = document.getElementById("description")
    let errorDisplay = document.getElementById("error-message")

    
    getWeatherBtn.addEventListener("click", async function (){
        let city = cityInput.value.trim()
        if(!city) return;
        
        //server is in other continent
        //server will throw an error

        try {
            const weatherData = await fetchWeatherData(city)
            getWeatherData(weatherData)
        } catch (error) {
            displayError()
        }
    })

    function fetchWeatherData(city){

    }


    function getWeatherData(weatherData){

    }

    function displayError(){
        weatherInfo.classList.add("hidden")
        errorDisplay.classList.remove("hidden")
    }
})