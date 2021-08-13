import React from 'react';
import { CrudApp } from "./Componentes/CrudApp";
import {CrudApi} from "./Componentes/CrudApi"
import { SongSearch } from './Componentes/SongSearch';
function App() {
  return (
    <>
      <h1>Ejercicios Con React</h1>
      <hr/>
      <SongSearch/>
      <hr/>
      <CrudApi/>
      <hr/>
      <CrudApp/>
    </>
  );
}

export default App;
