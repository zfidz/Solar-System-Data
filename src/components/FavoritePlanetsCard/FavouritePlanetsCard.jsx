

export default function FavoritePlanetsCard ({planet}) {

    const handleClick = async () => {
        let deletePlanet = {
          
        };
        const res = await fetch(`/api/profiles/${user._id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
      };

    console.log(planet)
return(
    <>
    {planet} <button>delete</button>
    </>
)
}