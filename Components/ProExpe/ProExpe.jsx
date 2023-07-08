import React from 'react'
import styles from './style.module.pro.css'

// This code is autmatic

/*var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// This function require to be called in the template

function toggle(i) {
    var icon = document.querySelectorAll(".RightIcon");
    if (icon[i].textContent == "+") {
        icon[i].textContent = "-"
    } else {
        icon[i].textContent = "+"
    }
}
*/

function ProExpe () {
    return (
        <div>

            <div className={styles.title}>
                <h3 className={style.expe}>PROFESIONAL EXPERIENCE</h3>
            </div>

            <div className={styles.main_container}>
                <div className={styles.little_section}>
                    <div className={styles.accordion}>
                        <div onclick="toggle(0)" className={styles.extra_space}>
                            <p>WEBCUP MADAGASCAR 2023</p>
                            <p className={styles.RightIcon}>+</p>
                        </div>
                    </div>
                    <div className={styles.panel}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum magnam sapiente facere distinctio dolor ut fugiat voluptas numquam sit totam dolorem repellendus, sed minima. Magni sint deleniti voluptatibus cum expedita.</p>
                    </div>
                </div>

                <div className={styles.little_section}>
                    <div className={styles.accordion}>
                        <div onclick="toggle(1)" className={styles.extra_space}>
                            <p>DEVFEST 2022</p>
                            <p className={styles.RightIcon}>+</p>
                        </div>
                    </div>
                    <div className={styles.panel}>
                        <div className="hidden"></div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum magnam sapiente facere distinctio dolor ut fugiat voluptas numquam sit totam dolorem repellendus, sed minima. Magni sint deleniti voluptatibus cum expedita.</p>
                    </div>
                </div>
                <div className={styles.little_section}>
                    <div className={styles.accordion}>
                        <div onclick="toggle(2)" className={styles.extra_space}>
                            <p>DEVHUNT EDITION II</p>
                            <p className={styles.RightIcon}>+</p>
                        </div>
                    </div>
                    <div className={styles.panel}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum magnam sapiente facere distinctio dolor ut fugiat voluptas numquam sit totam dolorem repellendus, sed minima. Magni sint deleniti voluptatibus cum expedita.</p>
                    </div>
                </div>
                <div className={styles.little_section}>
                    <div className={styles.accordion}>
                        <div onclick="toggle(3)" className={styles.extra_space}>
                            <p>DEVHUNT EDITION I</p>
                            <p className={styles.RightIcon}>+</p>
                        </div>
                    </div>
                    <div className={styles.panel}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum magnam sapiente facere distinctio dolor ut fugiat voluptas numquam sit totam dolorem repellendus, sed minima. Magni sint deleniti voluptatibus cum expedita.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProExpe