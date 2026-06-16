const apikey="b7423ffd1c153a01d4885ffa68aaa6c9";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox= document.querySelector(".search-input");
    const searchbtn=document.querySelector(".search-btn");
const weathericon= document.querySelector(".weather-icon");


// const dis=document.querySelector(".description");
    async function checkweather(city) {
        const response = await fetch(apiurl+city+`&appid=${apikey}`);
        const data = await response.json();
        console.log(data);


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML= Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

document.querySelector(".description").innerHTML=data.weather[0].description;


    }
   

    
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})


