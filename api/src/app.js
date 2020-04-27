require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./utils/db");

const app = express();

const pokemonRoute = require("./routes/pokemon.route");

app.use(cors());
app.use(express.json());

app.use("/pokemons", pokemonRoute);

app.get("/health", (req, res) => {
  res.json({
    status: "up",
  });
});

module.exports = app;
