const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '47e948f30fmshcd2386a49acf050p112a15jsnbbb016e4f913',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// const convertUnixTimestamp = (time) => {
//     const date = new Date(time * 1000); 
//     const formattedDate = date.toLocaleDateString('en-US');
//     const formattedTime = date.toLocaleTimeString('en-US', {hour12:false, timeZone: 'UTC'});

//     return `${formattedDate} ${formattedTime} UTC`;
// }

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)
        city.innerHTML = response.city
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees

        // sunrisea = convertUnixTimestamp(sunrise)
        // sunseta = convertUnixTimestamp(sunset)
        
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click" , (e)=>{
    e.preventDefault()
    getWeather(city.value)

})
    
getWeather("Aurangabad")

// cloud_pct
// feels_like
// humidity
// max_temp
// min_temp
// time
// sunset
// temp
// wind_degrees
// wind_speed

// Function to convert Unix time to readable date and time


// // Example usage
// const time = 1706924018;
// const sunriseTime = convertUnixTimestamp(time);

// console.log("Sunrise Time:", sunriseTime);
