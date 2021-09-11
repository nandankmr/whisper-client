import Sidebar from "./Sidebar";
import React, { useState, useEffect, useRef } from "react";
import Dashboard from "./Dashboard";
import "../App.css";
import axios from "axios";

export default function MainContainer({
  setToken,
  ENDPOINT,
  currentUser,
  socket,
  token,
}) {
  const [chatList, setChatList] = useState([]);
  const [selectedUser, _setSelectedUser] = useState(false);
  const selectedUserRef = useRef(selectedUser);
  const setSelectedUser = (value) => {
    selectedUserRef.current = value; // Use this in events to access latest value
    _setSelectedUser(value);
  };

  useEffect(() => {
    socket.on("notifyUser", (data) => {
      console.log(data);
    });

    socket.on("getMessage", (data) => {
      // console.log(data);

      selectedUserRef.current && data.from == selectedUserRef.current._id
        ? setChatList((previousChat) => [...previousChat, data])
        : console.log("data from:", data.from);
    });
  }, []);

  useEffect(() => {
    if (selectedUser !== false) {
      socket.emit("selectUser", {
        userId: selectedUser._id,
        username: selectedUser.username,
        selector: currentUser
      });

      axios
        .post(
          `${ENDPOINT}/message/getMessages`,
          { selectedUser: selectedUser._id },
          {
            headers: { "x-auth-token": token },
          }
        )
        .then((messages) => {
          console.log(messages.data);
          if (Array.isArray(messages.data)) {
            setChatList(messages.data);
          }
        });
    }
  }, [selectedUser]);

  useEffect(() => {
    if (selectedUser !== false && chatList.length > 0) {
      document.querySelector(".scroll-into-view").scrollIntoView();
    }
  }, [chatList, selectedUser]);

  return (
    <div className="mainContainer">
      <Sidebar
        setSelectedUser={setSelectedUser}
        currentUser={currentUser}
        ENDPOINT={ENDPOINT}
        setToken={setToken}
        selectedUser={selectedUser}
        token={token}
      />
      <Dashboard
        currentUser={currentUser}
        chatList={chatList}
        setChatList={setChatList}
        socket={socket}
        selectedUser={selectedUser}
      />
    </div>
  );
}
