var regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
var darkToggler = document.querySelector("#darkToggler");

// switching between dark and white modes
darkToggler.addEventListener('click', (event) => {
  document.getElementsByTagName("html")[0].classList.toggle("dark");

  if (window.getComputedStyle(darkToggler).backgroundImage.toString().includes("M 75.405 77.405 c -0.512 0 -1.023 -0.195 -1.414 -0.586 l -8.365 -8.365 c -0.781 -0.781 -0.781 -2.047 0 -2.828 s 2.047")) {
    darkToggler.classList.add("active2");
    setTimeout(() => {
      darkToggler.classList.remove("active2");
    }, 700)
  }
  else {
    darkToggler.classList.add("active1");
    setTimeout(() => {
      darkToggler.classList.remove("active1");
    }, 700)
  }
})

const locationInput = document.getElementById("location");
const searchResult = document.getElementById("searchResult");
const locationDisplay = document.getElementById("location-display");
const dateTime = document.getElementById("date-time");
const weatherDescription = document.getElementById("weather-description");
const weatherdescrptionImg = document.getElementById("weather-descrption-img");
const temp = document.getElementById("temp");
const minMaxTemp = document.getElementById("min-max-temp");
const feelsLike = document.getElementById("feels-like");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
var citiesList = ["Abidjan", "Abu Dhabi", "Abuja", "Accra", "Addis Ababa", "Ahmedabad", "Aleppo", "Alexandria", "Algiers", "Almaty", "Amman", "Amsterdam", "Anchorage", "Andorra la Vella", "Ankara", "Antananarivo", "Apia", "Arnold", "Ashgabat", "Asmara", "Asuncion", "Athens", "Auckland", "Avarua", "Baghdad", "Baku", "Bamako", "Banda Aceh", "Bandar Seri Begawan", "Bandung", "Bangkok", "Bangui", "Banjul", "Barcelona", "Barranquilla", "Basrah", "Basse-Terre", "Basseterre", "Beijing", "Beirut", "Bekasi", "Belem", "Belgrade", "Belmopan", "Belo Horizonte", "Bengaluru", "Berlin", "Bern", "Bishkek", "Bissau", "Bogota", "Brasilia", "Bratislava", "Brazzaville", "Bridgetown", "Brisbane", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Bujumbura", "Bursa", "Busan", "Cairo", "Cali", "Caloocan", "Camayenne", "Canberra", "Cape Town", "Caracas", "Casablanca", "Castries", "Cayenne", "Charlotte Amalie", "Chengdu", "Chennai", "Chicago", "Chisinau", "Chittagong", "Chongqing", "Colombo", "Conakry", "Copenhagen", "Cordoba", "Curitiba", "Daegu", "Daejeon", "Dakar", "Dallas", "Damascus", "Dar es Salaam", "Delhi", "Denver", "Dhaka", "Dili", "Djibouti", "Dodoma", "Doha", "Dongguan", "Douala", "Douglas", "Dubai", "Dublin", "Durban", "Dushanbe", "Faisalabad", "Fort-de-France", "Fortaleza", "Freetown", "Fukuoka", "Funafuti", "Gaborone", "George Town", "Georgetown", "Gibraltar", "Gitega", "Giza", "Guadalajara", "Guangzhou", "Guatemala City", "Guayaquil", "Gujranwala", "Gustavia", "Gwangju", "Hamburg", "Hanoi", "Harare", "Havana", "Helsinki", "Ho Chi Minh City", "Hong Kong", "Honiara", "Honolulu", "Houston", "Hyderabad", "Hyderabad", "Ibadan", "Incheon", "Isfahan", "Islamabad", "Istanbul", "Izmir", "Jaipur", "Jakarta", "Jeddah", "Jerusalem", "Johannesburg", "Juarez", "Juba", "Kabul", "Kaduna", "Kampala", "Kano", "Kanpur", "Kaohsiung", "Karachi", "Karaj", "Kathmandu", "Kawasaki", "Kharkiv", "Khartoum", "Khulna", "Kigali", "Kingsburg", "Kingston", "Kingstown", "Kinshasa", "Kobe", "Kolkata", "Kota Bharu", "Kowloon", "Kuala Lumpur", "Kumasi", "Kuwait", "Kyiv", "Kyoto", "La Paz", "Lagos", "Lahore", "Libreville", "Lilongwe", "Lima", "Lisbon", "Ljubljana", "Lome", "London", "Los Angeles", "Luanda", "Lubumbashi", "Lusaka", "Luxembourg", "Macau", "Madrid", "Majuro", "Makassar", "Malabo", "Male", "Mamoudzou", "Managua", "Manama", "Manaus", "Manila", "Maputo", "Maracaibo", "Maracay", "Mariehamn", "Marigot", "Maseru", "Mashhad", "Mbabane", "Mecca", "Medan", "Medellin", "Medina", "Melbourne", "Mexico City", "Miami", "Minsk", "Mogadishu", "Monaco", "Monrovia", "Montevideo", "Montreal", "Moroni", "Moscow", "Mosul", "Multan", "Mumbai", "Muscat", "N'Djamena", "Nagoya", "Nairobi", "Nanchong", "Nanjing", "Nassau", "Nay Pyi Taw", "New York", "Niamey", "Nicosia", "Nouakchott", "Noumea", "Novosibirsk", "Nuku'alofa", "Nur-Sultan", "Nuuk", "Oranjestad", "Osaka", "Oslo", "Ottawa", "Ouagadougou", "Pago Pago", "Palembang", "Palo Alto", "Panama", "Papeete", "Paramaribo", "Paris", "Perth", "Philadelphia", "Phnom Penh", "Phoenix", "Podgorica", "Port Louis", "Port Moresby", "Port of Spain", "Port-Vila", "Port-au-Prince", "Porto Alegre", "Porto-Novo", "Prague", "Praia", "Pretoria", "Pristina", "Puebla", "Pune", "Pyongyang", "Quezon City", "Quito", "Rabat", "Rawalpindi", "Recife", "Reykjavik", "Riga", "Rio de Janeiro", "Riyadh", "Road Town", "Rome", "Roseau", "Saint George's", "Saint Helier", "Saint John's", "Saint Peter Port", "Saint Petersburg", "Saint-Denis", "Saint-Pierre", "Saipan", "Salvador", "San Antonio", "San Diego", "San Francisco", "San Jose", "San Juan", "San Marino", "San Salvador", "Sanaa", "Santa Cruz de la Sierra", "Santiago", "Santo Domingo", "Sao Paulo", "Sao Tome", "Sapporo", "Sarajevo", "Seattle", "Semarang", "Seoul", "Shanghai", "Sharjah", "Shenzhen", "Singapore", "Skopje", "Sofia", "South Tangerang", "Soweto", "Stockholm", "Sucre", "Surabaya", "Surat", "Suva", "Sydney", "Tabriz", "Taipei", "Tallinn", "Tangerang", "Tarawa", "Tashkent", "Tbilisi", "Tegucigalpa", "Tehran", "Tel Aviv", "Thimphu", "Tianjin", "Tijuana", "Tirana", "Tokyo", "Toronto", "Torshavn", "Tripoli", "Tunis", "Ulan Bator", "Vaduz", "Valencia", "Valletta", "Vancouver", "Victoria", "Vienna", "Vientiane", "Vilnius", "Warsaw", "Washington", "Wellington", "Willemstad", "Windhoek", "Wuhan", "Xi'an", "Yamoussoukro", "Yangon", "Yaounde", "Yekaterinburg", "Yerevan", "Yokohama", "Zagreb"];

const API_KEY = "Get you API_KEY from https://openweathermap.org/";


locationInput.addEventListener('keydown', async (event) => {
  if (event.key.toString().toLowerCase() == "enter") {
    await getWeatherData(event.target.value);
  }

})

locationInput.addEventListener('input', (event) => {
  if (event.target.value === "" ||event.target.value === null){
    searchResult.classList.add("hidden");
  }
  else {
      // execute the searchForCity function when a user input something
    while (searchResult.firstChild) {
      searchResult.removeChild(searchResult.firstChild);
    }
    let foundlist = searchForCity(event.target.value);
    if (foundlist?.length > 0) {
      foundlist.forEach((found) => {
        const li = document.createElement("li");
        li.classList = "pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900 dark:text-white dark:hover:text-gray-900";
        li.innerHTML = ` 
        <svg class="absolute w-4 h-4 left-2 top-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
        ${found}`;
        li.addEventListener('mousedown', async (event) => {
          locationInput.value = event.target.textContent.trim();
          searchResult.classList.add("hidden");
          await getWeatherData(locationInput.value);
        })
        searchResult.appendChild(li);
      })
      searchResult.classList.remove("hidden")
    }
    else {
      searchResult.classList += ("hidden")
      while (searchResult.firstChild) {
        searchResult.removeChild(searchResult.firstChild);
      }
    }
  }
 

})

document.addEventListener('DOMContentLoaded', async () => {
  await getWeatherData("Manama");
})

function searchForCity(inputText) {
  if (typeof inputText === "string" && inputText != null) {
    let matchingList = [];
    matchingList = citiesList.filter(city => {
      return city.toLowerCase().startsWith(inputText);
    })
    return (matchingList);
  }
}

async function getWeatherData(locationInput) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${API_KEY}&units=metric`);
  let responseJSON = await response.json();
  locationDisplay.textContent = `${responseJSON.name}, ${regionNames.of(responseJSON.sys.country)}`;
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  dateTime.textContent = new Date().toLocaleString('en-US', options);
  weatherDescription.textContent = responseJSON.weather[0].description;
  weatherdescrptionImg.src = `https://openweathermap.org/img/wn/${responseJSON.weather[0].icon}@2x.png`;
  temp.textContent = responseJSON.main.temp + "° C";
  minMaxTemp.textContent = `MIN: ${responseJSON.main.temp_min}  °C MAX: ${responseJSON.main.temp_max}°C`;
  feelsLike.textContent = responseJSON.main.feels_like + "° C";
  pressure.textContent = responseJSON.main.pressure + "hPa";
  humidity.textContent = responseJSON.main.humidity + "%";
  windSpeed.textContent = responseJSON.wind.speed + "m/s";
}

