import { useState } from "react";
import axios from "axios";

export default function LoginOrSignup({ type, setType, setToken, ENDPOINT }) {
  // states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [dataError, setDataError] = useState("");

  // constant
  const usernameRegex = /^[a-zA-Z_]{1}[a-zA-Z0-9_]{0,14}$/;

  // functions
  const validateData = () => {
    let errorDisplayed = false;
    setDataError("");
    if (username.length > 0 && usernameRegex.test(username)) {
      setUsernameError("");
    } else {
      setUsernameError(
        "A username can only contain letters, numbers and underscore (_). First character must be a letter."
      );
      errorDisplayed = true;
    }

    if (password.length >= 6) {
      setPasswordError("");
    } else {
      setPasswordError("Password must be at least 6 characters");
      errorDisplayed = true;
    }

    if (errorDisplayed) {
      return 0;
    }

    console.log(`${username} and ${password} are valid`);

    const data = {
      username,
      password,
    };

    if (type === "login") {
      axios
        .post(`${ENDPOINT}/user/login`, data)
        .then((res) => {
          if (res.status === 200) {
            setToken(res.data.token);
          }
        })
        .catch((err) => {
          if (err.response.data) {
            if (err.response.data.status === 0) {
              setUsernameError("User does not exist.");
            } else if (err.response.data.status === 2) {
              setDataError("Invalid credentials");
            }
          }
        });
    } else {
      axios
        .post(`${ENDPOINT}/user/register`, data)
        .then((res) => {
          if (res.status === 201) {
            setToken(res.data.token);
          }
        })
        .catch((err) => {
          setUsernameError(err.response.data.msg);
        });
    }
  };

  const updateType = (value) => {
    setPasswordError("");
    setPassword("");
    setUsernameError("");
    setUsername("");
    setType(value);
  };

  // JSX
  return (
    <div className="login">
      <div className="login-header">
        {type === "login" ? "Login" : "Signup"}
      </div>
      <span className="label">User name:</span>
      <input
        name="username"
        value={username}
        placeholder="Enter a username"
        onChange={(e) => setUsername(e.target.value)}
        type="username"
        maxLength="15"
      />
      <div className="error">
        <span>{usernameError}</span>
      </div>
      <span className="label">Password:</span>
      <input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        type="password"
      />
      <div className="error">
        <span>{passwordError}</span>
      </div>
      <div onClick={validateData} className="button">
        Submit
      </div>
      <div className="error">
        <span>{dataError}</span>
      </div>
      {type === "login" ? (
        <p>
          Don't have an account?{" "}
          <span className="change-type" onClick={() => updateType("signup")}>
            Signup
          </span>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <span className="change-type" onClick={() => updateType("login")}>
            Login
          </span>
        </p>
      )}
    </div>
  );
}
