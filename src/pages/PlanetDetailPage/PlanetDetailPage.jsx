import { useParams } from "react-router-dom";
import "./PlanetDetailPage.css";

export default function PlanetsPage({ bodies }) {
  const planetName = useParams();

  return (
    <>
      {bodies
        .filter((planet) => planet.englishName === planetName.planetName)
        .map((planet, index) => (
          <div key={index} className="planet-detail-page">
            <div className="planet-header">{planet.englishName}</div>
            <div className="planet-container">
              <div className="planet-left">
                <div className="planet-history">
                <div className="detail-page-header">History</div>
                <div className="planet-information">
                  Discover Date:{" "}
                  {planet.discoveryDate
                    ? planet.discoveryDate
                    : "Not Available"}
                    </div>
                <br></br>
                <div className="planet-information">
                  Discorvered By:{" "}
                  {planet.discoveredBy ? planet.discoveredBy : "Not Available"}
                </div>
                </div>
                <div className="planet-add-info">
                <div className="detail-page-header">Additional Information</div>
                </div>
              </div>
              <div className="planet-right">
                <div className="detail-page-header">Moon:</div>
                {planet.moons != null ? (
                  planet.moons.map((moon) => {
                    return (
                      <div className="planet-information">{moon.moon}</div>
                    );
                  })
                ) : (
                  <div>"no satellites"</div>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
