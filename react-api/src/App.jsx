import React from "react";
//import { useState, useEffect } from "react";
import styled from "styled-components";
//import "./App.css";
import { CharacterList } from "./components/CharacterList";
import { Character } from "./components/Character";

//** == Styled Component ==  */
const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  margin: 20px auto;
  text-align: center;
  padding: 10px;
`;
//*TODO ==== APP ===== */
function App() {
  return (
    <div className="bg-dark text-white">
      <Title>Rick and Morty</Title>
      <CharacterList />
      <Character />
    </div>
  );
}

export default App;
