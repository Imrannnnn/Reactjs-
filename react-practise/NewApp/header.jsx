import globe from "../NewApp/img/globe.png";
export default function Header() {
    // This is a functional component that returns a header element 
    return (
        <header>
            <img src={globe} className="globe" />
          <h1> My travel Journal </h1>
        </header>
    )
}
