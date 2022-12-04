import PlanetCard from '../../components/PlanetCard/PlanetCard'



export default function PlanetsPage({bodies}) {
  const planetCards = bodies.map((body, i) => {
    i = body.id
return <PlanetCard key = {i} body={body}/>}
)
  return (
    <>
    <h1>Planets</h1>
  {planetCards }
    </>
  );
}