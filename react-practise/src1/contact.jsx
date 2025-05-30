export default function Contact(props) {

   return(
      <article>
       <img src = {props.img} />
      <h2> {props.name}</h2>

      <div className="contact">
         <img src="../src1/phone-icon.png"/>
         <p>{props.phone}</p>
         </div>
         

         <div className="mail">
            <img src="../src1/mail-icon.png"/>
                 <p>{props.email}</p>
         </div>
    
<div className="Address">
   <h2>{props.address}</h2>
   
</div>
       
        </article>
   )
}