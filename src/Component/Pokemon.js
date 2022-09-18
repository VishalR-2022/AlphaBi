import React from "react";

export default function Pokemon(prop) {
  return (
    <div className="pokemon">
      <iframe title={prop.name} src={prop.url} alt={prop.name} />
      <button
        onClick={() =>
          prop.setNewArr((prevValue) => [...prevValue, prop.element])
        }
        className="btn"
      >
        Add to favorite
      </button>
    </div>
  );
}
