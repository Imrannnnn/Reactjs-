import reactLogo from "./react.svg";
import './MainApp.css';

export default function Header1() {
    return ( 
    
    <div className="container">

<header>
    <nav>
        <img src={reactLogo} alt="React-logo"/>
        <span>ReactFacts</span>
    </nav>
</header>

<main>
    <h1>Fun Fact About reactJS</h1>
    <ul className="fact-list">
        
        <li>It was first released in 2013</li>
        <li>It was originally created by Jordan Walke</li>
        <li>It has well over 100K stars on GitHub</li>
        <li>It is maintained by Facebook</li>
        <li>It powers thousands of enterprise apps, including mobile apps</li>

    </ul>
</main>

    </div>


    )
}