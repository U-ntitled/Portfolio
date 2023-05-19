import React from 'react'
import styles from './style.module.css'

function Transition() {
  return (
    <div id={`${styles.contact_section}`} className="space-section">
        <div className={styles.text_section}>
            <div className={styles.title_text}>
                <h2 className="h2">LET'S CREATE <span className={`${styles.green}`}>SOMETHING AMAZING</span> TOGETHER</h2>
            </div>
            <p className={styles.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eveniet nobis perspiciatis ab ipsa. 
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