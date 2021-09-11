import Header from "./Header";
import ContactList from "./ContactList";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar({
  setToken,
  ENDPOINT,
  currentUser,
  setSelectedUser,
  selectedUser,
  token
}) {
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/user/getUsers`, {
        headers: { "x-auth-token": token },
      })
      .then((res) => {
        if (res.status === 200) {
          setSuggestedUsers(Array.isArray(res.data) ? res.data : []);
        }
      });
  }, [ENDPOINT]);

  return (
    <div className="sidebar">
      <Header currentUser={currentUser} setToken={setToken} />
      <ContactList
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        suggestedUsers={suggestedUsers.filter(
          (user) => user._id != currentUser._id
        )}
      />
    </div>
  );
}
