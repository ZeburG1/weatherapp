const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

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

}, 1000);

var update = setInterval(function() {
    var date = new Date();
    var hours = date.getHours();
    var months = monthNames[date.getMonth()];

    var cloudcover = json_cloudy.hourly.cloudcover[hours];
    var precipitation = json_precipitation.hourly.precipitation[hours];

    var img_day  = ['cloudy.png', 'cloud.png', 'sun.png', 'rainy.png', 'rain.png', 'snowfall.png', 'lowsnowfall.png'];

    var img_night = ['night_cloudy.png', 'night_cloud.png', 'night.png', 'night_rainy.png', 'rain.png', 'night_snowfall.png', 'night_lowsnowfall.png'];

    for (var i = 0; i <= 0; i++) {
        if (months == "Апрель" || "Май" || "Июнь" || "Июль" || "Август" || "Сентябрь") {
            //летние дни
            if (hours >= 6 || hours <= 20) {

                //0 осадков 
                if (cloudcover <= 25 && precipitation == 0) {
                    document.getElementById('img').src = '../images/' + img_day[2];
                }
                if (cloudcover > 25 <= 65 && precipitation == 0) {
                    document.getElementById('img').src = '../images/' + img_day[2];
                }
                if (cloudcover > 65 && precipitation == 0) {
                    document.getElementById('img').src = '../images/' + img_day[2];
                }
                
                //осадки с облачностью
                if (cloudcover <= 25 && precipitation == 0.1) {
                    document.getElementById('img').src = '../images/' + img_day[3];
                }
                if (cloudcover > 25 <= 65 && precipitation == 0.2) {
                    document.getElementById('img').src = '../images/' + img_day[3];
                }
                if (cloudcover > 65 && precipitation >= 0.3) {
                    document.getElementById('img').src = '../images/' + img_day[4];
                } 
            }
            //летние ночи
            if (hours < 6 || hours > 20) {

                //0 осадков 
                if (cloudcover <= 25 && precipitation == 0) {
                    document.getElementById('img').src = '../images/night_icons/' + img_night[2];
                }
                if (cloudcover > 25 <= 65 && precipitation == 0) {
                    document.getElementById('img').src = '../images/night_icons/' + img_night[0];
                }
                if (cloudcover > 65 && precipitation == 0) {
                    document.getElementById('img').src = '../images/night_icons/' + img_night[1];
                }

                //осадки с облачностью
                if (cloudcover <= 25 && precipitation == 0.1) {
                    document.getElementById('img').src = '../images/night_icons/' + img_night[3];
                }
                if (cloudcover > 25 <= 65 && precipitation == 0.2) {
                    document.getElementById('img').src = '../images/night_icons/' + img_night[3];
                }
                if (cloudcover > 65 && precipitation >= 0.3) {
                    document.getElementById('img').src = '../images/night_icons/' + img_night[4];
                } 
            }
        }
        if (months == "Январь" || "Февраль" || "Март" || "Октябрь" || "Ноябрь" || "Декабрь") {
            //зимние дни
            if (hours >= 6 || hours <= 20) {

                //0 осадков 
                if (cloudcover <= 25 && precipitation == 0) {
                    document.getElementById('img').src = '../images/' + img_day[2];
                }
                if (cloudcover > 25 <= 65 && precipitation == 0) {
                    document.getElementById('img').src = '../images/' + img_day[2];
                }
                if (cloudcover > 65 && precipitation == 0) {
                    document.getElementById('img').src = '../images/' + img_day[2];
                }
                
                //осадки с облачностью
                if (cloudcover <= 25 && precipitation == 0.1) {
                    document.getElementById('img').src = '../images/' + img_day[6];
                }
                if (cloudcover > 25 <= 65 && precipitation == 0.2) {
                    document.getElementById('img').src = '../images/' + img_day[6];
                }
                if (cloudcover > 65 && precipitation >= 0.3) {
                    document.getElementById('img').src = '../images/' + img_day[5];
                } 
            }
            //зимние ночи
            if (hours < 6 || hours > 20) {

                //0 осадков 
                if (cloudcover <= 25 && precipitation == 0) {
                    document.getElementById('img').src = '../images/night_icons/' + img_night[2];
                }
                if (cloudcover > 25 <= 65 && precipitation == 0) {
                    document.getElementById('img').src = '../images/night_icons/' + img_night[0];
                }
                if (cloudcover > 65 && precipitation == 0) {
                    document.getElementById('img').src = '../images/night_icons/' + img_night[1];
                }

                //осадки с облачностью
                if (cloudcover <= 25 && precipitation == 0.1) {
                    document.getElementById('img').src = '../images/night_icons/' + img_night[6];
                }
                if (cloudcover > 25 <= 65 && precipitation == 0.2) {
                    document.getElementById('img').src = '../images/night_icons/' + img_night[6];
                }
                if (cloudcover > 65 && precipitation >= 0.3) {
                    document.getElementById('img').src = '../images/night_icons/' + img_night[5];
                } 
            }
        }
    }
}, 100);
