import Conversation from "./Conversation";

export default function Dashboard({
  selectedUser,
  socket,
  setChatList,
  chatList,
  currentUser,
}) {
  return (
    <div className="dashboard">
      {selectedUser !== false ? (
        <Conversation
          currentUser={currentUser}
          chatList={chatList}
          setChatList={setChatList}
          socket={socket}
          selectedUser={selectedUser}
        />
      ) : (
        <p className="helper-text">
          Select a contact from left to start a conversation
        </p>
      )}
    </div>
  );
}
