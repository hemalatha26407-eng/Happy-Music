import { useEffect, useState } from "react";

import SongCard from "../components/SongCard";

const Favorites = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    const savedSongs =
      JSON.parse(
        localStorage.getItem("favorites")
      ) || [];

    setFavorites(savedSongs);

  }, []);

  return (

    <div>

      <h1 className="page-title">
        ❤️ Favorite Songs
      </h1>

      <div className="songs-container">

        {favorites.length > 0 ? (

          favorites.map((song, index) => (

            <SongCard
              key={index}
              song={song}
            />

          ))

        ) : (

          <h2>
            No favorite songs yet 😢
          </h2>

        )}

      </div>

    </div>

  );
};

export default Favorites;