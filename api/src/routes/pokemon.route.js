const express = require("express");
const PokemolModel = require("../models/pokemon.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const pokemons = await PokemolModel.find({});

  res.json(pokemons);
});

router.post("/", async (req, res) => {
  const pokemonInfo = req.body;
  const newPokemon = new PokemolModel(pokemonInfo);
  await newPokemon.save();

  res.sendStatus(201);
});

module.exports = router;
