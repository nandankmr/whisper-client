import { useRef, useState } from "react";
import EmojiPicker from "./EmojiPicker";

export default function ChatView({
  chatList,
  selectedUser,
  setChatList,
  showEmoji,
  setShowEmoji,
  setChosenEmoji,
}) {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const scrollStatusRef = useRef();
  const scrollToBottomBtnRef = useRef();

  const handleScroll = () => {
    return scrollStatusRef.current
      ? setIsScrolledToBottom(
          scrollStatusRef.current.scrollTop +
            scrollStatusRef.current.offsetHeight >=
            scrollStatusRef.current.scrollHeight
        )
      : null;
  };

  const scrollToBottom = () =>
    scrollToBottomBtnRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ ...style.chatGroup }}>
      <div
        ref={scrollStatusRef}
        onScroll={handleScroll}
        className="chatContainer"
      >
        {chatList.map((item, index) => (
          <div
            dangerouslySetInnerHTML={{ __html: item.message }}
            className="eachChat"
            key={index}
            style={
              item.from !== selectedUser._id
                ? { marginLeft: "auto", borderRadius: "10px 10px 0" }
                : {}
            }
          ></div>
        ))}
        <div ref={scrollToBottomBtnRef} className="scroll-into-view"></div>
      </div>
      <div
        onClick={scrollToBottom}
        style={{
          transform: isScrolledToBottom ? "scale(0.0004)" : "rotate(90deg)",
        }}
        className="scrollDiv"
      ></div>
      {showEmoji ? (
        <EmojiPicker
          setChosenEmoji={setChosenEmoji}
          showEmoji={showEmoji}
          setShowEmoji={setShowEmoji}
        />
      ) : null}
    </div>
  );
}

const style = {
  chatGroup: {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
    overflow: "auto",
    position: "relative",
  },
};

const scrollToElement = (elementExists, scrollDuration = 100) => {
  if (elementExists && elementExists.getBoundingClientRect) {
    const rect = elementExists.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY; // a bit of space from top
    var cosParameter = (window.scrollY - elementTop) / 2,
      scrollCount = 0,
      oldTimestamp = performance.now();
    function step(newTimestamp) {
      // console.log(scrollCount);
      scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) {
        window.scrollTo(0, elementTop);
        return;
      }
      window.scrollTo(
        0,
        Math.round(cosParameter + cosParameter * Math.cos(scrollCount)) +
          elementTop
      );
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }
};
