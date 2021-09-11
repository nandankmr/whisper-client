import { useEffect, useRef, useState } from "react";
import insertTextAtCursor from "insert-text-at-cursor";

export default function InputArea({
  socket,
  setChatList,
  chatList,
  currentUser,
  selectedUser,
  showEmoji,
  setShowEmoji,
  chosenEmoji,
}) {
  const messageRef = useRef();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [savedSelection, setSavedSelection] = useState(null);

  useEffect(() => {
    if (chosenEmoji != null) {
      insertTextAtCursor(messageRef.current, chosenEmoji.emoji);
      setShowPlaceholder(false);
    }
  }, [chosenEmoji]);

  const checkMessage = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
    }
  };

  const getMessage = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      if (!messageRef.current.textContent) return;
      const message = messageRef.current.innerHTML;
      const msg = {
        message,
        from: currentUser._id,
        to: selectedUser._id,
        timestamp: Date.now(),
      };
      socket.emit("sendMessage", msg);
      setChatList((chats) => [...chats, msg]);
      messageRef.current.innerHTML = "";
      setShowEmoji(false);
    }

    setShowPlaceholder(messageRef.current.textContent === "" || !messageRef.current.textContent);
  };

  const handleEmojiSelection = () => {
    messageRef.current.focus();
    restoreSelection(savedSelection);
    setShowEmoji(!showEmoji);
  };

  return (
    <div style={{ ...style.inputArea }}>
      {showPlaceholder ? (
        <div style={{ ...style.placeholder }}>Enter a message</div>
      ) : null}
      <div
        ref={messageRef}
        style={{
          ...style.inputBox,
        }}
        onKeyUp={getMessage}
        onKeyPress={checkMessage}
        contentEditable
        onBlur={(e) => setSavedSelection(saveSelection())}
      ></div>
      <div onClick={handleEmojiSelection} className="emojiDiv"></div>
    </div>
  );
}

const style = {
  inputArea: {
    display: "flex",
    // height: "60px",
    alignItems: "center",
    background: "#ddd",
  },
  inputBox: {
    background: "#fff",
    minHeight: "40px",
    flex: 1,
    margin: "10px 3px",
    outline: "none",
    padding: "7px 20px",
    // display: "flex",
    alignItems: "center",
    borderRadius: "30px",
    fontSize: "20px",
    fontWeight: "300",
    maxHeight: "30vh",
    overflowY: "auto",
  },
  placeholder: {
    position: "absolute",
    fontWeight: "300",
    color: "#888",
    margin: "0 23px",
    pointerEvents: "none",
  },
};

// Restores the cursor position in the textbox
function restoreSelection(range) {
  if (range) {
    if (window.getSelection) {
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (document.selection && range.select) {
      range.select();
    }
  }
}

// Returns cursor position in the text box
function saveSelection() {
  if (window.getSelection) {
    let sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
  } else if (document.selection && document.selection.createRange) {
    return document.selection.createRange();
  }
  return null;
}
