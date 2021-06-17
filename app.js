const apiKey = "2cd6119a362b0ab2721200cc61539eb0" ;

const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {

    const url = `${apiBase}?q=${city}&units = metric&appid=${apiKey}`;
    fetch(url)
   .then(response => response.json())
   .then(data =>
    
     updateData(data))
}


const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {
    const inputCity= document.getElementById('city').value;
    getWeatherData(inputCity);
})


const updateData = data =>{
    document.getElementById('show-city').innerText = data.name;
    document.getElementById('show-temp').innerText = data.main.temp;
    document.getElementById('show-weather').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    document.getElementById('city').value = " ";



}
