/*import React from "react";
import { createRoot } from "react-dom/client";
import reactLogo from "./react.svg"; // path is correct if this file is also in /src

const root = createRoot(document.getElementById("root"));

root.render(
  <Temp />
);  


//creating custom component
// note that react use custom component name with capital letter

function Temp() {
  return (
  <div>
    <img src={reactLogo} alt="React Logo" />

    <h1> Fun fact about reactJs</h1>
    
    <ul>
      <li>it was first founded in 2014</li>
      <li>It so easeir to use as frame woerk </li>
     <li>it give a more produvitve working envrionment to the developer </li>
     <li> it is an open source library</li>
    </ul>
  </div>)
} */


  import { createRoot } from  "react-dom/client";
  import reactLogo from "./react.svg"
  import './src/App.css';

  const root = createRoot(document.getElementById("root"));

  root.render(
    <Trip />

  )

  function Trip() {
    return(

      <div>

        <header>I'm learning reactJS</header>
<img src = {reactlogo}/>

<h1> Fun fact about react </h1> 
<ul> <li> i love react </li>
<li>I love React Javascript</li>
  
  </ul>

  <footer> <small>C 2025 Develeoped by Nasiru Imran. All right reserved</small>

  </footer>

      </div>
    )
  }