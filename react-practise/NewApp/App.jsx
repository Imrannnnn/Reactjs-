import Header from "./header.jsx"
import Entry from "./Entry.jsx"
import Data from "./data.js"

export default function Dapp() {
    const Dnews = Data.map(data => (
        <Entry 
            key={data.id}
            img={data.img} 
            title={data.title} 
            country={data.country}
            googleMapLink={data.googleMapsLink}
            date={data.date}
            text={data.text} 
        />
    ))

    return (
        <>
            <Header />
            {Dnews}
        </>
    )
}
