import {Link} from "react-router-dom"

export default function MoonCard({body}) {
if (body.bodyType === "Moon") {
  return (
    <>
      <Link to={`/moons/${body.englishName}`} style={{display: 'inline-block'}}>
      <h2>{body.englishName}</h2></Link>
      <br></br>
        {/* <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button> */}
    </>
  );}
}