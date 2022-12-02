import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
    const [bodyState, setBodyState] = useState([]);
    useEffect(function () {
      async function getBodies() {
        const allBodies = await fetch("https://api.le-systeme-solaire.net/rest/bodies").then(
          (res) => res.json()
        );
        setBodyState(allBodies);
      }
      getBodies();
    },[]);


  return (
<h1>test</h1>
  )
}

export default App;
