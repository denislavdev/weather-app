<div align="center">
  <h1>🌦️ Weather App</h1>
  <p>A fast, accessible, and real-time weather app built with HTML, JavaScript, TailwindCSS, and Node.js (Express API).</p>
  <p>
    <p>Preview: <a href="https://weather-app-denislav.vercel.app">https://weather-app-denislav.vercel.app</a></p>
  </p>
  <img src="https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Made%20with%20❤️-FF6F61?style=for-the-badge" />
</div>

---

## Overview 📋

This project is a weather app that lets you check real-time weather, temperature, humidity, wind, and pressure for any city worldwide. It features a clean UI, instant search, and a secure backend API for fetching weather data.

---

## Features ✅

- **City Search:** Instantly search for any city worldwide.
- **Live Weather Data:** Get up-to-date temperature, humidity, wind, and pressure.
- **Real Feel:** See what the temperature actually feels like.
- **Responsive Design:** Looks great on desktop and mobile.
- **Accessible:** Built with accessibility in mind.
- **API Rate Limiting:** Prevents abuse with server-side rate limiting.

---

## Tech Stack 💻

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="HTML5 logo" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="JavaScript logo" />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="TailwindCSS logo" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="Node.js logo" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" alt="Express logo" />
</div>

---

## Project Structure 📂

Here’s a quick look at the project files:

- **src/index.html** – Main HTML file for the app UI.
- **src/script.js** – JavaScript file that handles fetching and displaying weather data.
- **src/input.css** – Source file for TailwindCSS.
- **server/api/index.ts** – Express API server that fetches weather data from [weatherapi.com](https://www.weatherapi.com/).
- **.env** – Stores your API key securely for the backend.
- **.prettierignore** – Tells Prettier to skip over the Tailwind output CSS and minified JS.
- **.gitignore** – Tells Git which files to skip when you use `git add *`.
- **README.md** – This file.

---

## Getting Started 🚀

### Prerequisites 🔧

Ensure you have the following installed:

- Node.js (for the API server)
- npm (for installing dependencies)
- A modern web browser

### Installation 🛠️

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/denislavdev/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   cd server
   npm install
   ```

3. **Set up your API key:**

   - Copy your WeatherAPI key into a `.env` file in the root directory:
     ```
     API_KEY=your_weatherapi_key_here
     ```

4. **Run the App Locally:**

   ```bash
   npm run dev
   ```

   This will start the Tailwind watcher, JS minifier, and the API server concurrently.

---

## How It Works

1. Type a **city name** in the search box.
2. The app fetches real-time weather data from the backend API.
3. Weather details (temperature, humidity, wind, pressure, etc.) are displayed instantly.
4. If the city is not found, an error message is shown.

---

## API Server (/server) 🌐

The backend API is built with **Express** and **TypeScript**. It acts as a secure proxy to [weatherapi.com](https://www.weatherapi.com/), keeping your API key hidden from the frontend and users. This design also lets us add features like rate limiting and custom error handling for a smoother and safer experience.

### How the API Works

- **Endpoint:**  
  `/weather?city=CityName`  
  Just send a GET request with the `city` query parameter. For example:

  ```
  /weather?city=London
  ```

- **What You Get:**  
  The API responds with real-time weather data for the requested city, including:

  - City and country name
  - Current temperature (°C)
  - Real feel temperature (°C)
  - Humidity (%)
  - Wind speed (km/h)
  - Pressure (hPa)
  - Cloud coverage and day/night info

- **Rate Limiting:**  
  To prevent abuse and keep the service reliable, each IP is limited to **15 requests per minute**. If you exceed this, you’ll get a clear error message:

  ```
  { "error": "Too many requests, please try again later." }
  ```

- **Error Handling:**  
  The API always tries to return helpful error messages:

  - If you forget the `city` parameter:
    ```
    { "error": "City query parameter is required" }
    ```
  - If the city isn’t found or is misspelled:
    ```
    { "error": "City not found" }
    ```
  - If the server is misconfigured (e.g., missing API key):
    ```
    { "error": "Server misconfiguration: API_KEY missing" }
    ```
  - For any other unexpected errors, you’ll get:
    ```
    { "error": "Internal Server Error" }
    ```

- **CORS Support:**  
  The API is CORS-enabled, so you can safely call it from your frontend app or even experiment with it using tools like Postman or your browser’s fetch API.

- **Security:**  
  Your WeatherAPI key is never exposed to the frontend or users. All requests to the weather provider are made server-side.

- **Implementation:**  
  The main logic lives in [`server/api/index.ts`](server/api/index.ts).
  - Uses [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) for throttling.
  - Handles all errors gracefully and returns JSON responses.
  - Easy to extend if you want to add more endpoints or features!

---

If you want to see or modify how the API works, check out [`server/api/index.ts`](server/api/index.ts).

---

## Credits 🙏

- Weather data powered by [weatherapi.com](https://www.weatherapi.com/)
- Layout inspired by [Ope Afolabi](https://www.youtube.com/@opeafolabi)
- Developed with care by [Denislav](https://github.com/denislavdev)

---

If you find this project useful, feel free to fork it, star it, or open an issue with any suggestions or feedback!
