document.addEventListener("DOMContentLoaded",()=>{
    let cityInput = document.getElementById("city-input")
    let getWeatherBtn = document.getElementById("get-weather-btn")
    let weatherInfo = document.getElementById("weather-info")
    let cityNameDisplay = document.getElementById("city-name")
    let temperatureDisplay = document.getElementById("temperature")
    let descriptionDisplay = document.getElementById("description")
    let errorDisplay = document.getElementById("error-message")

    let API_KEY = "c5dc9142934fa9a0f84a112b3d1d4f25"
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

    async function fetchWeatherData(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

        let response =  await fetch(url)

        if(!response.ok){
            throw new Error("request failed")
        }
    
        return response.json()
    }


    function getWeatherData(weatherData){

    }

    function displayError(){
        weatherInfo.classList.add("hidden")
        errorDisplay.classList.remove("hidden")
    }
})