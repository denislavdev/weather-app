const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const apiLimitted = rateLimit({
	windowMs: 60 * 1000,
	max: 15,
	message: { error: "Too many requests, please try again later." },
});

app.use("/weather", apiLimitted);

app.get("/weather", async (req, res, next) => {
	const apiKey = process.env.API_KEY;
	const city = req.query.city;
	if (!apiKey) {
		return res
			.status(500)
			.json({ error: "Server misconfiguration: API_KEY missing" });
	}
	if (!city) {
		return res.status(400).json({ error: "City query parameter is required" });
	}

	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
				city
			)}`
		);
		if (!response.ok) {
			return res.status(response.status).json({ error: "City not found" });
		}
		const data = await response.json();
		res.json(data);
	} catch (err) {
		console.error("Error fetching weather:", err);
		next(err);
	}
});

app.get("/", (req, res) => res.send("Hello World!"));

app.use((req, res) => {
	res.status(404).json({ error: "Not Found" });
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port);
module.exports = app;
