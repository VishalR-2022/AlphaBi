import React from "react";

export default function PokemonCard(prop) {
  return (
    <div className="pokemon">
      <iframe title={prop.name} src={prop.url} alt={prop.name} />
    </div>
  );
}
