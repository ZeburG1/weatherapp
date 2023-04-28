function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];


var json_obj = JSON.parse(Get("https://api.open-meteo.com/v1/forecast?latitude=58.01&longitude=56.25&hourly=temperature_2m"));
var json_cloudy = JSON.parse(Get("https://api.open-meteo.com/v1/forecast?latitude=58.01&longitude=56.25&hourly=cloudcover"));
var json_precipitation = JSON.parse(Get("https://api.open-meteo.com/v1/forecast?latitude=58.01&longitude=56.25&hourly=precipitation"))



var time = setInterval(function() {
    var date = new Date();
    var minuts = date.getMinutes();
    if (minuts >= 10) {
        document.getElementById("time").innerHTML = (date.getFullYear() + " " + monthNames[date.getMonth()] + " " + date.getHours() + ":" + minuts);
    }
    else {
        document.getElementById("time").innerHTML = (date.getFullYear() + " " + monthNames[date.getMonth()] + " " + date.getHours() + ":" + "0" + minuts);
    }
}, 1000);



var weather_time = setInterval(function() {
    var date = new Date();
    var hours = date.getHours();

    document.getElementById("temp").innerHTML = (json_obj.hourly.temperature_2m[hours] + " &deg;C");
    document.getElementById("clouds").innerHTML = (json_cloudy.hourly.cloudcover[hours] + " %");
    document.getElementById("precipitation").innerHTML = (json_precipitation.hourly.precipitation[hours] + " мм"); 
    var month = monthNames[date.getMonth()];




var images_day  = ['cloudy.png', 'cloud.png', 'sun.png', 'rainy.png', 'snowfall.png', 'lowsnowfall.png', 'rain.png'];

var images_night = ['night_cloudy.png', 'night_cloud.png', 'night.png', 'night_rainy.png', 'night_snowfall.png', 'night_lowsnowfall.png'];

//day
if (hours <= 20) {
    var cloudcover = json_cloudy.hourly.cloudcover[hours];
    var precipitation = json_precipitation.hourly.precipitation[hours];
    //summer
    if ( month != 0 || 1 || 2 || 9 || 10 || 11) {

        for (var i = 65; i <= 100; i++) {
            var cloudcover = json_cloudy.hourly.cloudcover[hours];
            if(cloudcover >= 65) {
                document.getElementById('img').src = '../images/' + images_day[1];
            }
            if(cloudcover <= 50) {
                document.getElementById('img').src = '../images/' + images_day[0];
            }
            if(cloudcover <= 25) {
                document.getElementById('img').src = '../images/' + images_day[2];
            }
        }
        var precipitation = json_precipitation.hourly.precipitation[hours];
        for (var i = 0; i <= 0.5; i++) {
            if(precipitation == i) {
                document.getElementById('img').src = '../images/' + images_day[1];
            }
            if(precipitation >= 0.1) {
                document.getElementById('img').src = '../images/' + images_day[3];
            }
            if(precipitation >= 0.2) {
                document.getElementById('img').src = '../images/' + images_day[6];
            }
        }
    }
    

    //winter
    if (month == 0 || 1 || 2 || 9 || 10 || 11) {
        
        for (var i = 65; i <= 100; i++) {
            var cloudcover = json_cloudy.hourly.cloudcover[hours];
            if(cloudcover == i && precipitation == 0) {
                document.getElementById('img').src = '../images/' + images_day[1];
            }
            if(cloudcover >= 64 && precipitation == 0) {
                document.getElementById('img').src = '../images/' + images_day[1];
            }
            if(cloudcover <= 25 && precipitation == 0) {
                document.getElementById('img').src = '../images/' + images_day[0];
            }
        }
        var precipitation = json_precipitation.hourly.precipitation[hours];
        for (var i = 0; i <= 0.5; i++) {
            if(precipitation == i && cloudcover <= 25) {
                document.getElementById('img').src = '../images/' + images_day[0];
            }
            if(precipitation >= 0.1 && cloudcover >= 65) {
                document.getElementById('img').src = '../images/' + images_day[4];
            }
            if(precipitation >= 0.2  && cloudcover >= 75) {
                document.getElementById('img').src = '../images/' + images_day[5];
            }
        }
    };

}
//night 
if (hours >= 20) {
        
    //summer
    if (month != 0 || 1 || 2 || 9 || 10 || 11) {

        var cloudcover = json_cloudy.hourly.cloudcover[hours];
        
        for (var i = 65; i <= 100; i++) {
            if(cloudcover == i && precipitation == 0) {
                document.getElementById('img').src = '../images/night_icons/' + images_night[1];
            }
            if(cloudcover >= 25 && cloudcover <= 64 && precipitation == 0) {
                document.getElementById('img').src = '../images/night_icons/' + images_night[0];
            }
            if(cloudcover <= 25 && precipitation == 0) {
                document.getElementById('img').src = '../images/night_icons/' + images_night[2];
            }
        }

        var precipitation = json_precipitation.hourly.precipitation[hours];

        for (var i = 0; i <= 0.5; i++) {
            if(precipitation == i && cloudcover <= 50) {
                document.getElementById('img').src = '../images/night_icons/' + images_night[1];
            }
            if(precipitation >= 0.1 && cloudcover <= 40) {
                document.getElementById('img').src = '../images/night_icons/' + images_night[3];
            }
            if(precipitation >= 0.2 && cloudcover >= 80) {
                document.getElementById('img').src = '../images/night_icons/' + images_night[5];
            }
        }
    }
        
    //winter
    if (month == 0 || 1 || 2 || 9 || 10 || 11) {
    
        var cloudcover = json_cloudy.hourly.cloudcover[hours];
        
        for (var i = 65; i <= 100; i++) {
            if(cloudcover == i && precipitation == 0) {
                document.getElementById('img').src = '../images/night_icons/' + images_night[1];
            }
            if(cloudcover <= 64 && precipitation == 0) {
                document.getElementById('img').src = '../images/night_icons/' + images_night[1];
            }
            if(cloudcover <= 25 && precipitation == 0) {
                document.getElementById('img').src = '../images/night_icons/' + images_night[0];
            }
        }

        var precipitation = json_precipitation.hourly.precipitation[hours];

        for (var i = 0; i <= 0.5; i++) {
            if(precipitation == i && cloudcover <= 25) {
                document.getElementById('img').src = '../images/night_icons/' + images_night[0];
            }
            if(precipitation >= 0.1 && cloudcover >= 40) {
                document.getElementById('img').src = '../images/night_icons/' + images_night[4];
            }
            if(precipitation >= 0.2  && cloudcover >= 75) {
                document.getElementById('img').src = '../images/night_icons/' + images_night[5];
            }
        }
    }}}, 1000);