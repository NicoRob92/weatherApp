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
    <Fondo>{/* //BACKGROUND APP */}
      <NavBar onSearch={onSearch}/>
<<<<<<< HEAD
      <Card>{/* //BACKGROUND Cards */}
    <Cards cities={Cities} onClose={onClose}/>
      </Card>
=======
    <Cards cities={Cities} onClose={onClose}/>
>>>>>>> 3d211c41766cab6d4cbdb3f0745c91589d2ad45b
    </Fondo>
    </Route>
    <Route path="/about">
      <Fondo>
    <NavBar onSearch={onSearch}/>
      <About/>
      </Fondo>
    </Route>
    {/* <Route path= "/City/:id">

    </Route>
      <City/> */}
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
height:100vh;
`;