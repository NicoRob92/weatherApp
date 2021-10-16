import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Conteiner=styled.div`
display:inline-block;

background:url("https://th.bing.com/th/id/R.36bd90ffb71005e767cc2385895e39c6?rik=WRwlzV05F3CCwg&riu=http%3a%2f%2fcache.desktopnexus.com%2fwallpapers%2f1648%2f1648504-2880x1800-CALM.jpg&ehk=j3Slh0FT1pwDAPyGyAWQogWLZkIqKf99DR1nUKb1vgA%3d&risl=&pid=ImgRaw&r=0") center;
background-size:100% 100%;
margin:15px;
width:200px;
height:300px;
padding:10px;
border: 2px groove #96ec85;
border-radius:5px;

&: hover{
    padding:20px;
    transition:.8s;
}

&: not (:hover){
    opacity:0.3;
    transition:.8s;
}


& button{
    position: relative;
    left:180px;
    top:-10px;
    background:black;
    border:none;
    color:white;
    border-radius:2px;
    opacity:.3;
    &: hover{
        background-color:#043121;
        transition:.4s;
    
    }
}
    
& h1{
    display:block;
    width:250px;
    position:relative;
    text-shadow:black 1.4px 2px;
    font-family: fantasy,'oldtown';
    font-variant:small-caps;
    font-style:oblique;
    font-size:35px;
    color:#0b9bb9;
    padding:6px;
    top:-30px;
    left:15px;
    
}

& h4{
    position:relative;
    text-shadow:black 1.4px 2px;
    font-family: fantasy,'oldtown';
    font-size:25px;
    color:#cae3da;
    padding:6px;
    top:-60px;
    left:25px;
}
& h5{
    position:relative;
    text-shadow:black 1.4px 2px;
    font-family: fantasy,'oldtown';
    font-size:25px;
    color:#cae3da;
    padding:6px;
    top:-100px;
    left:25px;

}

& img{
    width:150px;
    position:relative;
    top:-140px;
    left:20px;
}

`;


export default function Card(props){

    return (
        <Conteiner>
        <button onClick={()=> props.onClose(props.id)}>X</button>
        <Link to={`/${props.id}`}style={{ textDecoration: 'none' }}><h1>{props.name}</h1></Link>
        <h4>Max: {props.max} °C</h4>
        <h5>Min: {props.min} °C</h5>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Img not found"></img>
        </Conteiner>
    )
}