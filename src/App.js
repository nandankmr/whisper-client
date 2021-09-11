import "./App.css";
import MainContainer from "./components/MainContainer";
import { useEffect, useState } from "react";
import LoginOrSignup from "./components/LoginOrSignup";
import axios from "axios";

function App({socket, ENDPOINT}) {
  const [loggedIn, setLoggedIn] = useState("login");

  const [token, setToken] = useState(localStorage.getItem("whisper-token"));
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (token != null) {
      localStorage.setItem("whisper-token", token);
      // Get user data
      axios
        .get(`${ENDPOINT}/user/getCurrentUser`, {
          headers: { "x-auth-token": token },
        })
        .then((res) => {
          console.log(res.data);
          setCurrentUser(res.data.user);
        })
        .catch((err) => {
          setToken(null);
        });
    } else {
      localStorage.removeItem("whisper-token");
      setLoggedIn("login");
    }
  }, [token, ENDPOINT]);

  useEffect(() => {
    if (currentUser.username) {
      setLoggedIn("dashboard");
      socket.emit("login", currentUser)
    }
  }, [currentUser, socket]);

  return (
    <div className="top-container">
      {loggedIn === "dashboard" ? (
        <MainContainer
          currentUser={currentUser}
          ENDPOINT={ENDPOINT}
          setToken={setToken}
          socket={socket}
          token={token}
        />
      ) : (
        <LoginOrSignup
          ENDPOINT={ENDPOINT}
          setToken={setToken}
          type={loggedIn}
          setType={setLoggedIn}
        />
      )}
    </div>
  );
}

export default App;
