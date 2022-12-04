

export default function MoonCard({body}) {
if (body.bodyType === "Moon") {
  return (
    <>
      <p>{body.englishName}</p>
        {/* <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button> */}
    </>
  );}
}