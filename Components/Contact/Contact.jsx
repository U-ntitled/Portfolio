import React from 'react'
import styles from './style.module.css'

function Contact() {
  return (
    <div id={`${styles.contact_form_section}`} className="space-section font-Exo2 snap-center">
        
        <form className={styles.contact_form} method="post">
            <h2 className={`${styles.form_title} h2`}>CONTACT US</h2>
            
            <input 
            className={styles.input_text}
            type="text" name="name" placeholder="Name"/>
            <input 
            className={styles.input_text}
            type="text" name="email" placeholder="Your email adress"/>
            
            <textarea 
            name="message" 
            cols="30" 
            rows="6" 
            placeholder="Write your message here..."
            className={styles.area}></textarea>
            
            <p className={styles.purple_button2}>
                <button type="submit" className='rounded-md'>SEND MESSAGE</button>
            </p>
        </form>

        <div className={styles.image_representation_2}>
            <img className={styles.rotate} src="Saly-21 1.svg" alt="Little universe to get in touch"/>
        </div>
    </div>
  )
}

export default Contact