import { Link } from "react-router-dom";
import "./PlanetCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function PlanetCard({ body, user }) {
  const handleClick = async () => {
    let newFavoritePlanet = {
      favoritedPlanet: body.englishName,
    };
    const res = await fetch(`/api/profiles/${user._id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFavoritePlanet),
    });
  };

  function countMoons(moons) {
    return moons ? moons.length : 0;
  }
  const numMoons = countMoons(body.moons);

  if (body.isPlanet === true) {
    return (
      <div className="pCard">

          <Card.Body className="card-body">
            <div className="card-title-big">{body.englishName}</div>
            <div className="card-info">
              <br></br>
              <ul>
                <li>Radius: {body.meanRadius} km</li>
                <li>Average Temp: {body.avgTemp - 273} C </li>
                <li>Number of Moons: {numMoons}</li>
              </ul>
                <br></br>
            </div>
            <Button className="button" style={{ fontSize: 20 }} variant="primary" href={`/${body.englishName}`}>Details</Button>
          { user ?
            <>        
            <Button className="button" style={{ fontSize: 20 }} variant="warning" onClick={handleClick}>
              Favorite
            </Button>
          </>          
              :
          <>
          </>
            }
          </Card.Body>
      </div>
    );
  }
}