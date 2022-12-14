fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.4392648&lon=5.478633&lang=nl&appid=73426062a9fea33a032157984c4ef3a5&units=metric')
.then((response) => response.json())
.then((data) => dataweather(data))

function dataweather(data){
 console.log(data);

 const h1 = document.createElement("h1");
 const h2 = document.createElement("h2");
 const p = document.createElement("p");

 const locatieNaam = document.createTextNode(data.name + ", " + data.sys.country);
 const tempGraden = document.createTextNode(Math.round(data.main.temp) + " °C");
 const tempOmschrijving = document.createTextNode(data.weather[0].description);
 const img = document.createElement('img');
 img.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
 

 h1.appendChild(locatieNaam);
 h2.appendChild(tempGraden);
 p.appendChild(tempOmschrijving);


 const locatieH1 = document.querySelector("#location");

 const weerImg= document.querySelector(".weather-icon");

 const temperatuurP = document.querySelector("#temperature");

 const weerH2 = document.querySelector("#weather");




 locatieH1.appendChild(h1);

 weerImg.appendChild(img);

 temperatuurP.appendChild(h2);

 weerH2.appendChild(p);

}

function AutoRefresh(t){
    setTimeout("location.reload(true);", t);
}