import SongCard from "../components/SongCard";

const Recent = ({
  recentSongs,
  setSelectedSong
}) => {

  return (

    <div className="recent-page">

      <h1 className="page-title">
        🕒 Recently Played
      </h1>

      <div className="songs-container">

        {recentSongs.length > 0 ? (

          recentSongs.map((song, index) => (

            <SongCard
              key={index}
              song={song}
              setSelectedSong={
                setSelectedSong
              }
            />

          ))

        ) : (

          <h2>
            No recent songs 😢
          </h2>

        )}

      </div>

    </div>

  );
};

export default Recent;