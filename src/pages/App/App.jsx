import { useState, useEffect } from 'react';
import { Routes, Route, json } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import PlanetsPage from '../PlanetsPage/PlanetsPage'
import MoonsPage from '../MoonsPage/MoonsPage'
import PlanetDetailPage from '../PlanetDetailPage/PlanetDetailPage'
import MoonDetailPage from "../MoonDetailPage/MoonDetailPage"
function App() {
  const [user, setUser] = useState(getUser());
    const [bodyState, setBodyState] = useState([]);
    useEffect(function () {
      async function getBodies() {
         await fetch("https://api.le-systeme-solaire.net/rest/bodies")
         .then(
          (res) => res.json()
        )
        .then((json) => {
          setBodyState(json.bodies)
        })
      }
      getBodies();
    },[]);

  return (
    <>
    <NavBar />
<Routes>
<Route path="/" element={<PlanetsPage bodies={bodyState} />}/>
<Route path="/moons" element={<MoonsPage bodies={bodyState} />}  />
<Route path="/moons/:moonName" element={<MoonDetailPage bodies={bodyState}/>} />
<Route path="/:planetName" element = {<PlanetDetailPage bodies={bodyState} /> } />
</Routes>
</>
  )
}

export default App;
