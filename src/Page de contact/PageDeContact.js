import React, { useRef } from "react";
import  EmailJS from "emailjs-com";


function Contact(){

    const form = useRef();

    const sendEmail =  (e) => {
        e.preventDefault();
    EmailJS.sendForm(
        'service_9wgu8jb',
        'template_fgvlrba',form.current,
        'GJo7gJfr5DU2O5Nwn'
    ).then((result)=> {
        alert('Message envoyé avec succées!!');
        e.target.reset();
    },(error)=>{
        alert('Erreur :' + error.text);
    });
        
}
    return(
       <div className="container mt-5 mb-2">
           <h2 className="text-center mb-5"> Contactez-nous</h2>
           <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
                 <label className="form-label"> Nom </label>
                <input type="text" name="name" className="form-control" placeholder=" Entrer votre nom" required/>
            </div>
              <div className="mb-3">
                 <label className="form-label"> G-Email </label>
                <input type="email"  name="email"  className="form-control" placeholder=" Entrer votre email" required/>
            </div>
            
            <div className="mb-3">
                <label className="form-label"> Message </label>
               <textarea className="form-control" name="message" rows={4} placeholder="Votre message pour le fleur" required></textarea>
            </div>
            <button type="submit" className="btn btn-success">Envoyer</button>
           </form>
       </div>
    )
}
export default Contact