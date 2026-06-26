import { Link } from "react-router-dom";
import React from "react";
const Sidebar = () => {
  return (

    <div className="sidebar">

      <h2 className="logo">
        🎵 Beats
      </h2>

      <ul>

        <li>
          <Link to="/">🏠 Home</Link>
        </li>

        <li>
          <Link to="/trending">🔥 Trending</Link>
        </li>

        <li>
          <Link to="/favorites">❤️ Favorites</Link>
        </li>

        <li>
          <Link to="/browse">🎧 Browse</Link>
        </li>

        <li>
          <Link to="/playlists">📂 Playlists</Link>
        </li>

        <li>
          <Link to="/profile">👤 Profile</Link>
        </li>

        <li>
  <Link to="/recent">
    🕒 Recent
  </Link>
</li>

<li>
  <Link to="/create">
    ➕ Create Playlist
  </Link>
</li>

      </ul>

    </div>

  );
};

export default Sidebar;