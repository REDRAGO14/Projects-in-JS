document.addEventListener("DOMContentLoaded", ()=>{
    let getWeatherBTN = document.getElementById("get-weather-btn")
    let cityInput = document.getElementById("city-input")
    let WeatherInfo = document.getElementById("weather-info")
    let cityNameDisplay = document.getElementById("city-name")
    let cityTempDisplay= document.getElementById("temperature")
    let weatherDescDisplay= document.getElementById("description")
    let errorDisplay = document.getElementById("error-message")
    let API_key = "c5dc9142934fa9a0f84a112b3d1d4f25"
    getWeatherBTN.addEventListener("click", async ()=>{
        let city = cityInput.value.trim()
        if(!city) return;

        try {
            let weatherData =  await fetchWeatherData(city)
            
            displayWeatherData(weatherData)
        } catch (error) {
            displayError()
        }
        
    })

    async function fetchWeatherData(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`

        let response = await fetch(url)
        console.log(response.ok);
        
        if(!response.ok) {
            throw new Error("Fetching the Api has Failed")
        }

        return response.json()
    }

    function displayWeatherData(data){
        console.log(data);
        errorDisplay.classList.add("hidden")
        WeatherInfo.classList.remove("hidden")
        
        
        cityNameDisplay.textContent =   `City: ${data.name}`
        weatherDescDisplay.textContent =   `City: ${data.weather[0].description}`
        cityTempDisplay.textContent =   `City: ${data.main.temp}`

        
    }
    
    function displayError(){
        WeatherInfo.classList.add("hidden")
        errorDisplay.classList.remove("hidden")
    }
})