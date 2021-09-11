import { useEffect, useRef } from "react";

export default function Menu({ menuOptions, setShowMenu }) {
  const node = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleClick = (e) => {
    if (node.current && node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setShowMenu(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <div ref={node} className="menu-div">
        {menuOptions.map((item, index) => {
          return <div key={index} onClick={item.onClick}>{item.title}</div>;
        })}
      </div>
    </div>
  );
}
