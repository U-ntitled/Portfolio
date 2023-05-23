import React from 'react'
import styles from './style.module.css'

function Transition() {
  return (
    <div id={`${styles.contact_section}`} className="space-section">
        <div className={styles.text_section}>
            <div className={`${styles.title_text} leading-tight`}>
                <h2 className={`${styles.h2_low} h2`}>LET'S CREATE <span className={`${styles.green}`}>SOMETHING AMAZING</span> TOGETHER</h2>
            </div>
            <p className={styles.text}>
                Ready to take the plunge into the digital dimension? Have questions, ideas, or partnerships in mind? Our contact section is just a click away. 
                Drop us a line, and our talented teams are here to simplify the complex world of technology and provide you with tailored solutions that meet your specific needs.
            </p>

            <div className={styles.purple_button}>
                <a href="#" className=' rounded-md'>GET IN TOUCH WITH US</a>
            </div>
        </div>

        <span id='contact'/>
        <div className={styles.image_representation}>
            <img src="Saly-31 1.svg" alt="Communication illustration"/>
        </div>
    </div>    
  )
}

export default Transition