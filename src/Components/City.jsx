import React from "react";
import './City.css'

export default function City({ city }){    

        /*  min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            weather:recurso.weather[0].description,
            termica:recurso.main.feels_like,
            humedad:recurso.main.humidity,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon */

    return (  
        
        <div className="conteinerg"> 
        <div className="nombre"><h1>{city.name}</h1></div>
        {/* ================= */}
        <div className="conteinercentral">
        
        <div className="Temp tem" >Temp: {city.temp} °C  </div>
        <div className="Temp tem">Feels Like: {city.termica} °C</div>
        <div className="Temp tem">Max: {city.max} °C</div>
        <div className="Temp tem">Min: {city.min} °C</div>
        
        {/* ================= */}
        <div className="Temp tem"> Clouds: {city.clouds} %</div>
        <div className="Temp tem">Wind: {city.wind} km/h</div>
        <div className="Temp tem">Weather: {city.weather}</div>
        <div className="Temp tem">Humidity: {city.humidity} %</div>
        </div>
        <div><img src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt="Img not found"></img></div>
        </div>

      
       
        
    )
}

