import EmojiPicker from "emoji-picker-react";
import "./chat.css";
import { useState } from "react";

const Chat = () => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [text, setText] = useState("");

  const handleEmojiPick = (e) => {
    setText((prev) => prev + e.emoji);
    setOpenEmojiPicker(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor adipisicing elit. Nam, aut?</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">center</div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder="Type a message..." value={text} onChange={(e) => setText(e.target.value)} />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpenEmojiPicker((prev) => !prev)} />
          <div className="picker">
            <EmojiPicker open={openEmojiPicker} onEmojiClick={handleEmojiPick} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
