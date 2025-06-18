export default function Entry(props) {
    return(
    
       <div>
<article>
    <img src={props.data.img} alt={props.title} />
 <h2>{props.data.id}</h2>
</article>

<h1>{props.data.title}</h1>  
<h2>{props.data.country}</h2>
<h3>{props.data.googleMapsLink}</h3>
<p>{props.data.date}</p>
<p>{props.data.text}</p>
    
       </div>
       

    )
}