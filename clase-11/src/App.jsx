// import React, { Component } from "react";

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

// import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// import React from "react";

// export default class App extends React.Component{
//   render(){
//     return( <div>hola</div> )
//   }
// }

// export default function App(){
//   return ( <div>hola!</div> )
// }

// const App = () => {
//   return ( <div>hola!</div> )
// }

// export default App
//rafce
import React, { useState } from "react";

const App = () => {
  const variable = "Un valor";
  const array = [
    {
      id: 1,
      nombre: "Homero",
      apellido: "Simpson"
    },
    {
      id: 2,
      nombre: "Marge",
      apellido: "Simpson"
    },
    {
      id: 3,
      nombre: "Bart",
      apellido: "Simpson"
    },
    {
      id: 4,
      nombre: "Lisa",
      apellido: "Simspon"
    },
    {
      id: 5,
      nombre: "Maggie",
      apellido: "Simpson"
    }
  ]
  const [ count, setCount ] = useState(0)

  function contador(){
    setCount( count + 1 )
    console.log(count)
  }
  console.log("me llamaron")
  return (
    <>
    <ul>
      { array.map( (personaje, indice) => <li key={personaje.id} className="text-red-200">{ personaje.nombre }</li> )}
      { count }
      <button onClick={ contador } >+</button>
    </ul>
    </>
  );
};

export default App;
