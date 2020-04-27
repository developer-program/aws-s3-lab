import React from "react";

function PokemonCard({ info }) {
  const imageUrl = info.imageUrl || `${process.env.PUBLIC_URL}/unknown.png`;
  return (
    <div>
      <h3>{info.name}</h3>
      <img height="200" width="200" src={imageUrl} alt="pokemon" />
      {!info.imageUrl && <div>No Image</div>}
    </div>
  );
}

export default PokemonCard;
