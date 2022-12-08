import PlanetCard from '../../components/PlanetCard/PlanetCard'
import './PlanetsPage.css'


export default function PlanetsPage({bodies, user}) {
  const planetCards = bodies.map((body, i) => {
    i = body.id
return <PlanetCard key = {i} user={user} body={body}/>}
)
  return (
    <div className="planetCards">
      <h1>Planets</h1>
      {planetCards }
    </div>
  );
}