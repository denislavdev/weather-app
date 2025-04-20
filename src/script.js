const cityInput = document.getElementById("city-input");
const temperature = document.getElementById("temperature");
const status = document.getElementById("status");
const realFeel = document.getElementById("real-feel");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const weatherLocation = document.getElementById("location");
const date = document.getElementById("date");
const errorMessage = document.getElementById("error-message");
date.innerHTML = new Date().toLocaleDateString("en-US");
const weatherInfo = document.getElementById("weather-info");
const icon = document.getElementById("icon");

let debounceTimer;

cityInput.addEventListener("input", (e) => {
	clearTimeout(debounceTimer);
	const city = e.target.value.trim();
	if (!city) {
		weatherInfo.style.display = "none";
		errorMessage.style.display = "none";
		errorMessage.innerHTML = "";
		return;
	}

	debounceTimer = setTimeout(() => {
		fetchWeather(city);
	}, 500);
});

function fetchWeather(city) {
	fetch(
		`https://weather-app-api-denislav.vercel.app/weather?city=${encodeURIComponent(
			city
		)}`
	)
		.then((res) => {
			if (!res.ok) {
				errorMessage.innerHTML = "City not found. Please try again.";
				weatherInfo.style.display = "none";
				throw new Error("Network response was not ok.");
			}
			weatherInfo.style.display = "block";
			return res.json();
		})
		.then((data) => {
			errorMessage.style.display = "none";
			weatherLocation.innerHTML =
				data.location.name + ", " + data.location.country;
			icon.className = data.current.is_day === 0;
			temperature.innerHTML = `${data.current.temp_c}°C`;
			status.innerHTML = data.current.cloud > 50 ? "Cloudy" : "Clear";
			realFeel.innerHTML = `${data.current.feelslike_c}°C`;
			humidity.innerHTML = `${data.current.humidity}%`;
			wind.innerHTML = `${data.current.wind_kph} km/h`;
			pressure.innerHTML = `${data.current.pressure_mb} hPa`;
		})
		.catch((err) => console.error("Fetch error:", err));
}
