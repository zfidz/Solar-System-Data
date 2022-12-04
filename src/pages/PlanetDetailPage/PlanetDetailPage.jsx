import { useParams } from "react-router-dom";

export default function PlanetsPage({bodies}) {
const planetName = useParams()
  return (
    <>
{bodies.filter(planet => planet.englighName === planetName.planetName).map((planet, index) => (
  <div key={index}>
    <h1>{planet.englishName}</h1>
  </div>
))}
    </>
  );
}