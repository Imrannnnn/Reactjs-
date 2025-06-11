export default function Entry(props) {
    return(
        <article className="journal-entry">

            <div className="main-image-container">
                <img 
                src={props.img}
                />

            </div>

            <div className="info-container">
                <img className="marker"
                src="../NewApp/img/felix.png"
                />

                <span className="country" > {props.country} </span>
                <a>{props.googleMapLink} </a>
                <h2 className="entry-title"> {props.title} </h2>
                <p className="trip-date">{props.date}</p>
                <p className="entry-text">{props.text}</p>

            </div>
        </article>
    )
}