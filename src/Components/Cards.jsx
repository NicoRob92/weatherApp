import React from "react";
import Card from "./Card";

export default function Cards({cities,onClose}){
    if(cities){
        return(
            cities.map(e=> <Card
                name={e.name}
                key={e.id}
                max={e.max}
                min={e.min}
                img={e.img}
                onClose={(e) => onClose(e.id)}
                id={e.id}
                />)
        )
    }
    else{
        return(
        alert("Sin Ciudades")
        )}

}