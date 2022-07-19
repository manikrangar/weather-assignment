const f = document.getElementsByTagName('form')[0];
console.log("goodmorning mama");

var weather = "kk";
var temperature = 0;
var weather_description = "manik";
var place = "africa";
var min_max = "/";
var icon_code = "01d";
var id = "500";


function getData(cityname) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=fb2ccfaa7fb7126f604ce81a9b18d0f3")
        .then((res) => {
            return res.json();

        }).then((data) => {

            weather = data.weather[0].main;
            weather_description = data.weather[0].description;
            temperature = parseInt(parseInt(data.main.temp, 10) - 273.15, 10);
            place = data.name;
            min_max = "min:" + parseInt(parseInt(data.main.temp_min, 10) - 273.15, 10) + "deg / max:" + parseInt(parseInt(data.main.temp_max, 10) - 273.15, 10);
            icon_code = data.weather[0].icon;
            id = data.weather[0].id;


            var list = document.getElementById("main_cont");
            while (list.childElementCount != 1) {
                console.log(list.childNodes[2]);
                list.removeChild(list.lastChild);

            }

            makeChange(weather, weather_description, temperature, place, min_max, icon_code, id);

            console.log(weather, weather_description, temperature, place, min_max);

        }).catch((err) => {
            console.log(err.message);
            alert("Inlavid City/Place");
        });

    return true;

}

function makeChange(weath, weath_decs, temp, plac, mm, ic, id) {



    if (weath == "Clear") {
        document.getElementById("body").style.backgroundImage = "url('https://images.unsplash.com/photo-1606050716461-78add0ad1785?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80.jpeg')";



        document.getElementById("main_cont").style.color = "rgb(233 214 33)";
        document.getElementById("main_cont").style.textShadow = "1px 2px black";



    }
    else if (weath == "Clouds") {
        document.getElementById("body").style.backgroundImage = "url('https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260.jpeg')";


        document.getElementById("main_cont").style.color = "#1b1bba";
        document.getElementById("main_cont").style.textShadow = "1px 2px white";


    }
    else if (weath == "Snow") {
        document.getElementById("body").style.backgroundImage = "url('https://images.unsplash.com/photo-1612719983096-39505900b5c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80.jpeg')";

        document.getElementById("main_cont").style.color = "black";
        document.getElementById("main_cont").style.textShadow = "1px 2px #1bc4ea";



    }
    else if (weath == "Rain") {
        document.getElementById("body").style.backgroundImage = "url('https://images.unsplash.com/photo-1477847616630-cf9cf8815fda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80.jpeg')";

        document.getElementById("main_cont").style.color = "rgb(71, 177, 229)";
        document.getElementById("main_cont").style.textShadow = "1px 2px black";
        document.getElementById("main_cont").style.backgroundColor = "rgb(250 238 238 / 15%)"
    }
    else if (weath == "Drizzle") {
        document.getElementById("body").style.backgroundImage = "url('https://images.pexels.com/photos/2816903/pexels-photo-2816903.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260.jpeg')";
        
        document.getElementById("main_cont").style.color = "black";
        document.getElementById("main_cont").style.textShadow = "1px 2px white";
    
    }

    else if (weath == "Thunderstorm") {
        document.getElementById("body").style.backgroundImage = "url('imag/thunderstorm.gif')";
        document.getElementById("body").style.backgroundSize = "100vw 100vh";


        document.getElementById("main_cont").style.color = "white";
        document.getElementById("main_cont").style.textShadow = "grey";


    }
    else {
        document.getElementById("body").style.backgroundImage = "url('https://images.unsplash.com/photo-1563417079254-6025a98aef80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80.jpeg')";

        document.getElementById("main_cont").style.color = "black";
        document.getElementById("main_cont").style.textShadow = "1px 2px white";


    }


    var w0 = document.createElement("img");
    w0.src = "http://openweathermap.org/img/wn/" + ic + "@2x.png";
    document.getElementById("main_cont").appendChild(w0);

    var w5 = document.createElement("h3");
    w5.innerText = place;
    document.getElementById("main_cont").appendChild(w5);


    var w1 = document.createElement("h3");
    w1.innerText = weath;
    document.getElementById("main_cont").appendChild(w1);

    var w2 = document.createElement("h3");
    w2.innerText = weath_decs;

    document.getElementById("main_cont").appendChild(w2);

    var w3 = document.createElement("h3");
    w3.innerHTML = "<h3>" + temp + "&#176; C" + "</h3>";
    w3.style.fontWeight = "bold";
    w3.style.fontSize = "30px";

    document.getElementById("main_cont").appendChild(w3);

    var w4 = document.createElement("h3");
    w4.innerHTML = "<h3>" + mm + "deg" + "</h3>";
    document.getElementById("main_cont").appendChild(w4);




    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;


    var w6 = document.createElement("h3");
    w6.innerText = today;
    document.getElementById("main_cont").appendChild(w6);





}

document.getElementById('btn').addEventListener('click', function () {

    var ele = f.firstElementChild.value;

    console.log(ele);

    getData(ele);
    // makeChange(weather,weather_description,temperature);




});

console.log("this is me");
