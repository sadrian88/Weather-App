
      const apikey = "66b1087608ea2deaf6d0278cda5f635e";
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      const searchBox =document.querySelector(".search input");
      const searchBtn =document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");

      async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);

        if(response.status == 404){
          document.querySelector(".error").style.display ="block"
          document.querySelector(".weather").style.display ="none"
        }else{
          var data =await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".windy").innerHTML = data.wind.speed + "km/h";
      
        if(data.weather[0].main == "Clouds"){
          weatherIcon.src ="icons/clouds.png";
        }
        else if(data.weather[0].main == "Rain"){
          weatherIcon.src ="icons/rain.png";
        }
        else if(data.weather[0].main == "Sun"){
          weatherIcon.src ="icons/sun.png";
        }
        else if(data.weather[0].main == "Snow"){
          weatherIcon.src ="icons/snow.png";
        }
        else if(data.weather[0].main == "Mist"){
          weatherIcon.src ="icons/mist.png";
        }
        else if(data.weather[0].main == "Drizzle"){
          weatherIcon.src ="icons/drizzle.png";
        }

        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display ="none"
        }

      }

      searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
      })

      checkWeather();