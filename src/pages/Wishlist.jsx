import React from 'react';
import './Wishlist.jsx';

const Wishlist = ({ wishlist, onRemove }) => {
  if (wishlist.length === 0) {
    return (
      <div className="wishlist-empty">
        <span className="wishlist-empty-icon">🎵</span>
        <p>Wishlist empty-aa iruku!</p>
        <p>Songs add pannunga ❤️</p>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">🎶 My Wishlist</h2>
      <div className="wishlist-grid">
        {wishlist.map((song) => (
          <div className="wishlist-card" key={song.id}>
            <img
              src={song.thumbnail}
              alt={song.title}
              className="wishlist-thumb"
            />
            <div className="wishlist-info">
              <p className="wishlist-song-title">{song.title}</p>
              <div className="wishlist-actions">
                <a
                  href={`https://www.youtube.com/watch?v=${song.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="wishlist-play-btn"
                >
                  ▶ Play
                </a>
                <button
                  className="wishlist-remove-btn"
                  onClick={() => onRemove(song.id)}
                >
                  🗑 Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;