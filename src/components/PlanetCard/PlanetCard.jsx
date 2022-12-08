import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './PlanetCard.css'


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

  
  if (body.isPlanet === true) {
    return (
      <div className = "pCard">
        <Card  style={{ width: "18rem" }}>
          <Card.Img variant="top" src={body.imageUrl} />
          <Card.Body>

            <Card.Title>{body.englishName}</Card.Title>
            <Card.Subtitle className="mb-2">
              <ul>
                <li>{body.meanRadius} km (Radius)</li>
                <li>{body.avgTemp} K </li>
              </ul>

            </Card.Subtitle>
            <Link
              to={`/${body.englishName}`}
              style={{ display: "inline-block" }}
            >
              Details
            </Link>

            <Button
              variant="primary"
              onClick={handleClick}
              style={{ display: "inline-block" }}
            >
              Favorite
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
