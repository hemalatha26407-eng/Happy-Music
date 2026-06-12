import { useState } from "react";

const Login = ({ setIsLoggedIn }) => {

  const [name, setName] = useState("");

  const handleLogin = () => {

    if(name.trim() !== ""){

      localStorage.setItem("user", name);

      setIsLoggedIn(true);

    }
  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>🎵 Spotify Clone</h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>

  );
};

export default Login;