import React, {useState} from "react";
import styled from "styled-components";

const Conteiner=styled.div`
display:block;
position:absolute;
left:1040px;
top:40px;
width:270px;
height:24px;
border-radius:4px;
background-color:#2fa87d;
padding:10px 10px ;

`;

const Input=styled.input`
margin-right:6px;
border:none;
`;

const Button=styled.button`
background-color:black;
border:none;
color: white;
border-radius:2px;

&: hover{
    background-color:#043121;
    transition:.4s;
}
`;

export default function SearchBar({onSearch}){
    const [city,setcity]=useState('')
    return(
        <Conteiner>
            <form onSubmit={(e) =>{
            e.preventDefault();
            onSearch(city);
            setcity('');
            }}>
            <Input type="text" name="searchbar" placeholder="Ingrese Ciudad" value={city} onChange={(e)=> setcity(e.target.value)}></Input>
            <Button type="submit">Buscar</Button></form>
        </Conteiner>
    )
}