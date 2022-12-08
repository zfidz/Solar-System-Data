import { useParams } from "react-router-dom";
import "./MoonDetailPage.css"
export default function MoonsPage({bodies}) {

const moonName = useParams()

  return (
    <>
      {bodies
        .filter((moon) => moon.englishName === moonName.moonName)
        .map((moon, index) => (
          <div key={index} className="moon-detail-page">
            <div className="moon-header">{moon.englishName}</div>
            <div className="moon-container">
              <div className="moon-left">
                <div className="moon-history">
                <div className="detail-page-header">History</div>
                <div className="moon-information">
                  Discover Date:{" "}
                  {moon.discoveryDate
                    ? moon.discoveryDate
                    : "Not Available"}
                    </div>
                <br></br>
                <div className="moon-information">
                  Discorvered By:{" "}
                  {moon.discoveredBy ? moon.discoveredBy : "Not Available"}
                </div>
                </div>
                <div className="moon-add-info">
                <div className="detail-page-header">Additional Information</div>
                </div>
              </div>
              <div className="moon-right">
                <div className="detail-page-header">Moon:</div>
                {moon.moons != null ? (
                  moon.moons.map((moon) => {
                    return (
                      <div className="moon-information">{moon.moon}</div>
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