import React from "react";
import { useState, useEffect } from "react";

export const CharacterList = () => {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacter(data.results);
    }

    fetchData();
  }, []);

  return (
    <div>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
};
