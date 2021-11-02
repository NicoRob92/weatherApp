import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card(props){

    return (
        <Conteiner>
<<<<<<< HEAD
        <Btn>
        <button onClick={(e) => props.onClose(props.id)}>X</button>
        </Btn>
        <City>
=======
        <button onClick={()=> props.onClose(props.id)}>X</button>
>>>>>>> 3d211c41766cab6d4cbdb3f0745c91589d2ad45b
        <Link to={`/${props.id}`}style={{ textDecoration: 'none' }}><h1>{props.name}</h1></Link>
        <span></span>    
        </City>
        <Temp>
        <h4>Max: {props.max} °C</h4>
        <h4>Min: {props.min} °C</h4>
        </Temp>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Img not found"></img>
        </Conteiner>
    )
}

const Conteiner=styled.div`
display: flex;
flex-direction:column;
flex-wrap: nowrap;
align-content: center;
justify-content: space-around;
align-items:center;
border: double grey;
border-radius:10px;
width: 15%;
background-color: rgb(0,0,0); 
background-color: rgba(0,0,0, 0.4); 

`;

const Btn = styled.div`{
    align-self:flex-end;
    margin:3%;
    opacity:50%;

    & button {
        background-color: rgb(0,0,0);   
        background-color: rgba(0,0,0, 0.4); 
        border-radius: 50px;
        border:none;
        color:white;
        background:#f72924;
        font-family: 'Inconsolata', monospace;
    }
    :hover {
    opacity:100%;
    } 
}`;

const City = styled.div`
    display:flex;    
    align-items:center;
    justify-content:center;        
    width:100%;
    & h1 {
        font-family: 'Inconsolata', monospace;
        color: #fff;
        text-shadow: 0 0 10px #fff,
                     0 0 5px #fff, 
                     0 0 40px #fff;
           
        :hover{
            text-decoration:underline;
            
        }       
}`;

const Temp= styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
    & h4 {
        font-family: 'Inconsolata', monospace;
        color: #fff;
        text-shadow: 0 0 10px #fff,
                     0 0 5px #fff, 
                     0 0 40px #fff;
        transition:.5s;   
       

 }
`;