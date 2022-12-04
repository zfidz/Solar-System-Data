import MoonCard from '../../components/MoonCard/MoonCard'

export default function MoonsPage({bodies}) {
  const moonCards = bodies.map((body) => {
    return <MoonCard body={body}/>}
    )
      return (
        <>
        <h1>Moons</h1>
      {moonCards}
        </>
  );
}