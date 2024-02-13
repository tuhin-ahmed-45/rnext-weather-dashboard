import { FavouriteContext } from "../context"
import { useLocalStorage } from "../hooks"

export const FavouriteProvider = ({ children }) => {
    const [favourites, setFavourites] = useLocalStorage('favourites', [])

    function addToFavourite(latitude, longitude, location) {
        setFavourites(
            [...favourites,
            {
                latitude: latitude,
                longitude: longitude,
                location: location
            }
            ]
        )
    }
    function removeFromFavourite(location) {
        const restFavourite = favourites.filter(
            (fav) => fav.location !== location
        );
        setFavourites(restFavourite)
    }

    return (
        <FavouriteContext.Provider value={{ favourites, addToFavourite, removeFromFavourite }}>
            {children}
        </FavouriteContext.Provider>
    )
}
