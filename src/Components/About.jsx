import React from "react";
import './about.css'
import img from '../imagenes/linkedin.png'
export default function About(){
    return (
        <div class= "conteinerg">
            <h1 class= "title">About Me</h1>
            <div class="central">
            <h3 class="parrafo">Hey there! My name is Nicolas, im from Argentina.<br/>
                   
            Im a Henry's student, this SPA was one of the homeworks that we had to do on this bootcamp
            I feel so proud about this app</h3>
            <a  href="https://www.linkedin.com/in/nicorobledo/"><img class= "linkedin" src={img} alt="not Found"/></a>
            </div>
        </div>
    )
}