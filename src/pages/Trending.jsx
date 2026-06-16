// const Trending = () => {
//   return (
//     <div>
//       <h1>🔥 Trending Songs</h1>
//     </div>
//   );
// };

// export default Trending;
import SongCard from "../components/SongCard";
import songs from "../data/songs";

const Trending = () => {

  const trendingSongs = [

    ...songs.happy,
    ...songs.chill,
    ...songs.love

  ];

  return (

    <div>

      <h1 className="page-title">
        🔥 Trending Songs
      </h1>

      <div className="songs-container">

        {trendingSongs.map((song, index) => (

          <SongCard
            key={index}
            song={song}
          />

        ))}

      </div>

    </div>

  );

};

export default Trending;