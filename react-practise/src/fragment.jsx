
import {createRoot}  from 'react-dom/client'

import Header from "./Header";
import './App.css';
import Maincontent from "./Maincontent"


const root = createRoot(document.getElementById("root"))

root.render(
    <Froot/>
)



function Froot() {
    return(
        <>
        <Header/>
      <Maincontent/>

       
        </>
    )
}