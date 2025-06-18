import Entry from "./Entry.jsx"
import Header from "./header.jsx"
import Data from "./data.js"

export default function App() {
    const entries = Data.map(data => {
        return (
            <Entry 
            id={data.id}
            
            data={data}


            /*img={data.img}
            title = {data.title}
            country = {data.country}
            googleMapsLink = {data.googleMapsLink}
            data = {data.date}
            text = {data.text} */

            
            />
        )
    })
return (
    <>
    <Header />
    {entries}
    </>

)
}