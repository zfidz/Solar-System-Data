

export default function FavoritePlanetsCard ({planet, user, setPlanetFavorite, id}) {

    const handleClick = async () => {

        const response = await fetch(`/api/profiles/${user._id}/${id}`, {
          method: 'DELETE'
        }).then(res => res.json())
        console.log(response)
        setPlanetFavorite(response.favorites)
      }


return(
    <>
    {planet} <button onClick={handleClick}>delete</button>
    </>
)
}