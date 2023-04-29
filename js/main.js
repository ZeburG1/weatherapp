const date = new Date();
const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const months = monthNames[date.getMonth()];

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

function update() {
    var date = new Date();
    var hours = date.getHours();

    var cloudcover = json_cloudy.hourly.cloudcover[hours];
    var precipitation = json_precipitation.hourly.precipitation[hours];

    var img_day  = ['cloudy.png', 'cloud.png', 'sun.png', 'rainy.png', 'rain.png', 'snowfall.png', 'lowsnowfall.png'];

    var img_night = ['night_cloudy.png', 'night_cloud.png', 'night.png', 'night_rainy.png', 'rain.png', 'night_snowfall.png', 'night_lowsnowfall.png'];

    //день
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
        
        //слабые осадки с облачностью
        if (cloudcover <= 25 && precipitation == 0.1) {
            document.getElementById('img').src = '../images/' + img_day[3];
        }
        if (cloudcover > 25 <= 65 && precipitation == 0.1) {
            document.getElementById('img').src = '../images/' + img_day[3];
        }
        if (cloudcover > 65 && precipitation == 0.1) {
            document.getElementById('img').src = '../images/' + img_day[3];
        }
        //сильные осадки
        if (cloudcover > 50 && precipitation >= 0.2) {
            document.getElementById('img').src = '../images/' + img_day[4];
        }  
    }
    //ночь
    if (hours < 6 || hours > 20) {

        //0 осадков 
        if (cloudcover == 0 && precipitation == 0) {
            document.getElementById('img').src = '../images/night_icons/' + img_night[2];
        }
        if (cloudcover <= 25 && precipitation == 0) {
            document.getElementById('img').src = '../images/night_icons/' + img_night[2];
        }
        if (cloudcover > 25 <= 65 && precipitation == 0) {
            document.getElementById('img').src = '../images/night_icons/' + img_night[0];
        }
        if (cloudcover > 65 && precipitation == 0) {
            document.getElementById('img').src = '../images/night_icons/' + img_night[1];
        }

        //слабые осадки с облачностью
        if (cloudcover <= 25 && precipitation == 0.1) {
            document.getElementById('img').src = '../images/night_icons/' + img_night[3];
        }
        if (cloudcover > 25 <= 65 && precipitation == 0.1) {
            document.getElementById('img').src = '../images/night_icons/' + img_night[3];
        }
        if (cloudcover > 65 && precipitation == 0.1) {
            document.getElementById('img').src = '../images/night_icons/' + img_night[3];
        }
        //сильные осадки
        if (cloudcover > 50 && precipitation >= 0.2) {
            document.getElementById('img').src = '../images/' + img_night[4];
        }  
    } 
    else {
        document.getElementById("img").innerHTML = ("404");
    }
};

function uptade_winter() {
    var date = new Date();
    var hours = date.getHours();
    
    var cloudcover = json_cloudy.hourly.cloudcover[hours];
    var precipitation = json_precipitation.hourly.precipitation[hours];

    var img_day  = ['cloudy.png', 'cloud.png', 'sun.png', 'rainy.png', 'rain.png', 'snowfall.png', 'lowsnowfall.png'];

    var img_night = ['night_cloudy.png', 'night_cloud.png', 'night.png', 'night_rainy.png', 'rain.png', 'night_snowfall.png', 'night_lowsnowfall.png'];
    
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
        if (cloudcover > 25 <= 65 && precipitation == 0.1) {
            document.getElementById('img').src = '../images/' + img_day[6];
        }
        if (cloudcover > 65 && precipitation == 0.1) {
            document.getElementById('img').src = '../images/' + img_day[6];
        }
        //сильные осадки
        if (cloudcover > 50 && precipitation >= 0.2) {
            document.getElementById('img').src = '../images/' + img_day[5];
        } 
    }
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
        if (cloudcover > 25 <= 65 && precipitation == 0.1) {
            document.getElementById('img').src = '../images/night_icons/' + img_night[6];
        }
        if (cloudcover > 65 && precipitation == 0.1) {
            document.getElementById('img').src = '../images/night_icons/' + img_night[6];
        }
        //сильные осадки
        if (cloudcover > 50 && precipitation >= 0.2) {
            document.getElementById('img').src = '../images/night_icons/' + img_day[5];
        } 
    }
    else {
        document.getElementById("img").innerHTML = ("404");
    }
};


if (months === "Апрель" || "Май" || "Июнь" || "Июль" || "Август" || "Сентябрь") {
    setInterval(update(), 1000);
} else {
    setInterval(uptade_winter(), 1000);
}