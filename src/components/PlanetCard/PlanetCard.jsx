import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'


export default function PlanetCard({body}) {
if (body.isPlanet === true) {
  // console.log(body.moons)
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{body.englishName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Link href="{`/${body.englishName}`}">Details</Card.Link>
      </Card.Body>
    </Card>
    <Link to={`/${body.englishName}`} style={{display: 'inline-block'}}>
      <h2>{body.englishName}</h2></Link>
      <br></br>
    </>
  );}
}