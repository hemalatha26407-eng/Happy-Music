// import { useState } from "react";

// import songs from "../data/songs";
// import SongCard from "../components/SongCard";

// const playlistData = [

//   {
//     title: "🎧 Anirudh Hits",
//     key: "happy"
//   },

//   {
//     title: "😢 Sad Vibes",
//     key: "sad"
//   },
   
//   {
//   title: "❤️ Love Songs",
//   key: "love"
//   }, 

//   {
//     title: "🌴 Chill Songs",
//     key: "chill"
//   },

//   {
//     title: "🔥 Focus Beats",
//     key: "focus"
//   }

// ];

// const Playlists = ({
//   setSelectedSong
// }) => {

//   const [
//     selectedPlaylist,
//     setSelectedPlaylist
//   ] = useState(null);

//   // CUSTOM PLAYLISTS
//   const customPlaylists =
//     Object.keys(localStorage).filter(
//       (key) =>

//         key !== "user" &&
//         key !== "favorites" &&
//         key !== "darkMode"
//     );

//   return (

//     <div className="playlist-page">

//       <h1 className="page-title">
//         🎵 Playlists
//       </h1>

//       {/* DEFAULT PLAYLISTS */}
//       <div className="playlist-grid">

//         {playlistData.map(
//           (playlist, index) => (

//             <div
//               key={index}
//               className="playlist-card"
//               onClick={() =>
//                 setSelectedPlaylist(
//                   playlist.key
//                 )
//               }
//             >

//               <h2>
//                 {playlist.title}
//               </h2>

//             </div>

//           )
//         )}

//       </div>

//       {/* DEFAULT PLAYLIST SONGS */}
//       {selectedPlaylist && (

//         <div>

//           <h2 className="playlist-title">

//             {
//               playlistData.find(
//                 (p) =>
//                   p.key ===
//                   selectedPlaylist
//               ).title
//             }

//           </h2>

//           <div className="songs-container">

//             {songs[
//               selectedPlaylist
//             ].map((song, index) => (

//               <SongCard
//                 key={index}
//                 song={song}
//                 setSelectedSong={
//                   setSelectedSong
//                 }
//               />

//             ))}

//           </div>

//         </div>

//       )}

//       {/* CUSTOM PLAYLISTS */}

//       <h1
//         className="page-title"
//         style={{
//           marginTop:"50px"
//         }}
//       >
//         ⭐ My Custom Playlists
//       </h1>

//       {customPlaylists.map(
//         (playlist, index) => {

//           const playlistSongs =
//             JSON.parse(
//               localStorage.getItem(
//                 playlist
//               )
//             ) || [];

//           return (

//             <div key={index}>

//               <h2
//                 className="playlist-title"
//               >
//                 {playlist}
//               </h2>

//               <button
//                 className="delete-btn"
//                 onClick={() => {

//                   localStorage.removeItem(
//                     playlist
//                   );

//                   window.location.reload();

//                 }}
//               >
//                 ❌ Delete Playlist
//               </button>

//               <div className="songs-container">

//                 {playlistSongs.map(
//                   (song, i) => (

//                     <SongCard
//                       key={i}
//                       song={song}
//                       setSelectedSong={
//                         setSelectedSong
//                       }
//                     />

//                   )
//                 )}

//               </div>

//             </div>

//           );

//         }
//       )}

//     </div>

//   );

// };

// export default Playlists;

import { useState } from "react";

import songs from "../data/songs";
import SongCard from "../components/SongCard";

const playlistData = [

  {
    title: "🎧 Anirudh Hits",
    key: "happy"
  },

  {
    title: "😢 Sad Vibes",
    key: "sad"
  },

  {
    title: "❤️ Love Songs",
    key: "love"
  },

  {
    title: "🌴 Chill Songs",
    key: "chill"
  },

  {
    title: "🔥 Focus Beats",
    key: "focus"
  }

];

const Playlists = ({
  setSelectedSong
}) => {

  const [
    selectedPlaylist,
    setSelectedPlaylist
  ] = useState(null);

  // CUSTOM PLAYLISTS ONLY
  const customPlaylists =
    Object.keys(localStorage).filter(
      (key) =>

        key !== "user" &&
        key !== "favorites" &&
        key !== "darkMode" &&

        // REMOVE DEFAULT PLAYLISTS
        key !== "happy" &&
        key !== "sad" &&
        key !== "love" &&
        key !== "chill" &&
        key !== "focus"
    );

  return (

    <div className="playlist-page">

      <h1 className="page-title">
        🎵 Playlists
      </h1>

      {/* DEFAULT PLAYLIST CARDS */}
      <div className="playlist-grid">

        {playlistData.map(
          (playlist, index) => (

            <div
              key={index}
              className="playlist-card"

              onClick={() =>
                setSelectedPlaylist(
                  playlist.key
                )
              }
            >

              <h2>
                {playlist.title}
              </h2>

            </div>

          )
        )}

      </div>

      {/* DEFAULT PLAYLIST SONGS */}
      {selectedPlaylist && (

        <div>

          <h2 className="playlist-title">

            {
              playlistData.find(
                (p) =>
                  p.key ===
                  selectedPlaylist
              )?.title
            }

          </h2>

          <div className="songs-container">

            {songs[selectedPlaylist]?.map(
              (song, index) => (

                <SongCard
                  key={index}
                  song={song}
                  setSelectedSong={
                    setSelectedSong
                  }
                />

              )
            )}

          </div>

        </div>

      )}

      {/* CUSTOM PLAYLISTS */}

      <h1
        className="page-title"
        style={{
          marginTop: "50px"
        }}
      >
        ⭐ My Custom Playlists
      </h1>

      {customPlaylists.length === 0 && (

        <p
          style={{
            color: "white",
            marginTop: "20px"
          }}
        >
          No Custom Playlist Yet
        </p>

      )}

      {customPlaylists.map(
        (playlist, index) => {

          let playlistSongs = [];

          try {

            playlistSongs =
              JSON.parse(
                localStorage.getItem(
                  playlist
                )
              ) || [];

          }

          catch {

            playlistSongs = [];

          }

          return (

            <div key={index}>

              <h2
                className="playlist-title"
              >
                {playlist}
              </h2>

              <button
                className="delete-btn"

                onClick={() => {

                  localStorage.removeItem(
                    playlist
                  );

                  window.location.reload();

                }}
              >
                ❌ Delete Playlist
              </button>

              <div className="songs-container">

                {playlistSongs.map(
                  (song, i) => (

                    <SongCard
                      key={i}
                      song={song}
                      setSelectedSong={
                        setSelectedSong
                      }
                    />

                  )
                )}

              </div>

            </div>

          );

        }
      )}

    </div>

  );

};

export default Playlists;
