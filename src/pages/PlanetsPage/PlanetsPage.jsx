import PlanetCard from '../../components/PlanetCard/PlanetCard'



export default function PlanetsPage({bodies}) {
  const planetCards = bodies.map((body) => {
return <PlanetCard body={body}/>}
)
  return (
    <>
    <h1>Planets</h1>
  {planetCards}
    </>
  );
}