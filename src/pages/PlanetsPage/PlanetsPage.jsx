import PlanetCard from '../../components/PlanetCard/PlanetCard'
import './PlanetsPage.css'


export default function PlanetsPage({bodies, user}) {
  const planetCards = bodies.map((body, i) => {
    i = body.id
return <PlanetCard key = {i} user={user} body={body}/>}
)
  return (
    <div className='planetPage'>
  <h1>Planets</h1>
    <div className="planetCards" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {planetCards }
    </div>
    
</div >
  );
}