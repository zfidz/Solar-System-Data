import {Link} from "react-router-dom"

export default function PlanetCard({body}) {
if (body.isPlanet === true) {
  // console.log(body.moons)
  return (
    <>
    <Link to={`/${body.englishName}`} style={{display: 'inline-block'}}>
      <h2>{body.englishName}</h2></Link>
      <br></br>
    </>
  );}
}