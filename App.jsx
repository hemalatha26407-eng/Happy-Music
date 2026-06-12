import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";

import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Favorites from "./pages/Favorites";
import Browse from "./pages/Browse";
import Playlists from "./pages/Playlists";
import Profile from "./pages/Profile";
import Recent from "./pages/Recent";
import CreatePlaylist from "./pages/CreatePlaylist";

import songs from "./data/songs";

import "./App.css";

const App = () => {

  // LOGIN
  const [isLoggedIn, setIsLoggedIn] =
    useState(
      localStorage.getItem("user")
        ? true
        : false
    );

  // RECENT SONGS
  const [recentSongs, setRecentSongs] =
    useState([]);

  // SEARCH
  const [search, setSearch] =
    useState("");

  // SELECTED SONG
  const [selectedSong, setSelectedSong] =
    useState(null);

  // DARK MODE
  const [darkMode, setDarkMode] =
    useState(
      JSON.parse(
        localStorage.getItem("darkMode")
      ) ?? true
    );

  // FAVORITES
  const [favorites, setFavorites] =
    useState(
      JSON.parse(
        localStorage.getItem("favorites")
      ) || []
    );

  // SAVE DARK MODE
  useEffect(() => {

    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );

  }, [darkMode]);

  // SAVE FAVORITES
  useEffect(() => {

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

  }, [favorites]);

  // FAVORITE FUNCTION
  const toggleFavorite = (song) => {

    const exists = favorites.find(
      (item) => item.title === song.title
    );

    if (exists) {

      setFavorites(
        favorites.filter(
          (item) =>
            item.title !== song.title
        )
      );

    } else {

      setFavorites([
        ...favorites,
        song
      ]);

    }
  };

  // PLAY SONG + SAVE RECENT
  const playSong = (song) => {

    setSelectedSong(song);

    setRecentSongs((prev) => {

      const updated = [

        song,

        ...prev.filter(
          (s) => s.title !== song.title
        )

      ];

      return updated.slice(0, 10);

    });

  };

  // ALL SONGS
  const allSongs = [

    ...songs.happy,
    ...songs.sad,
    ...songs.love,
    ...songs.chill,
    ...songs.focus

  ];

  // SEARCH FILTER
  const filteredSongs =
    allSongs.filter((song) =>
      song.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  // LOGIN PAGE
  if (!isLoggedIn) {

    return (
      <Login
        setIsLoggedIn={setIsLoggedIn}
      />
    );

  }

  return (

    <div
      className={
        darkMode
          ? "app dark"
          : "app light"
      }
    >

      {/* SIDEBAR */}
      <Sidebar />

      <div className="main-content">

        {/* TOP BAR */}
        <div className="top-bar">

          <h1 className="title">
            🎵 Happy Music
          </h1>

          <div>

            <button
              className="theme-btn"
              onClick={() =>
                setDarkMode(!darkMode)
              }
            >
              {darkMode
                ? "☀ Light"
                : "🌙 Dark"}
            </button>

            <button
              className="logout-btn"
              onClick={() => {

                localStorage.removeItem(
                  "user"
                );

                window.location.reload();

              }}
            >
              Logout
            </button>

          </div>

        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search songs..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="search-box"
        />

        {/* ROUTES */}
        <Routes>

          <Route
            path="/"
            element={
              <Home
                songs={filteredSongs}
                setSelectedSong={
                  playSong
                }
                favorites={favorites}
                toggleFavorite={
                  toggleFavorite
                }
              />
            }
          />

          <Route
            path="/trending"
            element={<Trending />}
          />

          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                setSelectedSong={
                  playSong
                }
              />
            }
          />

          <Route
            path="/browse"
            element={<Browse />}
          />

          <Route
            path="/playlists"
            element={
              <Playlists
                setSelectedSong={
                  playSong
                }
              />
            }
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/recent"
            element={
              <Recent
                recentSongs={
                  recentSongs
                }
                setSelectedSong={
                  playSong
                }
              />
            }
          />

          <Route
            path="/create"
            element={
              <CreatePlaylist />
            }
          />

        </Routes>

        {/* AUDIO PLAYER */}

{selectedSong && (

  <div className="player-container">
    
     <button
      className="close-player"
      onClick={() =>
        setSelectedSong(null)
      }
    >
      ✖
    </button>

    <h3>
      🎵 {selectedSong.title}
    </h3>

    <audio
      key={selectedSong.audio}
      controls
      autoPlay
      className="audio-player"
    >

      <source
        src={selectedSong.audio}
        type="audio/mpeg"
      />

    </audio>

  </div>

)}

      </div>

    </div>

  );

};

export default App;