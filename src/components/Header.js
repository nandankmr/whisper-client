import { useState } from "react";
import Menu from "./Menu";

export default function Header({ setToken, currentUser }) {
  const menuOptions = [
    {
      title: "Logout",
      onClick: () => {
        setToken(null);
      },
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="header-options">
      <div className="userHeader">
        <span className="userIcon">{currentUser.username[0]}</span>
        <span>{currentUser.username}</span>
      </div>
      <div>
        <div
          style={showMenu ? { background: "rgba(0,0,0,.1)" } : {}}
          onClick={() => setShowMenu(!showMenu)}
          className="option-svg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="currentColor"
              d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
            ></path>
          </svg>
        </div>

        {showMenu ? (
          <Menu setShowMenu={setShowMenu} menuOptions={menuOptions} />
        ) : null}
      </div>
    </div>
  );
}
