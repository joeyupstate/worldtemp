function produceWeather() {
  let cityName = document.getElementById("city-input").value;
  let weatherDisplay = document.querySelectorAll(".temp");
  let cards = document.getElementsByClassName("card");
  let des = document.getElementsByClassName("des");

  //This is the total api link with the random city added
  let apiurl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&units=imperial&appid=fe38aa42989f5e2ebc9d4fca513c3117";
  //this retreives the data from the api
  fetch(apiurl)
    .then((response) => response.json())
    .then((data) => {
      //this displays the tempgo
      let apirray = data.weather[0].description;
      let temp1 = data.main.temp 
      let temp = Math.round(temp1) + "°"

      for (i = 0; i < weatherDisplay.length; i++) {
        weatherDisplay[i].innerHTML = temp;
      }

      for (i = 0; i < des.length; i++) {
        if (des[i].innerHTML === apirray) {
          cards[i].style.opacity = 1;
        }
        else{
            cards[i].style.opacity = 0;
        }
      }
      console.log(apirray)
    });
}


