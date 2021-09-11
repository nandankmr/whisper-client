export default function ConHeader({ selectedUser }) {
  return (
    <div className="conversation-header">
      <div style={styles.headerName}>
        <span className="userIcon">{selectedUser.username[0]}</span>
        <span>{selectedUser.username}</span>
      </div>
    </div>
  );
}

const styles = {
  headerName: { display: "flex", height: "100%", alignItems: "center" },
};
