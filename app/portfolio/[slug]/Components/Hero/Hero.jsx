import React from 'react'
import './style.css';
function Hero() {
  return (
    <header className="header">
                <div className="logo-button">
                    {/* <!-- <span>
                        <img src="" alt="logo" />
                    </span> --> */}
                    <h1 className="logo">
                        <span>.</span> riry
                    </h1>
                    <a href="#">
                        My resume
                    </a>
                </div>
                <nav className="navbar">
                    <ul className="navbar-container ">
                        <li> 
                            <a href="#home">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512">
                                {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#service">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
                                    {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#project">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 640 512">
                                    {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                    <path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#skills">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 640 512">
                                    {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                <path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
                            </a>
                        </li>
                        <li>
                        <a href="#conctact">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 640 512">
                            {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
                        </a>
                        </li>
                    </ul>
                </nav>

                <div className="hero">
                        <div className="hero-left">
                            <h3 className="hero-text">Hi , I am</h3>
                            <h2 className='hero-subtitle'>NOMENJANAHARY Riry</h2>
                            <h3 className="hero-title">
                                UI/UX DESIGNER && WEB DEVELOPER
                            </h3>
                            <p className='hero-paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi fugiat quaerat
                                autem voluptatem ex blanditiis, error officiis non commodi 
                                repudiandae ipsam velit sint. Quibusdam aliquid non commodi cupiditate omnis.
                            </p>
                            <div className="hero-contact">
                                <span className="hero-contact_me">
                                    <a>
                                        Contact me
                                    </a>
                                </span>
                                <ul className="hero-socials">
                                <li>
                                    <a href="https://www.linkedin.com/" target="blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 17 17">
                                        <path id="Icon_awesome-linkedin-in" data-name="Icon awesome-linkedin-in"
                                        d="M3.805,17H.281V5.651H3.805ZM2.041,4.1a2.051,2.051,0,1,1,2.041-2.06A2.058,2.058,0,0,1,2.041,4.1ZM17,17H13.479V11.475c0-1.317-.027-3.005-1.832-3.005-1.832,0-2.113,1.431-2.113,2.91V17H6.013V5.651h3.38V7.2h.049a3.7,3.7,0,0,1,3.335-1.833c3.567,0,4.223,2.349,4.223,5.4V17Z"
                                        transform="translate(0 -0.001)" fill="#fff" />
                                    </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/TiaDev7474" target="blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.978"
                                        height="19.018" viewBox="0 0 17.978 19.018">
                                        <path id="Icon_feather-github" data-name="Icon feather-github"
                                        d="M8.659,16.034C4.617,17.247,4.617,14.013,3,13.609M14.319,18.46V15.331a2.725,2.725,0,0,0-.76-2.11c2.539-.283,5.207-1.245,5.207-5.659A4.4,4.4,0,0,0,17.553,4.53a4.1,4.1,0,0,0-.073-3.049s-.954-.283-3.161,1.2a10.818,10.818,0,0,0-5.659,0C6.452,1.2,5.5,1.481,5.5,1.481a4.1,4.1,0,0,0-.073,3.048A4.4,4.4,0,0,0,4.213,7.586c0,4.382,2.668,5.344,5.207,5.659a2.725,2.725,0,0,0-.76,2.086V18.46"
                                        transform="translate(-1.787 -0.442)" fill="none" stroke="#fff" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" />
                                    </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:nomenjanaharyriry@gmail.com" target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="22.25" height="17"
                                        viewBox="0 0 21.25 17">
                                        <path id="Icon_material-mail-outline" data-name="Icon material-mail-outline"
                                        d="M22.125,6h-17A2.122,2.122,0,0,0,3.011,8.125L3,20.875A2.131,2.131,0,0,0,5.125,23h17a2.131,2.131,0,0,0,2.125-2.125V8.125A2.131,2.131,0,0,0,22.125,6Zm0,14.875h-17V10.25l8.5,5.313,8.5-5.312Zm-8.5-7.437-8.5-5.312h17Z"
                                        transform="translate(-3 -6)" fill="#fff" />
                                    </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://web.facebook.com/" target="blank">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="10.105" height="17" viewBox="0 0 9.105 17">
                                        <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f"
                                        d="M10.118,9.563l.472-3.077H7.638v-2A1.538,1.538,0,0,1,9.372,2.827h1.342V.208A16.366,16.366,0,0,0,8.332,0C5.9,0,4.312,1.474,4.312,4.141V6.486h-2.7V9.563h2.7V17H7.638V9.563Z"
                                        transform="translate(-1.609)" fill="#fff" />
                                    </svg>
                                    </a>
                                </li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="hero-right">
                            <span>
                                <img src="https://res.cloudinary.com/dvsrhlm8p/image/upload/v1688743149/Riry_qkqobe.svg" alt=""  />
                            </span>
                        </div>
                </div>
            
            </header>
  )
}

export default Hero
