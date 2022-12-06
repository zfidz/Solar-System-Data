import MoonCard from '../../components/MoonCard/MoonCard'


export default function MoonsPage({bodies}) {
  const moonCards = bodies.map((body, i) => {
    return <MoonCard key= {i} body={body}/>}
    )
      return (
        <>
        <h1>Moons</h1>
        <div className="d-flex flex-wrap justify-content-center">
      {moonCards}
        </div>
        </>
  );
}