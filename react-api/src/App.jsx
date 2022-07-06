import React from "react";
//import { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import { CharacterList } from "./components/CharacterList";
import { Character } from "./components/Character";

//** == Styled Component ==  */
const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #333;
  margin: 20px auto;
  text-align: center;
`;
//*TODO ==== APP ===== */
function App() {
  return (
    <div className="App">
      <Title>Rick and Morty</Title>
      <CharacterList />
      <Character />
    </div>
  );
}

export default App;
