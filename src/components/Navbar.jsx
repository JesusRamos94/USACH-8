import React from 'react'
import img from "../img/img.jpg"
// const image = require("./landing-page/public/img/img.jpg")



 const Navbar =() => {
  return (
    <>
        <header id="nav">
        <div class="logo">
            <i class="fa-solid fa-laptop-code fa-2x"></i>
        </div>

        <nav>
            <ul class="nav__links">
                <li><a href="#header">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="container-img" id='header'>
        <div id="image">
            <img src={img} alt=""/>
        </div>

        <div class="img-text">
            <h1>PLANNING</h1>
            <h5>this work was done with flexbox</h5>
        </div>
    </section>
    </>
  )
}

export default Navbar
