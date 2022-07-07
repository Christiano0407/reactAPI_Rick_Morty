import React from "react";
import { useState, useEffect } from "react";
import { Character } from "./Character";

export const CharacterList = () => {
  const [characters, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setLoading(false); 
      setCharacter(data.results);
    }

    fetchData();
  }, []);

  if(loading) {
    return(
      <div>Loading....</div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        {characters.map((character) => {
          return (
            <div className="col-md-4" key={character.id}>
              <Character name={character.name} image={character.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
