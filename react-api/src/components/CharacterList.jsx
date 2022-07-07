import React from "react";
import { useState, useEffect } from "react";
import { Character } from "./Character";

//** ==== Pagination ==== */
function NavPage(props) {
     return(
       <header className="d-flex justify-content-between align-items-center">
         <p>Page :{props.page}</p>
         <button className="btn  btn-primary btn-sm" 
          onClick={() =>  props.setPage(props.page + 1)}
          >
          Page: {props.page + 1}
         </button>
       </header>
     )
}

//** === Export List ====  */
export const CharacterList = () => {
  const [characters, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false); 
      setCharacter(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character
                  name={character.name}
                  image={character.image}
                  origin={character.origin.name}
                />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
};
