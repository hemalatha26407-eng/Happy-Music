import { useState, useEffect } from "react";
import React from "react";
const CreatePlaylist = () => {

  const [playlistName,
    setPlaylistName] =
      useState("");

  const [playlists,
    setPlaylists] =
      useState(
        JSON.parse(
          localStorage.getItem(
            "customPlaylists"
          )
        ) || []
      );

  // SAVE
  useEffect(() => {

    localStorage.setItem(
      "customPlaylists",
      JSON.stringify(playlists)
    );

  }, [playlists]);

  // ADD PLAYLIST
  const addPlaylist = () => {

    if(
      playlistName.trim() !== ""
    ){

      setPlaylists([
        ...playlists,
        playlistName
      ]);

      setPlaylistName("");
    }
  };

  return (

    <div className="create-page">

      <h1>
        ➕ Create Playlist
      </h1>

      <div className="create-box">

        <input
          type="text"
          placeholder="Enter playlist name"
          value={playlistName}
          onChange={(e) =>
            setPlaylistName(
              e.target.value
            )
          }
        />

        <button
          onClick={addPlaylist}
        >
          Create
        </button>

      </div>

      <div className="playlist-grid">

        {playlists.map(
  (playlist, index) => (

    <div
      key={index}
      className="playlist-card"
    >

      <h2>
        🎵 {playlist}
      </h2>

      <button
        className="delete-btn"
        onClick={() => {

          const updated =
            playlists.filter(
              (_, i) => i !== index
            );

          setPlaylists(updated);

        }}
      >

        ❌ Delete

      </button>

    </div>

  )
)}

      </div>

    </div>

  );
};

export default CreatePlaylist;