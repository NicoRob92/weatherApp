import React from "react";
import styled from 'styled-components';
import SearchBar from './SearchBar.jsx';
import { Link } from "react-router-dom";

const Container = styled.div`
background: linear-gradient(
    to left, 
    hsl(148 60% 40%), 
    hsl(54 50% 80%)
  );
border-radius:4px
display:inline;
& h1{
    display:block;
    width:250px;
    position:relative;
    text-shadow:#264204 1.4px 2px;
    font-family: fantasy,'oldtown';
    font-variant:small-caps;
    font-style:oblique;
    font-size:35px;
    color:#45977a;
}
height:80px
`;

const Home=styled.button`
position:absolute;
left:30px;
top:75px;
background:black;
border:none;
color:white;
border-radius:2px;
&: hover{
    background-color:#043121;
    transition:.4s;
}

`;
const About=styled.button`
position:absolute;
left:90px;
top:75px;
background:black;
border:none;
border-radius:2px;
color:white;
&: hover{
    background-color:#043121;
    transition:.4s;
}

`;







export default function NavBar({onSearch}){
    return(
        <Container>
            <h1>The Weather App</h1>
            <Link to="/"><Home> Home </Home></Link>
            <Link to="/about"><About>About</About></Link>
            <SearchBar onSearch={onSearch}/>

        </Container>
    )
}