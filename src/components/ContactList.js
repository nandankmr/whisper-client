export default function ContactList({
  suggestedUsers,
  setSelectedUser,
  selectedUser,
}) {
  return (
    <div className="contactList">
      <div className="suggestedText">Suggested Users</div>
      {suggestedUsers.map((item) => (
        <li
          style={{
            backgroundColor: item._id === selectedUser._id ? "#eee" : "",
          }}
          onClick={() => setSelectedUser(item)}
          className="eachContact"
          key={item._id}
        >
          {" "}
          <span className="userIcon" style={{ background: "#6865c9" }}>
            {item.username[0]}
          </span>
          <div className="each-contact">
            <span>{item.username}</span>
          </div>
        </li>
      ))}
    </div>
  );
}
