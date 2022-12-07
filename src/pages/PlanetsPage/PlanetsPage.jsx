import PlanetCard from '../../components/PlanetCard/PlanetCard'



export default function PlanetsPage({bodies, user}) {
  const planetCards = bodies.map((body, i) => {
    i = body.id
return <PlanetCard key = {i} user={user} body={body}/>}
)
  return (
    <>
    <h1>Planets</h1>
  {planetCards }
    </>
  );
}