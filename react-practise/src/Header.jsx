
import reactLogo from "./react.svg";

export default function Header() {
    return(
        <div className = "header">
        <img src={reactLogo}   className="nav-logo" alt="React Logo" />
        <nav>
            <ul className = "nav-list">
                <li className='nav-list-item'>Pricing</li>
                <li className='nav-list-item'>About</li>
                <li className='nav-list-item'>Contact</li>
            </ul>
        </nav>
        </div>
    )
}