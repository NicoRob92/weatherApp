import React,{useState} from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter , Route} from 'react-router-dom';
import About from './Components/About';
import Cards from './Components/Cards.jsx';
import styled from 'styled-components';

const Fondo=styled.div`
display:inline-block;
width:100%;
height:1000px;
background:url("https://th.bing.com/th/id/R.5207680e1eafd7233ab094b5f910e6af?rik=KZhkKFGKm4lhhQ&riu=http%3a%2f%2fbestanimations.com%2fNature%2fWater%2frain%2frain-nature-animated-gif-21.gif&ehk=lBF1ql92mhoIINxp3h%2b18XZodQzsNC5qwcJwiXoS0Jg%3d&risl=&pid=ImgRaw&r=0");
background-size:100% 100%;

`;
 
function App() {
  const [Cities, setCities] = useState([])
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {     
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=108c56e2f301971668b68dbc97ed9581&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  return (
    <BrowserRouter>
    
    <Route exact path="/">
    <Fondo className="App">
      <NavBar onSearch={onSearch}/>
    <Cards cities={Cities} onClose={onClose}/>
    </Fondo>
    </Route>
    <Route path="/about">
      <Fondo>
    <NavBar onSearch={onSearch}/>
      <About/>
      </Fondo>
    </Route>
    </BrowserRouter>
  );
}
  

export default App;
