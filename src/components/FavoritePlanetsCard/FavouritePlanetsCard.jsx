import './FavoritePlanetsCard.css'
import { Link } from 'react-router-dom'



export default function FavoritePlanetsCard ({planet, user, setPlanetFavorite, id}) {

    const handleClick = async () => {
        const response = await fetch(`/api/profiles/${user._id}/${id}`, {
          method: 'DELETE'
        }).then(res => res.json())
        console.log(response)
        setPlanetFavorite(response.favorites)
      }


return(
    <div className='favoriteCard'>
      <span><div className="favorite-title-big">{planet}</div></span>
<Link to={`/${planet}`}>Details</Link>
    <button onClick={handleClick}>delete</button>

    </div>
)
}