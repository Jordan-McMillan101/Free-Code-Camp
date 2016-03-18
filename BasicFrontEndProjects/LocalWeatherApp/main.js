$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      //variables used to concatenate url for data request
      var lat = 'lat=' + position.coords.latitude;
      var lon = '&lon=' + position.coords.longitude;
      var keyID = '&APPID=' + 'f7d9d9db59e7173fa7819fe0c47bf3c3';
      var url = 'http://api.openweathermap.org/data/2.5/weather?' + lat + lon + keyID;
      //get basic weather information from weather api
      $.get(url, function(json) {
        $("#json").html(JSON.stringify(json));
        $("#city").prepend(json.name + ', ');
        $("#country").html(json.sys.country);
        $("#temp").prepend(Math.floor(json.main.temp - 273.15) + " &deg;C");
        $("#windSpeed").append(json.wind.speed + ' m/s');
        $("#clouds").html(json.clouds.all + '% cloud coverage');
        $("#desc").prepend(json.weather[0].main);

        //display correct corresponding weather icon
        var weatherType = json.weather[0].main;
        //var weatherType = "Clear";
        if (weatherType === "Clear") { //https://www.dropbox.com/s/lw1sf8476hkx496/1458272518_weather-snow.png?dl=0
          $("#icon").html('<img src="https://dl.dropboxusercontent.com/s/la5q3x8jm1m9wc5/1458194140_weather-clear.png" />');
          $(".jumbotron").css("background-color", "#61C7E8"); //BDEBFF
        } else if (weatherType === "Clouds") {
          $("#icon").html('<img src="https://dl.dropboxusercontent.com/s/wic58506yh5aipz/1458194262_weather-few-clouds.png" />');
          $(".jumbotron").css("background-color", "#BDEBFF"); //BDEBFF
        } else if (weatherType === "rain") {
          $("#icon").html('<img src="https://dl.dropboxusercontent.com/s/2mqbg9by0tp1crf/1458194221_weather-showers-scattered.png" />');
          $(".jumbotron").css("background-color", "#459BFF");
        } else if (weatherType === "thunderstorm") {
          $("#icon").html('<img src="https://dl.dropboxusercontent.com/s/546ozo1k9qojmhe/1458194246_weather-storm.png" />');
          $(".jumbotron").css({
            "background-color": "#4F4F4F",
            "color": "#E3E5E5"
          });
        } else if (weatherType === "snow") {
          $("#icon").html('<img src="https://dl.dropboxusercontent.com/s/lw1sf8476hkx496/1458272518_weather-snow.png" />');
          $(".jumbotron").css("background-color", "#61C7E8");
        } else if (weatherType === "dizzle") {
          $("#icon").html('<img src="https://dl.dropboxusercontent.com/s/2mqbg9by0tp1crf/1458194221_weather-showers-scattered.png" />');
          $(".jumbotron").css("background-color", "#787878");
        }
        //get more weather information
//         $(".getMore").on("click", function() {

//         });
         $(".getMetric").on("click", function() {
          $('ul').find("#temp").html(Math.floor(json.main.temp - 273.15) + " &deg;C");
          $('ul').find("#windSpeed").html("Wind: " + json.wind.speed + ' m/s');

        });
        $(".getImperial").on("click", function() {
          $('ul').find("#temp").html((Math.floor((json.main.temp * 9/5) -459.67)) + " &deg;F");
          $('ul').find("#windSpeed").html("Wind: " + Math.floor((json.wind.speed*2.23694)) + ' mph');
        });
      });
    });
  }
});
