const API_KEY = CONFIG.OPENWEATHER_API_KEY;

const searchInput = document.getElementById('search');
const weatherCard = document.getElementById('weatherCard');

searchInput.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
    const location = searchInput.value;
    if (location.trim() === '') return;

    try {
      const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&addressdetails=1&limit=1`;
      const geoRes = await fetch(geocodeUrl);
      if (!geoRes.ok) throw new Error("Erro ao buscar coordenadas");
      const geoData = await geoRes.json();
      if (geoData.length === 0) throw new Error("Localização não encontrada");

      const { lat, lon, address } = geoData[0];

      const cidade = address.city || address.town || address.village || '';
      const estado = address.state || '';
      const nomeCompleto = [cidade, estado].filter(Boolean).join(', ');

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${API_KEY}`;
      const res = await fetch(weatherUrl);
      if (!res.ok) throw new Error("Erro ao buscar clima");
      const data = await res.json();

      document.getElementById('city').textContent = nomeCompleto || data.name;
      document.getElementById('description').textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
      document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°C`;
      document.getElementById('feels_like').textContent = `${data.main.feels_like}°C`;
      document.getElementById('min').textContent = `${data.main.temp_min}°C`;
      document.getElementById('max').textContent = `${data.main.temp_max}°C`;
      document.getElementById('humidity').textContent = `${data.main.humidity}%`;
      document.getElementById('wind').textContent = `${data.wind.speed} km/h`;
      document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;

      const weatherIcon = document.getElementById('weatherIcon');
      const mainWeather = data.weather[0].main;

      let iconPath = '';
      switch (mainWeather) {
        case 'Clouds': iconPath = './icons/clouds.png'; break;
        case 'Rain': iconPath = './icons/rain.png'; break;
        case 'Drizzle': iconPath = './icons/drizzle.png'; break;
        case 'Thunderstorm': iconPath = './icons/thunderstorm.png'; break;
        case 'Snow': iconPath = './icons/snow.png'; break;
        default: iconPath = './icons/default.png';
      }
      weatherIcon.src = iconPath;

      weatherCard.classList.remove('hidden');

      const description = data.weather[0].description.toLowerCase();

      if (description.includes("chuva forte")) {
        const alertAudio = document.getElementById('alertAudio');
        const alertRain = document.getElementById('alertRain');
        alertRain.style.display = "flex";
        document.getElementById("cloudsAlert").textContent = `${data.clouds.all}%`;
        document.getElementById("humidityAlert").textContent = `${data.main.humidity}%`;

        const dateNow = new Date();
        const hour = dateNow.getHours().toString().padStart(2, '0');
        const minutes = dateNow.getMinutes().toString().padStart(2, '0');
        document.getElementById("timeUpdate").textContent = `${hour}:${minutes}`;
        alertAudio.play();
        setTimeout(() => {
          alertRain.style.display = "none";
        }, 5000);
      } else {
        alertRain.classList.add("hidden");
      }

    } catch (err) {
      alert("Erro: " + err.message);
    }
  }
});
