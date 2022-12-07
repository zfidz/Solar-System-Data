import { useState, useEffect } from 'react';
import sendRequest from '../../utilities/send-request';


export default function ProfilePage({user}) {
    const [newFavorites, setNewFavorites] = useState([])

    useEffect (function () {
        async function getFavorites() {
          const response = await sendRequest(`/${user._id}`)
              console.log(response.favorites)
              setNewFavorites(response.favorites)
            }
        getFavorites()
          }, [])


return (
<>
<h1>{user.name}</h1>
</>
)


}