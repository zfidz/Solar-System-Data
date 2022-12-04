

export default function PlanetCard({body}) {
if (body.isPlanet === true) {
  return (
    <>
      <p>{body.englishName}</p>
        {/* <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button> */}
    </>
  );}
}