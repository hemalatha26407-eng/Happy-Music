// import SongCard from "../components/Songcard";
// import songs from "../data/songs";

// const Home = ({ setSelectedSong }) => {

//   const allSongs = [
//     ...songs.happy,
//     ...songs.sad,
//     ...songs.chill,
//     ...songs.focus
//   ];

//   return (
//     <div>

//       <h1 className="page-title">
//         🎵 Recommended Songs
//       </h1>

//       <div className="songs-container">
//         {allSongs.map((song, index) => (
//           <SongCard
//   key={index}
//   song={song}
//   setSelectedSong={setSelectedSong}
//   favorites={favorites}
//   toggleFavorite={toggleFavorite}
// />
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Home;
import SongCard from "../components/SongCard";

const Home = ({
  songs,
  setSelectedSong,
  favorites,
  toggleFavorite
}) => {

  return (

    <div>

      <h1 className="page-title">
        🎵 Recommended Songs
      </h1>

      <div className="songs-container">

        {songs.map((song, index) => (

          <div key={index} className="song-wrapper">

            <SongCard
              song={song}
              setSelectedSong={setSelectedSong}
            />

            <button
              className="heart-btn"
              onClick={() => toggleFavorite(song)}
            >
              {
                favorites.find(
                  (f) => f.title === song.title
                )
                  ? "❤️"
                  : "🤍"
              }
            </button>

          </div>

        ))}

      </div>

    </div>

  );
};

export default Home;