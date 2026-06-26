import { useState } from "react";
import React from "react";
import SongCard from "../components/SongCard";

import songs from "../data/songs";

const Browse = () => {

  const [search, setSearch] = useState("");

  const allSongs = [

    ...songs.happy,
    ...songs.sad,
    ...songs.chill,
    ...songs.love,
    ...songs.focus

  ];

  const filteredSongs = allSongs.filter((song) =>
    song.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div>

      <h1 className="page-title">
        🎧 Browse Songs
      </h1>

      <input
        type="text"
        placeholder="Search songs..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="search-box"
      />

      <div className="songs-container">

        {filteredSongs.map((song, index) => (

          <SongCard
            key={index}
            song={song}
          />

        ))}

      </div>

    </div>

  );
};

export default Browse;