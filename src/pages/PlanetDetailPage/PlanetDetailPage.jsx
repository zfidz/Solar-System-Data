import { useParams } from "react-router-dom";

export default function PlanetsPage({ bodies }) {
  const planetName = useParams();

  return (
    <>
      {bodies
        .filter((planet) => planet.englishName === planetName.planetName)
        .map((planet, index) => (
          <div key={index}>
            <h1>{planet.englishName}</h1>
            <h2>{planet.discoveryDate}</h2>
            <h2>{planet.discoveredBy}</h2>
            {planet.moons != null
              ? planet.moons.map((moon) => {
                  return (
                    <div>
                      <h2>{moon.moon}</h2>
                    </div>
                  );
                })
              : "no satellites"}
          </div>
        ))}
    </>
  );
}
