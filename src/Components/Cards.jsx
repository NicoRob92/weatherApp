import React from "react";
import Card from "./Card";

export default function Cards({cities,onClose}){
    if(cities){
        
        if(cities.length > 10){
            cities.shift()
        }
        return(
            cities.map(e=> <Card
                name={e.name}
                key={e.id}
                max={e.max}
                min={e.min}
                img={e.img}
                id={e.id}
                onClose={onClose}
<<<<<<< HEAD
               
                />)
        )
=======
                />
        ))
>>>>>>> 3d211c41766cab6d4cbdb3f0745c91589d2ad45b
    }
    else{
        return(
        alert("Sin Ciudades")
        )}

}