// import { useState } from "react";
import { useState } from "react";
import ChatView from "./ChatView";
import ConHeader from "./ConHeader";
import InputArea from "./InputArea";

export default function Conversation({
  selectedUser,
  socket,
  setChatList,
  chatList,
  currentUser,
}) {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  return (
    <div className="conversation">
      <ConHeader selectedUser={selectedUser} />
      <ChatView
        chatList={chatList}
        selectedUser={selectedUser}
        setChatList={setChatList}
        showEmoji={showEmoji}
        setShowEmoji={setShowEmoji}
        setChosenEmoji={setChosenEmoji}
      />
      <InputArea
        selectedUser={selectedUser}
        currentUser={currentUser}
        chatList={chatList}
        setChatList={setChatList}
        socket={socket}
        setShowEmoji={setShowEmoji}
        showEmoji={showEmoji}
        chosenEmoji={chosenEmoji}
      />
    </div>
  );
}
