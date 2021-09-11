import Picker, { SKIN_TONE_NEUTRAL } from "emoji-picker-react";
import { useState, useRef, useEffect } from "react";

export default function EmojiPicker({
  showEmoji,
  setChosenEmoji,
  setShowEmoji,
}) {
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
    setShowEmoji(false);
  };

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div ref={node}>
      <Picker
        onEmojiClick={onEmojiClick}
        skinTone={SKIN_TONE_NEUTRAL}
        pickerStyle={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          maxWidth: "90%",
        }}
        disableAutoFocus={true}
        disableSkinTonePicker={true}
      />
    </div>
  );
}


