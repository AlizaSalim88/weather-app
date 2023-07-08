const image =document.querySelector(".weather-img")
const temperature=document.querySelector(".temp")
const description=document.querySelector(".desc")
const humiditypercent=document.querySelector(".span1")

const windspeedpercent=document.querySelector(".span2")

const input=document.querySelector(".input-class")
const search=document.querySelector(".search")

async function ChechWeather(city){
   const Api_key="e8746367027c0fde3ba5d313a801089c"
   const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`

   const weather_data=await fetch(`${api_url}`).then(Response =>Response.json());
   
   
   temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
   description.innerHTML=`${weather_data.weather[0].description}`;
   humiditypercent.innerHTML=`${weather_data.main.humidity}%`;
   windspeedpercent.innerHTML=`${weather_data.wind.speed}km/h`;
   console.log(weather_data)
   
 
   document.querySelector('.weather_body').style.display="flex";
   
    switch(weather_data.weather[0].main) {
        case 'Mist':
            image.src="./haze.png";
            
            break;
        case 'Haze':
             image.src="./haze.png";
                
             break;
        case "Clouds":
            image.src="./cloudy.png";
            break;
        case "Rain":
            image.src="./rain.png";
            break;
        case "Clear":
            image.src="./sunny_1420668.png";
            break;
        case "Snow":
            image.src="./snow.png";
            break;
        case "Drizzle":
            image.src="./drizzle.png";
        case "Thunderstorm":
            image.src="./thunderstorm.png";
        //case "heavy"
        //default:
          //  image.src="./suncloud.png";
    }
    
}



search.addEventListener("click" ,()=>{
    ChechWeather(input.value);
})



