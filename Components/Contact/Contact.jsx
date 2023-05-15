import React from 'react'
import './style.module.css'

function Contact() {
  return (
    <div id="contact_form_section" className="padding_fake">
        <form className="contact_form" method="post">
            <h2 className="form_title">CONTACT US</h2>
            
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="email" placeholder="Your email adress"/>
            <textarea name="message" cols="30" rows="15" placeholder="Write your message here..."></textarea>
            
            <p className="purple_button2">
                <button type="submit">SEND MESSAGE</button>
            </p>
        </form>

        <div className="image_representation_2">
            <img src="Saly-21 1.svg" alt="Little universe to get in touch"/>
        </div>
    </div>
  )
}

export default Contact