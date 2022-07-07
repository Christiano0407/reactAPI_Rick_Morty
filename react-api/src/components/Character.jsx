import React from "react";

export const Character = (character) => {
  return (
    <div className="text-center p-5">
     <h2 className="fs-4 p-4">{character.name}</h2>
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
      <p className="fs-6 ">{character.origin}</p> 
    </div>
  )
}; 
