//accessing all the elements in js
var search = document.getElementById('search'),
  input = document.getElementById('inputBox'),
  form = document.getElementById('myForm'),  
  weatherImage=document.querySelector('.weather_image'),
  key='53eade34260c20251add2a7594130d36';
  
var weatherInfo;
//after click on search button
form.addEventListener('submit', function (e) {
  e.preventDefault();  
  if (input.value == "" || input.value == null) {
    alert("please enter the city please !");
  } else {
      searchWeather(input.value);          
      form.reset();
    }
})

//to get fetch data from server via api
function searchWeather(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`)
    .then(response => response.json())
    .then(data => data.cod!=404?getInfo(data):error(data.message))
    .catch(error => error);
}


//after getting data from server we create one element and append them to html
function getInfo(a) {
  var resultDiv=document.createElement('div');
  resultDiv.setAttribute('class','result');
  resultDiv.innerHTML="<p class='city_name'>"+a.name+"</p>"+
                        "<h1 class='city_temp'><sub>"+Math.floor(a.main.temp)+"</sub><sup>C</sup></h1>"+
                        "<p class='city_main'>"+a.weather[0].main+"</p>"; 
                                                 
    weatherImage.appendChild(resultDiv);
    form.classList.add('disabled-btn');   
}

//for the error message
function error(a) {
  alert(a);
}

