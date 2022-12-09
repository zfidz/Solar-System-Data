import { useState, useEffect } from "react";
import FavoritePlanetsCard from "../../components/FavoritePlanetsCard/FavouritePlanetsCard";
import sendRequest from "../../utilities/send-request";
import "./ProfilePage.css";
export default function ProfilePage({ user }) {
  const [newPlanetFavorite, setNewPlanetFavorite] = useState([]);

  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    async function getFavorites() {
      const response = await sendRequest(`/api/profiles/${user._id}`);
      setNewPlanetFavorite(response.favorites);
    }
    getFavorites();
    setPageLoaded(true);
  }, []);

  return (
    <>
      {pageLoaded ? (
        <div className="favplanetspage">
          <h1>Favorite Planets</h1>
          {newPlanetFavorite.map((favorites, i) => (
            <FavoritePlanetsCard
              key={i}
              user={user}
              id={favorites._id}
              setPlanetFavorite={setNewPlanetFavorite}
              planet={favorites.favoritedPlanet}
            />
          ))}
        </div>
      ) : (
        "loading"
      )}
    </>
  );
}
