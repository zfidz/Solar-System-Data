

export default function MoonCard({body}) {
if (body.bodyType === "Moon") {
  return (
    <>
      <h2>{body.englishName}</h2>
        {/* <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button> */}
    </>
  );}
}