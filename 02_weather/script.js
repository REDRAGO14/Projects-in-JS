document.addEventListener("DOMContentLoaded", ()=>{
    let getWeatherBTN = document.getElementById("get-weather-btn")
    let cityInput = document.getElementById("city-input")
    let WeatherInfo = document.getElementById("weather-info")
    let cityNameDisplay = document.getElementById("city-name")
    let cityTempDisplay= document.getElementById("temperature")
    let weatherDescDisplay= document.getElementById("discription")
    let errorDisplay = document.getElementById("error-message")

    getWeatherBTN.addEventListener("click", async ()=>{
        let city = cityInput.value.trim()
        if(!city) return;

        try {
            let weatherData = await fetchWeatherData(city)
            displayWeatherData(weatherData)
        } catch (error) {
            displayError()
        }
        
    })

    function fetchWeatherData(city){

    }

    function displayWeatherData(data){

    }
    
    function displayError(){
        WeatherInfo.classList.add("hidden")
        errorDisplay.classList.remove("hidden")
    }
})