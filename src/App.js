import React,{useState} from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter , Route} from 'react-router-dom';
import About from './Components/About';
import Cards from './Components/Cards.jsx';
import styled from 'styled-components';
import City from './Components/City';

 
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
            weather: recurso.weather[0].description,
            termica: recurso.main.feels_like,
            humidity: recurso.main.humidity,
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

  function onFilter(ciudadId) {
    let ciudad = Cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <BrowserRouter>
    <Fondo>
    {/* ================= */}
    <Route exact path="/">   
      <NavBar onSearch={onSearch}/>
      <Card>
      <Cards cities={Cities} onClose={onClose}/>
      </Card>
    </Route> 
    {/* ================= */}
    <Route path="/about">
    <NavBar onSearch={onSearch}/>
    <Ciudad>
    <About/>
    </Ciudad>
    </Route>
    {/* ================= */}
    <Route path= "/City/:id" >
    <NavBar onSearch={onSearch}/>
    <Ciudad>
    <Route render={({match}) => (<City city={onFilter(match.params.id)}/>)}/>
    </Ciudad>
    </Route>
    
    </Fondo>
    </BrowserRouter>
  );
}
  

export default App;


const Fondo=styled.div`
display:flex;
flex-direction:column;
width:100vw;
height:100vh;
background:url('https://th.bing.com/th/id/R.e1139e26555d9325b5df67c5efa72912?rik=b9s%2bUh5aST9%2fTw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f9%2f1%2fe%2f168436.jpg&ehk=8B7XoAxEElKs6vly5bZsGVBS6IOIMPPs2ajLohzvt3s%3d&risl=&pid=ImgRaw&r=0');
background-size:cover;
`;

const Card = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-content: space-around;
justify-content: space-around;
height:99vh;
`;
const Ciudad = styled.div`
display: flex;
align-items: center;
justify-content: center;
height:99vh;

`;
