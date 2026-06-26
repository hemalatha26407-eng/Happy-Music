// const SongCard = ({
//   song,
//   setSelectedSong
// }) => {

//   return (

//     <div className="card">

//       <img
//         src={song.image}
//         alt={song.title}
//       />

//       <h2>{song.title}</h2>

//       <button
//         className="play-btn"
//         onClick={() =>
//           setSelectedSong(song)
//         }
//       >
//         ▶ Play
//       </button>
// <button
//   className="playlist-btn"
//   onClick={() => {

//     const playlists =
//       JSON.parse(
//         localStorage.getItem(
//           "customPlaylists"
//         )
//       ) || [];

//     const selected =
//       prompt(
//         `Choose playlist:\n${playlists.join("\n")}`
//       );

//     if(selected){

//       const existingSongs =
//         JSON.parse(
//           localStorage.getItem(selected)
//         ) || [];

//       localStorage.setItem(

//         selected,

//         JSON.stringify([
//           ...existingSongs,
//           song
//         ])

//       );

//       alert(
//         "Song added 😎"
//       );
//     }

//   }}
// >

//   ➕ Add Playlist

// </button>
//     </div>

//   );
// };

// export default SongCard;

// const SongCard = ({
//   song,
//   setSelectedSong,
//   favorites,
//   toggleFavorite
// }) => {

//   return (

//     <div className="card">

//       <img
//         src={song.image}
//         alt={song.title}
//       />

//       <h2>{song.title}</h2>

//       <button
//         className="play-btn"
//         onClick={() =>
//           setSelectedSong(song)
//         }
//       >
//         ▶ Play
//       </button>

//       <button
//         className="heart-btn"
//         onClick={() =>
//           toggleFavorite(song)
//         }
//       >

//         {favorites.find(
//           (f) =>
//             f.title === song.title
//         )
//           ? "❤️"
//           : "🤍"}

//       </button>

//     </div>

//   );

// };

// export default SongCard;
import React from "react";
const SongCard = ({
  song,
  setSelectedSong
}) => {

  return (

    <div className="card">

      <img
        src={song.image}
        alt={song.title}
      />

      <h2>{song.title}</h2>

      <button
        className="play-btn"
        onClick={() =>
          setSelectedSong(song)
        }
      >
        ▶ Play
      </button>

      <button
        className="playlist-btn"
        onClick={() => {

          const playlists =
            JSON.parse(
              localStorage.getItem(
                "customPlaylists"
              )
            ) || [];

          const selected =
            prompt(
              `Choose playlist:\n${playlists.join("\n")}`
            );

          if (selected) {

            const existingSongs =
              JSON.parse(
                localStorage.getItem(selected)
              ) || [];

            localStorage.setItem(

              selected,

              JSON.stringify([
                ...existingSongs,
                song
              ])

            );

            alert("Song added 😎");

          }

        }}
      >
        ➕ Add Playlist
      </button>

    </div>

  );
};

export default SongCard;