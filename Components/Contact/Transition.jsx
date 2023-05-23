import React from 'react'
import styles from './style.module.css'
import { motion } from 'framer-motion'

function Transition() {
  return (
    <div id={`${styles.contact_section}`} className="space-section">
        <div className={styles.text_section}>
            <motion.div 
            initial={{opacity:0, x:-200}}
            whileInView= {{ opacity:1 , x:0}}
            transition={{ duration:0.3 , delay:0.4}} 
            viewport={false}
            className={`${styles.title_text} leading-tight`}>
                <h2 className={`${styles.h2_low} h2`}>LET'S CREATE <span className={`${styles.green}`}>SOMETHING AMAZING</span> TOGETHER</h2>
            </motion.div>
            <motion.p 
            initial={{opacity:0, x:-200}}
            whileInView= {{ opacity:1 , x:0}}
            transition={{ duration:0.3 , delay:0.6}} 
            viewport={false}
            className={styles.text}>
                Ready to take the plunge into the digital dimension? Have questions, ideas, or partnerships in mind? Our contact section is just a click away. 
                Drop us a line, and our talented teams are here to simplify the complex world of technology and provide you with tailored solutions that meet your specific needs.
            </motion.p>

            <motion.div 
            initial={{opacity:0, x:-200}}
            whileInView= {{ opacity:1 , x:0}}
            transition={{ duration:0.3 , delay:0.8}} 
            viewport={false}
            className={styles.purple_button}>
                <a href="#" className=' rounded-md'>GET IN TOUCH WITH US</a>
            </motion.div>
        </div>

        {/* <span id='contact'/> */}
        <motion.div 
        initial={{opacity:0, x:200}}
        whileInView= {{ opacity:1 , x:0}}
        transition={{ duration:0.3 , delay:0.6}} 
        viewport={false}
        className={styles.image_representation}>
            <img src="Saly-31 1.svg" alt="Communication illustration"/>
        </motion.div>
    </div>    
  )
}

export default Transition