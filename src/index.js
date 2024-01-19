import axios from "axios";


async function getWeatherData (city, celsius, day) {

    

    const data = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=810701b2f14740d1a3a10035233012&q=$${city}&days=3`)
    const weatherData = await data.data

    let hour_temp_c = []
    let hour_cloud = []
    let hour_temp_f = []
    let hour_chance_rain = []
    weatherData.forecast.forecastday[day].hour.forEach((element) => {hour_temp_c.push(element.temp_c)})
    weatherData.forecast.forecastday[day].hour.forEach((element) => {hour_temp_f.push(element.temp_f)})
    weatherData.forecast.forecastday[day].hour.forEach((element) => {hour_cloud.push(element.cloud)})
    weatherData.forecast.forecastday[day].hour.forEach((element) => {hour_chance_rain.push(element.chance_of_rain)})
    



    if(celsius){

        return{

            curr_temp: weatherData.current.temp_c,
            curr_cloud: weatherData.current.cloud,

            hour_temp: hour_temp_c,
            hour_cloud: hour_cloud,
            hour_chanceRain : hour_chance_rain,

            day_maxTemp: weatherData.forecast.forecastday[day].day.maxtemp_c,
            day_minTemp: weatherData.forecast.forecastday[day].day.maxtemp_c

        }

    }else if(!celsius){

        return{

            curr_temp: weatherData.current.temp_f,
            curr_cloud: weatherData.current.cloud,
    
            hour_temp: hour_temp_f,
            hour_cloud: hour_cloud,
            hour_chanceRain : hour_chance_rain,
    
            day_maxTemp: weatherData.forecast.forecastday[day].day.maxtemp_f,
            day_minTemp: weatherData.forecast.forecastday[day].day.maxtemp_f
    
    


        }
    
    }

}



console.log(getWeatherData("Buxtehude", true, 0))

//http://api.weatherapi.com/v1/current.json?key=810701b2f14740d1a3a10035233012&q=london






//API Key : 810701b2f14740d1a3a10035233012


//`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
//"http://api.weatherapi.com/v1/current.json?key=810701b2f14740d1a3a10035233012&q=$London"




