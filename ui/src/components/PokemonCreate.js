import React, { useState } from "react";
import axios from "axios";

const PokemonCreate = () => {
  const [id, updateId] = useState(0);
  const [name, updateName] = useState("");

  const uploadPokemon = async (name, file) => {
    const server = process.env.REACT_APP_SERVER_URL;

    await axios.post(`${server}/pokemons`, {
      name,
    });

    alert("Pokemon added");
  };

  return (
    <div>
      <div>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          min={0}
          max={999}
          onChange={(event) => updateId(event.target.value)}
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => updateName(event.target.value)}
        />
      </div>
      <button onClick={() => uploadPokemon(name)}>Upload Pokemon</button>
    </div>
  );
};

export default PokemonCreate;
