import React from "react";
import styled from 'styled-components';
import SearchBar from './SearchBar.jsx';
import { Link } from "react-router-dom";
import './fuente.css'


export default function NavBar({onSearch}){
    return(
        <Container>
            <Titulo><h1>The Weather App</h1> </Titulo>
            <Buttons>
            <Link to="/"><button> <span>‏‏‎‏‏‎‎ ‏‏‎‎‏‏‎‏‏‎‎ ‏‏‎‎Home‏‏‎‏‏‎‎ ‏‏‎‎‏‏‎‏‏‎‎ ‏‏‎‎</span></button></Link>
            <Link to="/about"><button> <span>About</span></button></Link>
            </Buttons>
            <SearchBar onSearch={onSearch}/>

        </Container>
    )
}


const Container = styled.div`
display: flex;
justify-content: space-around;
border-style:double;
backdrop-filter:blur(2px);
border-top:none;
border-left:none;
border-right:none;
`;
const Titulo=styled.div`
& h1{
    font-family: 'Courgette', cursive;
    font-size:2rem;
    color: #fff;
    text-shadow: 0 0 10px #fff,
                 0 0 20px #fff, 
                 0 0 40px #fff;
    transition:.5s;
    animation-duration: 3s;
    animation-name: slidein;
    animation-iteration-count: infinite;
    animation-timing-function: step-start   
} 
@keyframes slidein {
    0%{ text-shadow: 0 0 10px #000,0 0 5px #000,0 0 40px #000;}
    1%{ text-shadow: 0 0 10px #fff,0 0 5px #fff,0 0 40px #fff;}
    20%{ text-shadow: 0 0 10px #000,0 0 5px #000,0 0 40px #000;}
    21%{ text-shadow: 0 0 10px #fff,0 0 5px #fff,0 0 40px #fff;}
    30%{ text-shadow: 0 0 10px #000,0 0 5px #000,0 0 40px #000;}
    31%{ text-shadow: 0 0 10px #fff,0 0 5px #fff,0 0 40px #fff;}
    50%{ text-shadow: 0 0 10px #000,0 0 5px #000,0 0 40px #000;}
    51%{ text-shadow: 0 0 10px #fff,0 0 5px #fff,0 0 40px #fff;}
    90%{ text-shadow: 0 0 10px #000,0 0 5px #000,0 0 40px #000;}
    97%{ text-shadow: 0 0 10px #fff,0 0 5px #fff,0 0 40px #fff;}
    
}

`;


const Buttons= styled.div`
display: flex;
align-items: center;
flex-wrap: nowrap;
justify-content: space-around;
width: 30%;
margin-left:10%;
& button {
    color: #FFF;
    border-radius: 7%;      
    background: transparent;
    overflow: hidden;
    border:none;
    
  & span {
    display:flex;
    flex-direction:row;
    font-family: 'Arima Madurai', cursive;
    
    text-shadow: 0 0 100px #fff,
    0 0 10px #fff, 
    0 0 40px #fff;
    transition:.5s;
    font-size: 1rem;
    
    :hover {/*HoverEffect*/
        -webkit-transform: rotateX(360deg);
        -ms-transform: rotateX(360deg);
        transform: rotateX(360deg);
        transition: .5s
      }
    }
  
  
} 
`;




