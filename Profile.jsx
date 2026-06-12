const Profile = () => {

  const username =
    localStorage.getItem("user");

  return (

    <div className="profile-page">

      <div className="profile-card">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          className="profile-img"
        />

        <h1>
          {username}
        </h1>

        <p>
          🎵 Music Lover
        </p>

        <div className="profile-stats">

          <div>

            <h2>25</h2>

            <span>Favorites</span>

          </div>

          <div>

            <h2>120</h2>

            <span>Songs</span>

          </div>

          <div>

            <h2>6</h2>

            <span>Playlists</span>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Profile;