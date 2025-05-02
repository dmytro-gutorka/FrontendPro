const API_KEY = '19541e0c54f35f7899bff14dd5e3ed67';

const form = document.querySelector('.form__city')
const refreshButton = document.querySelector('.widget-reset-button')

const weatherContainer = document.querySelector('.weather-widget')
const cityName = document.querySelector('.city-name')
const humidity = document.querySelector('.humidity')
const weather = document.querySelector('.weather')
const pressure = document.querySelector('.pressure')
const wind = document.querySelector('.wind')
const temperature = document.querySelector('.temperature')
const feelsLike = document.querySelector('.feels-like')


function renderWeatherWidget(weatherData) {
    console.log(weatherData)
    cityName.textContent = "City name: " + weatherData.name
    humidity.textContent = "humidity: " + weatherData.main.humidity
    pressure.textContent = "pressure: " + weatherData.main.pressure
    weather.textContent = "weather: " + weatherData.weather[0].main
    wind.textContent = "wind: " + weatherData.wind.speed + 'km/h'
    temperature.textContent = "temperature: " + weatherData.main.temp
    feelsLike.textContent = "feels-like:"  + weatherData.main.feels_like
}


function clearFields(rootElement) {
    const elements = [...rootElement.children]

    elements.forEach(element => element.textContent = "")
}


function widgetHandler(e) {
    e.preventDefault()
    clearFields(weatherContainer)

    const cityName = form.querySelector('.weather-input').value

    if (!cityName) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

    fetch(url)
        .then(res => res.json())
        .then(json => renderWeatherWidget(json))
        .catch(err => console.error(err))
}


function bindEvent() {
    form.addEventListener('submit', widgetHandler)
    refreshButton.addEventListener('click', widgetHandler)
}

bindEvent()